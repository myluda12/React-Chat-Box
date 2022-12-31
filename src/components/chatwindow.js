
import React, { useEffect, useState } from 'react';
import Search from '../resources/search.svg';
import ChatBox from './chatbox';
// import ChatBoxSection from './chatboxsection';
import EnteringChat from './enteringchat';
import MappingChatBoxSection from './ChatSectionComponents/MappingChatBoxSection';
import { BrowserRouter, Route, Switch, Router } from 'react';

import SouSou from '/Users/ayajrhou/Desktop/react/project/src/resources/sel-fcht.jpeg';
import Fibo from '/Users/ayajrhou/Desktop/react/project/src/resources/hgrissen.jpeg';
import Nizar from '/Users/ayajrhou/Desktop/react/project/src/resources/profilepicture.jpeg'


export const SectionMsgsData = [
  [{
    id: 1,
    user: 'Nainhaja',
    msg: 'Hello, how are you?',
    Date: '00:00',
    ProfilePic: Nizar,
  },
  {
    id: 2,
    user: 'Ayajrhou',
    msg: 'Hello, how are you?',
    Date: '00:00',
    ProfilePic: Nizar,
  },
  {
    id: 1,
    user: 'Nainhaja',
    msg: 'Great.',
    Date: '00:00',
    ProfilePic: Nizar,
  },
  {
    id: 2,
    user: 'Ayajrhou',
    msg: 'Okay.',
    Date: '00:00',
    ProfilePic: Nizar,
  },

  ],
  [{
    id: 1,
    user: 'AMine',
    msg: 't9wd',
    Date: '00:00',
    ProfilePic: Fibo,
  },
  {
    id: 2,
    user: 'Ayajrhou',
    msg: 'Hello, how are you?',
    Date: '00:00',
    ProfilePic: Nizar,
  },
  {
    id: 1,
    user: 'AMine',
    msg: 'T9wwd.',
    Date: '00:00',
    ProfilePic: Fibo,
  },
  {
    id: 2,
    user: 'Ayajrhou',
    msg: 'Okay.',
    Date: '00:00',
    ProfilePic: Nizar,
  },

  ],
  [{
    id: 1,
    user: 'sousou',
    msg: 'mikrob',
    Date: '00:00',
    ProfilePic: SouSou,
  },
  {
    id: 2,
    user: 'Ayajrhou',
    msg: 'Hello, how are you?',
    Date: '00:00',
    ProfilePic: Nizar,
  },
  {
    id: 1,
    user: 'sousou',
    msg: 'chchcchch ',
    Date: '00:00',
    ProfilePic: SouSou,
  },
  {
    id: 2,
    user: 'Ayajrhou',
    msg: 'Okay.',
    Date: '00:00',
    ProfilePic: Nizar,
  },

  ],

];


function ChatWindow() {
  const [showChatBox, setShowChatBox] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [showEnteringChat, setShowEnteringChat] = useState(true);

  const handleChatBoxSectionClick = (convId) => {
    console.log('ChatBoxSection clicked')
    console.log({ convId })

    setSelectedConversation(SectionMsgsData[convId]);
    setShowChatBox(true);
    setShowEnteringChat(false);

  }


  return (
    <div className="flex flex-row">

      <div class="bg-mine-450 w-96 h-screen flex flex-col overflow-auto ">
        <div class=" p-8 flex flex-col bg-mine-450">
          <div class="flex justify-center items-center bg-black">
            <input type="text"
              class="p-2 w-10/12 bg-black text-white "
              placeholder="Search for users"
            />
            <img src={Search} alt="search"></img>
          </div>
        </div>

        <MappingChatBoxSection onClick={handleChatBoxSectionClick} />
      </div>
    
      {showEnteringChat && <EnteringChat />}
      {showChatBox && <ChatBox sectionMsgsData={selectedConversation} />}
   



    </div>
  );
}

export default ChatWindow;