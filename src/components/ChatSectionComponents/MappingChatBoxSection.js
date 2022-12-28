import React from 'react';
import ChatBoxSection from '../chatboxsection';
import SouSou from '/Users/ayajrhou/Desktop/react/project/src/resources/sel-fcht.jpeg';
import Fibo from '/Users/ayajrhou/Desktop/react/project/src/resources/hgrissen.jpeg';
import Nizar from '/Users/ayajrhou/Desktop/react/project/src/resources/profilepicture.jpeg'


export const SectionChatData = [
    {
      id: 1,
      UserName: 'Nainhaja',
      LastMessage: 'Hello, how are you?',
      Date: '00:00',
      ProfilePic: Nizar,
    },
    {
      id: 2,
      UserName: 'Hgrissen',
      LastMessage: "I'm good, thanks for asking! How about you?",
      Date: '05:00',
      ProfilePic: Fibo,
    },
    {
      id: 3,
      UserName: 'Sel-fcht',
      LastMessage: "I'm doing well too. Thanks for asking!",
      Date: '10:00',
      ProfilePic: SouSou,
    }
  ];
export const SectionMsgsData = [
    {
      id: 1,
      user: 'Nainhaja',
      msg: 'Hello, how are you?',
      Date: '00:00',
      ProfilePic: Nizar,
    },
    {
      id: 1,
      user: 'Nainhaja',
      msg: 'Hello, how are you?',
      Date: '00:00',
      ProfilePic: Nizar,
    },
    {
      id: 1,
      user: 'Nainhaja',
      msg: 'Hello, how are you?',
      Date: '00:00',
      ProfilePic: Nizar,
    },
    {
      id: 1,
      user: 'Ayajrhou',
      msg: 'Hello, how are you?',
      Date: '00:00',
      ProfilePic: Nizar,
    },
    {
      id: 1,
      user: 'Nainhaja',
      msg: 'Hello, how are you?',
      Date: '00:00',
      ProfilePic: Nizar,
    },
  ];

function MappingChatBoxSection(handleChatBoxSectionClick) {
  return (
    <div >
      {SectionChatData.map(message => (
        <ChatBoxSection
          key={message.id}
          UserName={message.UserName}
          LastMessage={message.LastMessage}
          Date={message.Date}
          ProfilePic={message.ProfilePic}
          onClick={handleChatBoxSectionClick.onClick}
        />
      ))}
    </div>
  );
}

export default MappingChatBoxSection;
