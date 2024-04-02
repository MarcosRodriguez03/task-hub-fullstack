"use client";

import React from "react";
import Image from "next/image";
import taskHubLogo from "@/assets/taskhublogo.png";
import messageIcon from "@/assets/messagesIcon.png";
import notifications from "@/assets/fullNotifsIcon.png";
import homelogo from '@/assets/homelogo.png';
import mobilemessages from '@/assets/mobilemessagesicon.png';
import fullnotif from '@/assets/mobilefullnotifs.png';

const NavBarComponent = (prop: { title: string }) => {
  return (
    <div>
      <div className="block lg:hidden">
        <div className="px-[20px] h-[80px] bg-[#181818] border-b-[1px] border-[#525252]">
          <div className="flex h-full">
            <p className="text-[30px] text-[#CB76F2] my-auto font-semibold">
              {prop.title}
            </p>
          </div>
        </div>
      </div>

      <div className="h-[80px] lg:h-[70px] bg-[#181818] lg:px-[30px] w-full bottom-0 fixed lg:static border-t-[1px] lg:border-t-0 lg:border-b-2 border-[#525252]">
        <div className="hidden lg:flex justify-between h-full">
          <div className="my-auto text-[24px] text-[#CB76F2]">
            <Image
              className="inline me-[20px] cursor-pointer"
              src={taskHubLogo}
              alt="task hub logo"
            />
            <span className="my-auto">Task Hub</span>
          </div>
          <div className="flex">
            <div className="my-auto">
              <Image
                className="cursor-pointer"
                height={50}
                width={50}
                src={messageIcon}
                alt="messaging icon"
              />
            </div>
            <div className="my-auto">
              <Image
                height={50}
                width={50}
                className="mx-[30px] cursor-pointer"
                src={notifications}
                alt="not full notifications icon"
              />
            </div>
            <div className="my-auto rounded-[50px] bg-white h-[50px] w-[50px] cursor-pointer"></div>
          </div>
        </div>
        <div className="flex lg:hidden justify-evenly h-[79px]">
            <div className="my-auto cursor-pointer">
                <Image src={homelogo} alt="home icon"/>
            </div>
            <div className="my-auto cursor-pointer">
                <Image src={mobilemessages} alt="messages icon"/>
            </div>
            <div className="my-auto cursor-pointer">
                <Image src={fullnotif} alt="notifications icon"/>
            </div>
            <div className="my-auto rounded-[50px] bg-white h-[50px] w-[50px] cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBarComponent;
