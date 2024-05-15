'use client'
import React, { useState } from "react";
import MessageContainerComponent from "./MessageContainerComponent";
import sendIcon from "@/assets/sendIcon.png";
import Image from "next/image";
import SendMessageComponent from "./SendMessageComponent";
import { IMessages } from "../pages/MessagePage/page";

const ChatRoomComponent = ( messages:any, sendMessage:(msg:string) =>void) => {
    const [message, setMessage] = useState<string>("");
  return (
      <div className="h-full flex  flex-col">
        <div className="bg-black overflow-auto flex-1">
          <div className="flex flex-col p-[15px] lg:p-[30px]">
            <MessageContainerComponent messages={messages}/>
            
          </div>
        </div>
        <div className="bg-[#080808]  p-[15px] lg:p-[30px] ">
        <div className="w-full h-full relative">
          <Image
            onClick={() => {
              sendMessage(message);
              setMessage("");
            }}
            alt="send"
            src={sendIcon}
            className="cursor-pointer w-[40px] h-[40px] absolute right-[0] bottom-0"
          />
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            placeholder="Type your message..."
            className="text-[#808080] placeholder:text-[#808080] w-full pr-[50px] px-4 py-2 rounded-lg bg-[#282828] border border-[#707070] focus:outline-none focus:border-blue-500 resize-y h-full"
          ></textarea>
        </div>
      </div>
      </div>
  );
};

export default ChatRoomComponent;
