import React from "react";
import homeLogo from "@/assets/homelogo.png";
import Image from "next/image";
import { IMessages } from "../pages/MessagePage/page";

const MessageContainerComponent = ( messages:any) => {
  return (
    <div>
      {messages && messages.map((msg:any, idx:number) => (
        <div 
        key={idx}
        className="flex items-end mt-[30px]">
          <Image
            alt="pfp"
            src={homeLogo}
            className="rounded-[50px] w-[40px] h-[40px] lg:w-[75px] lg:h-[75px]"
          />
          <div className="bg-[#CB76F2] text-white p-2 rounded-lg w-full">
            {msg.msg}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageContainerComponent;
