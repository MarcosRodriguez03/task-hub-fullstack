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
                    <div className=" col-span-12 lg:col-span-3 bg-[#181818] h-full  border-r border-[#525252] ">
                        <div className="flex items-center  py-[25px] border-b px-[25px]  border-[#525252] ">
                            <input className="w-full bg-[#282828] border  rounded-[10px] border-[#707070]" type="text" />
                            <Image className="h-[40px] w-[40px]" alt="src" src={plusFill} />
                        </div>
                        <div className=" absolute  top-[93px] w-full lg:w-1/4 bottom-0 overflow-auto">

                            <div className="flex items-center  px-[25px] py-[10px] border-b border-[#525252] justify-between " >
                                <div className="flex items-center gap-[20px]">
                                    <Image
                                        alt="pfp"
                                        src={homeLogo}
                                        className="h-[50px] w-[50px] rounded-[50px]"
                                    />
                                    <p className="text-white">Tyler Nguyen</p>
                                </div>
                                <Image alt="x" src={exit} className="  h-[40px] w-[40px]" />
                            </div>

                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-9 overflow-hidden hidden lg:block">
                        <div className="h-full flex  flex-col">
                            <div className="overflow-auto flex-1">

                                <div className="flex flex-col-reverse  p-4">

                                    <div className="flex items-end mt-[30px]">
                                        <Image alt="pfp" src={homeLogo} className="rounded-[50px] w-[75px] h-[75px]" />
                                        <div className="bg-[#CB76F2] text-white p-2 rounded-lg w-full">Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1</div>
                                    </div>

                                    <div className="flex items-end mt-[30px] ">
                                        <Image alt="pfp" src={homeLogo} className="rounded-[50px] w-[75px] h-[75px]" />
                                        <div className="bg-[#181818] text-white h-full p-2 rounded-lg w-full">Message 1Message 1Message 1Message 1Messagage 1Message 1Message 1</div>
                                    </div>


                                    {/*  tyler */}


                                </div>
                            </div>

                            <div className="bg-[#080808] p-[30px] ">
                                <div className="w-full h-full relative">
                                    <Image alt="send" src={homeLogo} className=" absolute right-[0] bottom-0" />
                                    <textarea placeholder="Type your message..." className="w-full pr-[50px] px-4 py-2 rounded-lg bg-[#282828] border border-[#707070] focus:outline-none focus:border-blue-500 resize-y h-full"></textarea>
                                </div>


                            </div>
                        </div>
                    </div>
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
