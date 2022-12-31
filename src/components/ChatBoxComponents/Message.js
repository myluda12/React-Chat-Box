import React from "react";
import ProfilePicture from '../../resources/profilepicture.jpeg';
function MessageContact(props) {
    return (
        <div class="flex w-3/6 m-10" >
                <img src={props.ProfilePic} class= "w-16 h-16 rounded-full m-5"></img>
                <div class="p-3 bg-mine-490 rounded-lg">
                  <div class="text-2xl text-mine-480">
                    {props.user}
                  </div>
                  <div class="text-x text-gray-600">
                    {props.msg}
                  </div>
                  <div class="text-xs text-gray-500 float-right ">
                    12:00
                  </div>
                </div>
              </div>
    );
}

export default MessageContact;
export function Message(props) {
    return (
        <div class="flex justify-end">

        <div class="flex m-10" >
        <div class="p-3 bg-mine-500 rounded-lg">
          <div class="text-2xl text-mine-480">
          {props.user}

          </div>
          <div class="text-x text-gray-600">
          {props.msg}
          </div>
          <div class="text-xs text-gray-500 float-left ">
            12:00
          </div>
        </div>
        {/* <img src={ProfilePicture} class= "w-16 h-16 rounded-full m-5"></img> */}
      </div>
      </div>
    );
}

//axios 
