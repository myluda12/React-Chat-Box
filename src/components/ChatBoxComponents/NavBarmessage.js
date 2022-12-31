
import React from "react";
import More from '../../resources/more.svg';
// import ProfilePicture from '../../resources/profilepicture.jpeg';

export function NavBarmessage(props)
{
    return(
    <div class="flex items-center">
        <div class="p-2">
          <img src={props.ProfilePic} class="h-16 w-16 rounded-full"></img>
          <div class="flex justify-center items-center w-3 h-3 relative left-6 bottom-3 bg-white">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div class="p-2">
          <div class="text-xl text-gray-500 ">{props.user}</div>
        </div>

        <div class="flex items-center p-3 right-0 absolute">
          <img src={More} class="w-5 h-5  "></img>
        </div>
    </div>
    );
}

export default NavBarmessage;