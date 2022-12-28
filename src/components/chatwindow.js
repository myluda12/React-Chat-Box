
import React, { useState } from 'react';
import Search from '../resources/search.svg';
import ChatBox from './chatbox';
// import ChatBoxSection from './chatboxsection';
import EnteringChat from './enteringchat';
import MappingChatBoxSection from './ChatSectionComponents/MappingChatBoxSection';
import UserName from './ChatSectionComponents/UserName';
import ProfilePic from './ChatSectionComponents/ProfilePic';
function ChatWindow()
{
        const [showChatBox, setShowChatBox] = useState(false);
        const [showEnteringChat, setShowEnteringChat] = useState(true); 
      
       
        const handleChatBoxSectionClick = () => {
            console.log ('ChatBoxSection clicked')
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

          {/* <ChatBoxSection onClick={handleChatBoxSectionClick} /> */}
          <MappingChatBoxSection onClick={handleChatBoxSectionClick} />
         

          
        </div>
        {/* {showChatBox } */}
        {/* {!showChatBox && <EnteringChat />} */}
        {showEnteringChat && <EnteringChat />}
        {showChatBox && <ChatBox 
         />}
        
        
        
      </div>
    );
}

export default ChatWindow;