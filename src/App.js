import React from "react";
import Logo from './resources/logo.svg';
import Dashboard from './resources/dashboard.svg';
import AddFriend from './resources/addfriends.svg';
import Settings from './resources/settings.svg';
import Profile from './resources/profile.svg';
import LogOut from './resources/logout.svg';
import Chat from './resources/Chats.svg';
//import More from './resources/more.svg';

import ChatWindow from './components/chatwindow';
//import ParentComponent from './components/parentcomponent';

// import Rooms from './rooms.json';
//import ProfilePicture from './resources/profilepicture.jpeg';

function App() {
  return (
    // <div class="px-14 h-12 w-screen flex flex-wrap items-center justify-between bg-green-100"></div>
    <div class="flex h-full w-full">
      <div class="w-14  flex flex-col items-center justify-between bg-black">
        <div class="m-3 w-10">
          <img src={Logo} alt="emmm" />
        </div>
        <div class="flex flex-col m-3 w-10">
          <img class="py-3 w-9" src={Dashboard} alt="emmm" />
          <img class="py-3 w-9" src={AddFriend} alt="emmm" />
          <img class="py-3 w-9" src={Chat} alt="emmm" />
          <img class="py-3 w-9" src={Settings} alt="emmm" />
          <img class="py-3 w-9" src={Profile} alt="emmm" />
        </div>
        <div class="mb-3">
          <img class="py-3 w-9" src={LogOut} alt="emmm" />
        </div>
      </div> 
      <div class="flex flex-col w-full">
        <ChatWindow/>
      </div>
    </div>
  );
}

// const Room = (props) => {
//   return (
//     <div>
//       <img src={props.roomPicture} alt="roomPicture"></img>
//       <span>{props.roomName}</span>
//     </div>
//   )
// }

export default App;
