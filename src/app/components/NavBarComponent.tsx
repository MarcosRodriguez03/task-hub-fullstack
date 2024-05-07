"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import messageIcon from "@/assets/messagesIcon.png";
import notifications from "@/assets/fullNotifsIcon.png";
import homelogo from "@/assets/homelogo.png";
import mobilemessages from "@/assets/mobilemessagesicon.png";
import fullnotif from "@/assets/mobilefullnotifs.png";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/Context/Context";
import { getLocalStorage } from "@/utils/localStorage";
import { getEntireUserProfile, getEntireUserProfileById } from "@/utils/DataService";
import { profile } from "console";
import emptyPfp from '@/assets/emptyPfp.png'

const NavBarComponent = (prop: {
  title: string;
  setTitle: (input: string) => void;
  logo: StaticImageData;
  logoText: string;
  notificationBtn: (input: string) => void;
  notificationCheck: string;
  homePage: (input: string) => void;
  messagesPage: (input: string) => void;
  taskPage: (input: string) => void;
  pageNotificationTwo: (input: string) => void;
  pageProfile: (input: string) => void;
  profilePicture: string;
  closeTop: () => void;
}) => {



  let router = useRouter()

  const GoToHome = () => {
    router.push("./HomePage")
  }

  const GoToMessage = () => {
    router.push("./MessagePage")
  }

  // useEffect(() => {
  //   const loadAll = async () => {
  //     // let username = getLocalStorage();
  //     // let fullProfile: any = await getEntireUserProfile(username)
  //     // setUserProfile(fullProfile[0].image)




  //   }
  //   loadAll()
  // })

  return (
    <div>
      <div className={` ${prop.title == "Messages" ? "hidden" : "block lg:hidden"} `}>
        <div className="px-[20px] h-[80px] bg-[#181818] border-b-[1px] border-[#525252]">
          <div className="flex h-full">
            <p className="text-[30px] text-[#CB76F2] my-auto font-semibold">
              {prop.title}
            </p>
          </div>
        </div>
      </div>

      <div className="h-[80px] lg:h-[70px] bg-[#181818] lg:px-[20px] w-full bottom-0 fixed lg:static border-t-[1px] lg:border-t-0 lg:border-b-2 border-[#525252]">
        <div className="hidden lg:flex justify-between h-full">
          <div className="my-auto text-[24px] text-[#CB76F2]">
            <Image
              onClick={() => {
                GoToHome()
                prop.setTitle('Profile');
              }}
              className="inline me-[20px] cursor-pointer"
              src={prop.logo}
              alt="task hub logo"
            />
            <span className="my-auto">{prop.logoText}</span>
          </div>
          <div className="flex">
            <div className="my-auto">
              <Image
                className="cursor-pointer"
                height={50}
                width={50}
                src={messageIcon}
                alt="messaging icon"
                onClick={GoToMessage}
              />
            </div>
            <div className="my-auto">
              <Image
                onClick={() => {
                  if (prop.notificationCheck === "hidden lg:hidden") {
                    prop.notificationBtn("hidden lg:block");
                  } else {
                    prop.notificationBtn("hidden lg:hidden");
                  }
                }}
                height={50}
                width={50}
                className="mx-[30px] cursor-pointer"
                src={notifications}
                alt="notifications icon"
              />
            </div>
            <div onClick={() => {
              prop.pageProfile('block lg:block');
              prop.setTitle('Profile');
            }} className="my-auto rounded-[50px] bg-white h-[50px] w-[50px] cursor-pointer">
              <div className=" relative w-[50px] h-[50px] rounded-[50px]">
                <Image fill className="h-[50px] w-[50px] rounded-[50px]" src={prop.profilePicture ? prop.profilePicture : emptyPfp} alt="profile picture" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden justify-evenly h-[79px]">
          <div className="my-auto cursor-pointer">
            <Image
              onClick={() => {
                GoToHome()
                prop.homePage('block lg:block');
                prop.messagesPage('hidden lg:block');
                prop.taskPage('hidden lg:block');
                prop.pageNotificationTwo('hidden lg:hidden');
                prop.pageProfile('hidden lg:hidden');
                prop.setTitle('Projects');
              }}
              src={homelogo} height={50} width={50} alt="home icon" />
          </div>
          <div className="my-auto cursor-pointer">
            <Image
              src={mobilemessages}
              height={50}
              width={50}
              alt="messages icon"
              onClick={() => {
                GoToMessage()
                prop.homePage('hidden lg:block');
                prop.messagesPage('block lg:block');
                prop.taskPage('hidden lg:block');
                prop.pageNotificationTwo('hidden lg:hidden');
                prop.pageProfile('hidden lg:hidden');
                prop.setTitle('Messages');
              }}

            />
          </div>
          <div className="my-auto cursor-pointer">
            <Image
              onClick={() => {
                prop.homePage('hidden lg:block');
                prop.messagesPage('hidden lg:block');
                prop.taskPage('hidden lg:block');
                prop.pageNotificationTwo('block lg:hidden');
                prop.pageProfile('hidden lg:hidden');
                prop.setTitle('Notifications');
                prop.closeTop();
              }}
              src={fullnotif}
              height={50}
              width={50}
              alt="notifications icon"
            />
          </div>
          <div onClick={() => {
            prop.homePage('hidden lg:block');
            prop.messagesPage('hidden lg:block');
            prop.taskPage('hidden lg:block');
            prop.pageNotificationTwo('hidden lg:hidden');
            prop.pageProfile('block lg:block');
            prop.setTitle('Profile');
            prop.closeTop();
          }} className="my-auto rounded-[50px] bg-white h-[50px] w-[50px] cursor-pointer">
            <div className=" relative w-[50px] h-[50px] rounded-[50px]">
              <Image fill className="h-[50px] w-[50px] rounded-[50px]" src={prop.profilePicture ? prop.profilePicture : emptyPfp} alt="profile picture" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarComponent;
