"use client";
import NavBarComponent from "@/app/components/NavBarComponent";
import React, { useEffect, useState } from "react";
import homeLogo from "@/assets/homelogo.png";
import NotificationBoxComponent from "@/app/components/NotificationBoxComponent";
import plusFill from "@/assets/plusFill.png";
import Image from "next/image";
import exit from "@/assets/taskExit.png";
import ProfilePageComponent from "@/app/components/ProfilePageComponent";
import leftArrow from '../../../assets/leftArrow.png'
import sendIcon from '../../../assets/sendIcon.png'
import { getLocalStorage } from "@/utils/localStorage";
import { getLoggedInUserData } from "@/utils/DataService";

const MessagePage = () => {

    const [removeCol, setRemoveCol] = useState(" ")
    const [addCol, setAddCol] = useState("hidden")
    const [hideTop, setHideTop] = useState("block lg:hidden")
    const [topHeight, setTopHeight] = useState(" hidden")


    const handleOpen = () => {



        if (addCol == "hidden") {
            setAddCol("block")
            setRemoveCol("hidden ")
            setHideTop("hidden")
            setTopHeight("block lg:hidden")
        } else {
            setRemoveCol(" ")
            setAddCol("hidden")
            setHideTop("block lg:hidden")
            setTopHeight("hidden")

        }
    }


    useEffect(()=>{
        const populateData = async()=>{
            let input = getLocalStorage()
            let info = await getLoggedInUserData(input)
            console.log(info);
        }
        populateData()
    })

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
            <div className={`${toggleNotifications} absolute right-[105px] z-30 px-[20px] bg-[#181818] border-[#808080] border-[1px] rounded-[10px] drop-shadow-md h-[85vh] overflow-y-auto`}>
                <h1 className="text-white font-semibold text-[25px] my-5">Notifications</h1>
                <hr/>
                <NotificationBoxComponent message="Tyler sent a message" />
                <NotificationBoxComponent message="Tyler sent a message" />
                <NotificationBoxComponent message="Tyler sent a message" />
                <NotificationBoxComponent message="Tyler sent a message" />
                <NotificationBoxComponent message="Tyler sent a message" />
                <NotificationBoxComponent message="Tyler sent a message" />
                <NotificationBoxComponent message="Tyler sent a message" />
                <NotificationBoxComponent message="Tyler sent a message" />
                <NotificationBoxComponent message="Tyler sent a message" />
                <NotificationBoxComponent message="Tyler sent a message" />
            </div>
            <div className={` ${topHeight} h-[80px] top-0 absolute w-full bg-[#181818] flex justify-between items-center px-[15px]`}>
                <button onClick={handleOpen} className="me-[15px] w-[50px] h-[50px] bg-[#212020] hover:bg-[#3a3838] active:bg-[#4a4848] rounded-[10px] flex items-center justify-center"  >
                    <Image
                        className="h-[32px] w-[32px] "
                        alt="back arrow"
                        src={leftArrow}
                    />
                </button>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <p className="text-white text-[24px]">Tyler</p>
                </div>
            </div>



            <div className={messagesPage}>

                <div className={`  ${hideTop}  `}>
                    <div className="px-[20px] h-[80px] bg-[#181818] border-b-[1px] border-[#525252]">
                        <div className="flex h-full">
                            <p className="text-[30px] text-[#CB76F2] my-auto font-semibold">
                                Messages
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`absolute lg:top-[70px] top-[80px] lg:bottom-0 bottom-[80px] w-full   grid grid-cols-12`}>
                    <div className={`${removeCol} col-span-12 lg:col-span-3 bg-[#181818] h-full  border-r border-[#525252] lg:block `} >
                        <div className="flex items-center  py-[25px] border-b px-[25px]  border-[#525252] ">
                            <input className="w-full h-[30px] bg-[#282828] border rounded-[10px] border-[#707070] text-[#808080]" type="text" />
                            <Image className="cursor-pointer h-[40px] w-[40px]" alt="src" src={plusFill} />
                        </div>
                        <div className=" absolute  top-[93px] w-full lg:w-1/4 bottom-0 overflow-auto">

                            <div className="cursor-pointer flex items-center  px-[25px] py-[10px] border-b border-[#525252] justify-between " >
                                <div
                                    onClick={handleOpen}
                                    className="flex items-center gap-[20px]">
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



                    <div className={`${addCol} col-span-12 lg:col-span-9 overflow-hidden  lg:block`}>
                        <div className="h-full flex  flex-col">

                            <div className="overflow-auto flex-1">

                                <div className="flex flex-col-reverse p-[15px] lg:p-[30px]">

                                    <div className="flex items-end mt-[30px]">
                                        <Image alt="pfp" src={homeLogo} className="rounded-[50px] w-[40px] h-[40px] lg:w-[75px] lg:h-[75px]" />
                                        <div className="bg-[#CB76F2] text-white p-2 rounded-lg w-full">Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1</div>
                                    </div>

                                    <div className="flex items-end mt-[30px] ">
                                        <Image alt="pfp" src={homeLogo} className="rounded-[50px] w-[40px] h-[40px] lg:w-[75px] lg:h-[75px]" />
                                        <div className="bg-[#181818] text-white h-full p-2 rounded-lg w-full">Message 1Message 1Message 1Message 1Messagage 1Message 1Message 1</div>
                                    </div>


                                    {/*  tyler */}


                                </div>
                            </div>

                            <div className="bg-[#080808]  p-[15px] lg:p-[30px] ">
                                <div className="w-full h-full relative">
                                    <Image alt="send" src={sendIcon} className="cursor-pointer w-[40px] h-[40px] absolute right-[0] bottom-0" />
                                    <textarea placeholder="Type your message..." className="text-[#808080] placeholder:text-[#808080] w-full pr-[50px] px-4 py-2 rounded-lg bg-[#282828] border border-[#707070] focus:outline-none focus:border-blue-500 resize-y h-full"></textarea>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>



            </div>





            <div className={notificationsPageClick}>
                <div className="mx-[20px] mb-[100px]">
                    <NotificationBoxComponent message="Tyler sent a message" />
                    <NotificationBoxComponent message="Tyler sent a message" />
                    <NotificationBoxComponent message="Tyler sent a message" />
                    <NotificationBoxComponent message="Tyler sent a message" />
                    <NotificationBoxComponent message="Tyler sent a message" />
                    <NotificationBoxComponent message="Tyler sent a message" />
                    <NotificationBoxComponent message="Tyler sent a message" />
                    <NotificationBoxComponent message="Tyler sent a message" />
                    <NotificationBoxComponent message="Tyler sent a message" />
                    <NotificationBoxComponent message="Tyler sent a message" />
                    <NotificationBoxComponent message="Tyler sent a message" />
                    <NotificationBoxComponent message="Tyler sent a message" />
                    <NotificationBoxComponent message="Tyler sent a message" />
                    <NotificationBoxComponent message="Tyler sent a message" />
                    <NotificationBoxComponent message="Tyler sent a message" />
                </div>
            </div>
        </div>

    );
};

export default MessagePage;
