"use client";
import NavBarComponent from "@/app/components/NavBarComponent";
import React, { useState } from "react";
import homeLogo from "@/assets/homelogo.png";
import NotificationBoxComponent from "@/app/components/NotificationBoxComponent";
import plusFill from "@/assets/plusFill.png";
import Image from "next/image";
import exit from "@/assets/taskExit.png";
import ProfilePageComponent from "@/app/components/ProfilePageComponent";

const MessagePage = () => {
  const [mobileTitle, setMobileTitle] = useState<string>("Messages");
  const [toggleNotifications, setToggleNotifications] =
    useState<string>("hidden lg:hidden");
  const [homePage, setHomePage] =
    useState<string>("block lg:block");
  const [notificationsPageClick, setNotificationsPageClick] =
    useState<string>("hidden lg:hidden");
  const [profilePage, setProfilePage] = useState<string>("hidden lg:hidden");
  const [messagesPage, setMessagesPage] = useState<string>("block lg:block");
  const [taskPage, setTaskPage] = useState<string>("block lg:block");
  return (
    <div>
      <div className={profilePage}>
        <ProfilePageComponent pageProfile={setProfilePage} />
      </div>
      <NavBarComponent
        title={mobileTitle}
        setTitle={setMobileTitle}
        logo={homeLogo}
        logoText=""
        notificationBtn={setToggleNotifications}
        notificationCheck={toggleNotifications}
        homePage={setHomePage}
        messagesPage={setMessagesPage}
        taskPage={setTaskPage}
        pageNotificationTwo={setNotificationsPageClick}
        pageProfile={setProfilePage}
        profilePicture={homeLogo}
      />
      <div className={toggleNotifications}>
        <NotificationBoxComponent message="Tyler sent a message" />
      </div>

      <div className={messagesPage}>



        <div className=" absolute lg:top-[70px] top-[80px] lg:bottom-0 bottom-[80px] w-full   grid grid-cols-12">
          <div className=" col-span-3 bg-red-200 h-full ">
            <div className="flex items-center  py-[25px] border-b px-[25px]  border-black">
              <input className="w-full" type="text" />
              <Image className="h-[40px] w-[40px]" alt="src" src={plusFill} />
            </div>

            <div className="flex items-center  px-[25px] py-[20px] border-b border-black">
              <Image
                alt="pfp"
                src={homeLogo}
                className="h-[50px] w-[50px] rounded-[50px]"
              />
              <p>Tyler Nguyen</p>
              <Image alt="x" src={exit} className="  h-[40px] w-[40px]" />
            </div>
          </div>

          <div className=" col-span-9 bg-green-300  h-full"></div>
        </div>



      </div>





      <div className={notificationsPageClick}>
        <div className="mx-[20px]">
          <NotificationBoxComponent message="Tyler sent a message" />
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
