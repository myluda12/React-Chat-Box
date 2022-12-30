import React, { useEffect, useRef, useState } from 'react';
import More from '../resources/more.svg';
import ProfilePicture from '../resources/profilepicture.jpeg';
import MessageContact, { Message } from './ChatBoxComponents/Message';



function ChatBox(props) {

  const [chatmsgs, setchatmsgs] = useState([]);
  const inputRef = useRef(null);
  const sendMesg = () => {
    // emit to chat getway mesg sent
    if (inputRef != null) {
      var msg = inputRef.current.value;
      console.log(msg);
      if (msg !== "") {
        const newMsg = {
          id: 1,
          user: "Ayajrhou",
          msg: msg,
          Date: '00:00',
        };
        setchatmsgs([...chatmsgs, newMsg])
        inputRef.current.value = ""
      }
    }
  }

  useEffect(() => {
    if (props.sectionMsgsData != null) setchatmsgs(props.sectionMsgsData)
  }, [props.sectionMsgsData])


  return (
    <div class="h-full flex-grow flex flex-col">
      <div class="w-full h-18 bg-mine-480 justify-between flex">
        <div class="flex items-center">
          <div class="p-2">
            <img src={ProfilePicture} class="h-16 w-16 rounded-full"></img>
            <div class="flex justify-center items-center w-3 h-3 relative left-6 bottom-3 bg-white">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div class="p-2">
            <div class="text-xl text-gray-500 ">Nainhaja</div>
          </div>
        </div>
        <div class="flex items-center p-3">
          <img src={More} class="w-5 h-5  "></img>
        </div>
      </div>
      <div class="w-full flex-grow bg-mine-470 overflow-scroll">
        {
          chatmsgs.map((item) => {
            if (item.user === "Ayajrhou")
              return <Message msg={item.msg} user={item.user} />
            return <MessageContact ProfilePic={item.ProfilePic} msg={item.msg} user={item.user} />
          })
        }
        {/* <MessageContact />
              <Message /> */}
      </div>
      <div class="w-full h-20 flex px-10 bg-black">
        <input ref={inputRef} placeholder="Type your message... " type="text" class="rounded-full mr-48 flex-grow my-4 p-4 focus:outline-none bg-gray-600 "></input>
        <div onClick={sendMesg} class="rounded-full flex my-4 p-4 mr-12  bg-mine-470  text-mine-490">Send message</div>
      </div>
    </div>
  );
}


export default ChatBox;


export const ChatComp = ({ msg, user }) => {
  return (
    <div>

    </div>
  );
}

