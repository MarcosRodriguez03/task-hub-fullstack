"use client";
import NavBarComponent from "@/app/components/NavBarComponent";
import React, { useEffect, useState, useRef } from "react";
import homeLogo from "@/assets/homelogo.png";
import NotificationBoxComponent from "@/app/components/NotificationBoxComponent";
import plusFill from "@/assets/plusFill.png";
import Image from "next/image";
import exit from "@/assets/taskExit.png";
import ProfilePageComponent from "@/app/components/ProfilePageComponent";
import leftArrow from "../../../assets/leftArrow.png";
import sendIcon from "../../../assets/sendIcon.png";
import { getLocalStorage } from "@/utils/localStorage";
import { AddMessage, GetDMS, GetNotifications, GetSavedMessages, addDM, getEntireUserProfile, getEntireUserProfileById, getLoggedInUserData } from "@/utils/DataService";
import { useAppContext } from "@/Context/Context";
import emptyPfp from "@/assets/emptyPfp.png";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import DirectMessagesComponent from "@/app/component/DirectMessagesComponent";
import { IMessage } from "@/interface/interface";
import UserDoesntExist from "@/app/component/UserDoesntExist";

export interface IMessages {
  username: string;
  msg: string;
}

const MessagePage = () => {

  const [removeCol, setRemoveCol] = useState(" ");
  const [addCol, setAddCol] = useState("hidden");
  const [hideTop, setHideTop] = useState("block lg:hidden");
  const [topHeight, setTopHeight] = useState(" hidden");

  const [conn, setConnection] = useState<any>();
  const [messages, setMessages] = useState<IMessages[]>([]);
  const [message, setMessage] = useState<string>("");
  const [chatRoom, setChatRoom] = useState<string>("");
  const [usersId, setusersId] = useState<string>("");
  const [otherUserID, setOtherUserID] = useState<string>("");
  const [userPfp, setUserPfp] = useState<string>('');
  const [username, setUsername] = useState<string>("");
  const [directMessage, setDirectMessage] = useState<any>([]);
  const [savedMessage, setSavedMessage] = useState<IMessages[]>([]);
  const [isReal, setIsReal] = useState<boolean>(true);
  const [displayNotif, setDisplayNotif] = useState<any[]>([]);

  const messageRef = useRef<HTMLDivElement>(null);

  const data = useAppContext();

  useEffect(() => {
    const callNotifications = async () => {
        let notif = await GetNotifications(Number(data.globalUserId));
        setDisplayNotif(notif);
        if(notif.length != 0){
            setIsNotification(true);
        }else{
            setIsNotification(false);
        }

    }
    callNotifications();
})

  const joinRoom = async (username: string, room: string) => {
    conn && await conn.stop();
    const messageHistory = await GetSavedMessages(Number(room));
    setSavedMessage(messageHistory);
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("https://newtaskhubbackenddb.azurewebsites.net/chat")
        .configureLogging(LogLevel.Information)
        .build();
      conn.on("JoinSpecificChatRoom", (username, msg) => {
      });

      conn.on("ReceiveMessage", (username, msg) => {
        setMessages((messages) => [...messages, { username, msg }]);
      });

      conn.onclose(e => {
        setConnection(null);
        setMessages([]);
      })
      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", { username, room });

      setConnection(conn);
    } catch (e) {
    }
    await render();
  };

  const closeConnection = async () => {
    try {
      await conn.stop();
    } catch (e) {
    }
  }

  const messageAdd: IMessage = {
    SenderID: Number(usersId),
    Room: Number(chatRoom),
    Message: message
  }

  const sendMessage = async (message: any) => {
    await AddMessage(messageAdd);
    try {
      conn && (await conn.invoke("SendMessage", message));
    } catch (e) {
    }
  };

  const createNewDM = async () => {
    try {
      let userID = await getLoggedInUserData(username);
      await addDM(Number(usersId), userID.userId);
      await render();
    } catch (e) {
      data.setCreateProject("block")
    }



  }

  const render = async () => {
    setIsReal(!isReal);
  }

  useEffect(() => {
    const populateData = async () => {
      let input = getLocalStorage();
      let info = await getLoggedInUserData(input);
      setusersId(`${info.userId}`);
      let display = await GetDMS(Number(info.userId));
      setDirectMessage(display);
    };

    const userUsername = async () => {
      if (otherUserID != "") {
        let user = await getEntireUserProfileById(Number(otherUserID));
        setUserPfp(user.username);
      }

    }
    
    userUsername();
    populateData();





  }, [isReal]);

  const handleOpen = () => {
    if (addCol == "hidden") {
      setAddCol("block");
      setRemoveCol("hidden ");
      setHideTop("hidden");
      setTopHeight("block lg:hidden");
    } else {
      setRemoveCol(" ");
      setAddCol("hidden");
      setHideTop("block lg:hidden");
      setTopHeight("hidden");
    }
  };

  const closeTop = () => {
    setRemoveCol(" ");
    setAddCol("hidden");
    setHideTop("block lg:hidden");
    setTopHeight("hidden");
  };

  const [mobileTitle, setMobileTitle] = useState<string>("Messages");
  const [toggleNotifications, setToggleNotifications] =
    useState<string>("hidden lg:hidden");
  const [homePage, setHomePage] = useState<string>("block lg:block");
  const [notificationsPageClick, setNotificationsPageClick] =
    useState<string>("hidden lg:hidden");
  const [profilePage, setProfilePage] = useState<string>("hidden lg:hidden");
  const [messagesPage, setMessagesPage] = useState<string>("block lg:block");
  const [taskPage, setTaskPage] = useState<string>("block lg:block");
  const [userProfile, setUserProfile] = useState<any>();
  const [isNotification, setIsNotification] = useState<boolean>(true);

  const handleDoNothing = () => {

  }


  useEffect(() => {
    if (messageRef && messageRef.current) {
      const { scrollHeight, clientHeight } = messageRef.current;
      messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: 'smooth' })
    }
  }, [messages])

  useEffect(() => {
    const callNotifications = async () => {
      let notif = await GetNotifications(Number(usersId));
      setDisplayNotif(notif);
      if(notif.length != 0){
        setIsNotification(true);
    }else{
        setIsNotification(false);
    }
    }
    callNotifications();
  }, [toggleNotifications, notificationsPageClick, data.isNotif])

  useEffect(() => {
    const loadPicture = async () => {
      let username = getLocalStorage();
      let fullProfile: any = await getEntireUserProfile(username);
      setUserProfile(fullProfile[0].image);
    };
    loadPicture();
  }, [userProfile, data.pageTwoName4, data.pageTwoName]);

  return (
    <div>

      <div className={data.createProject}>
        <UserDoesntExist setCreateProject={data.setCreateProject} />
      </div>

      <div className={profilePage}>
        <ProfilePageComponent pageBool={true} pageProfileId={data.globalUserId} pageProfile={setProfilePage} />
      </div>
      <NavBarComponent
        closeTop={closeTop}
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
        profilePicture={userProfile}
        pageBool={handleDoNothing}
        isNotification = {isNotification}
      />
      <div
        className={`${toggleNotifications} absolute right-[105px] w-[520px] z-30 px-[20px] bg-[#181818] border-[#808080] border-[1px] rounded-[10px] drop-shadow-2xl shadow-2xl h-[85vh] overflow-y-auto -mt-0.5`}
      >
        <h1 className="text-white font-semibold text-[25px] mt-4 mb-3">
          Notifications
        </h1>
        <hr />
        {
          displayNotif && displayNotif.map((notif, idx) => {
            return (
              <div key={idx}>
                <NotificationBoxComponent id={notif.id} message={notif.message} />
              </div>
            )
          })
        }

      </div>
      <div
        className={` ${topHeight} h-[80px] top-0 absolute w-full bg-[#181818] flex justify-between items-center px-[15px]`}
      >
        <button
          onClick={() => {
            closeConnection();
            handleOpen();
          }}
          className="me-[15px] w-[50px] h-[50px] bg-[#212020] hover:bg-[#3a3838] active:bg-[#4a4848] rounded-[10px] flex items-center justify-center"
        >
          <Image
            className="h-[32px] w-[32px] "
            alt="back arrow"
            src={leftArrow}
          />
        </button>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <p className="text-white text-[24px]">{!conn ? '' : `${userPfp && userPfp}`}</p>
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

        <div
          className={`absolute lg:top-[70px] top-[80px] lg:bottom-0 bottom-[80px] w-full   grid grid-cols-12`}
        >
          <div
            className={`${removeCol} col-span-12 lg:col-span-3 bg-[#181818] h-full  border-r border-[#525252] lg:block `}
          >
            <div className="flex items-center  py-[25px] border-b px-[25px]  border-[#525252] ">
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                onKeyDown={(
                  e: any
                ) => {
                  if (
                    (e as React.KeyboardEvent<HTMLInputElement>).key === "Enter"
                  ) {
                    e.preventDefault();
                    if (username != "") {
                      setUsername(
                        (e as React.ChangeEvent<HTMLInputElement>).target.value
                      );
                      createNewDM();
                      setUsername("");
                    }

                  }

                }}
                value={username}
                maxLength={25}
                placeholder="Search username"
                className="w-full bg-[#282828] border h-[31px] rounded-[10px] border-[#707070] text-[#808080]"
                type="text"
              />
              <Image
                onClick={() => {
                  createNewDM();
                  setUsername("");
                }}
                className="cursor-pointer h-[40px] w-[40px]"
                alt="src"
                src={plusFill}
              />
            </div>
            <div className=" absolute  top-[93px] w-full lg:w-1/4 bottom-0 overflow-auto">
              {
                directMessage && directMessage.map((dm: any) => {
                  if (dm.isVisible) {
                    return (
                      <div key={dm.id} onClick={() => {
                        setOtherUserID(usersId == dm.userID1 ? dm.userID2 : dm.userID1);
                        closeConnection();
                        setChatRoom(dm.room);
                        joinRoom(usersId, `${dm.room}`);
                        handleOpen();
                      }}>
                        <DirectMessagesComponent chatid={dm.id} id={usersId == dm.userID1 ? dm.userID2 : dm.userID1} focus={chatRoom == dm.room ? 'lg:bg-[#252525]' : 'bg-[#181818]'} render={render} stop={closeConnection} />
                      </div>



                    )
                  }

                })
              }

            </div>
          </div>

          <div
            className={`${addCol} col-span-12 lg:col-span-9 overflow-hidden  lg:block`}
          >
            {!conn ? (
              <p className="text-white text-center mt-2">
                Currently connected with no one
              </p>
            ) : (

              <div className="h-full flex  flex-col">
                <div ref={messageRef} className="bg-black overflow-auto flex-1">
                  <div className="flex flex-col p-[15px] lg:p-[30px]">
                    {
                      savedMessage && savedMessage.map((message: any, idx: number) => {
                        return (
                          <div key={idx} className={message.senderID == Number(usersId) ? "flex justify-end items-end mt-[30px]" : "flex items-end mt-[30px]"}>
                            {/* {
                            msg.username != usersId ?
                            <img
                            alt="pfp"
                            src={userPfp && userPfp ? userPfp : emptyPfp}
                            className="rounded-[50px] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
                          /> : ''} */}
                            <div className={message.senderID == Number(usersId) ? 'bg-[#CB76F2] text-white p-2 rounded-t-xl rounded-l-xl w-auto break-all' : 'bg-[#181818] rounded-t-xl rounded-r-xl text-white p-2 w-auto break-all'}>
                              <p className="break-all">
                                {message.message}
                              </p>
                            </div>
                          </div>
                        )
                      })
                    }
                    {messages &&
                      messages.map((msg: any, idx: number) => (
                        <div key={idx} className={msg.username == usersId ? "flex justify-end items-end mt-[30px]" : "flex items-end mt-[30px]"}>
                          {/* {
                            msg.username != usersId ?
                            <img
                            alt="pfp"
                            src={userPfp && userPfp ? userPfp : emptyPfp}
                            className="rounded-[50px] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
                          /> : ''} */}
                          <div className={msg.username == usersId ? 'bg-[#CB76F2] text-white p-2 rounded-t-xl rounded-l-xl w-auto break-all' : 'bg-[#181818] rounded-t-xl rounded-r-xl text-white p-2 w-auto break-all'}>
                            <p className="break-all">
                              {msg.msg}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="bg-[#080808]  p-[15px] lg:p-[30px] ">
                  <div className="w-full h-full relative">
                    <Image
                      onClick={() => {
                        if (message != "") {

                          sendMessage(message);
                          setMessage("");
                        }

                      }}
                      alt="send"
                      src={sendIcon}
                      className="cursor-pointer w-[40px] h-[40px] absolute right-[0] bottom-0"
                    />
                    <textarea
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      onKeyDown={(
                        e: any
                      ) => {
                        if (
                          (e as React.KeyboardEvent<HTMLInputElement>).key === "Enter"
                        ) {
                          e.preventDefault();
                          setMessage(
                            (e as React.ChangeEvent<HTMLInputElement>).target.value
                          );
                          if (message !== "") {
                            e.preventDefault();
                            sendMessage(message);
                            setMessage("");
                          }
                        }
                      }}
                      value={message}
                      minLength={3}
                      maxLength={280}
                      placeholder="Type your message..."
                      className="text-[#808080] placeholder:text-[#808080] w-full pr-[50px] px-4 py-2 rounded-lg bg-[#282828] border border-[#707070] focus:outline-none focus:border-blue-500 resize-y h-full"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}
            {/* <div className="h-full flex  flex-col">

                            <div className="bg-black overflow-auto flex-1">

                                <div ref={messageRef} className="flex flex-col p-[15px] lg:p-[30px]">


                                    <MessageContainerComponent messages={messages}/>
                                    <div className="flex items-end mt-[30px]">
                                        <Image alt="pfp" src={homeLogo} className="rounded-[50px] w-[40px] h-[40px] lg:w-[75px] lg:h-[75px]" />
                                        <div className="bg-[#CB76F2] text-white p-2 rounded-lg w-full">Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1Message 1</div>
                                    </div>

                                    <div className="flex items-end mt-[30px] ">
                                        <Image alt="pfp" src={homeLogo} className="rounded-[50px] w-[40px] h-[40px] lg:w-[75px] lg:h-[75px]" />
                                        <div className="bg-[#181818] text-white h-full p-2 rounded-lg w-full">Message 1Message 1Message 1Message 1Messagage 1Message 1Message 1</div>
                                    </div>
                                    <div className="flex items-end mt-[30px] ">
                                        <Image alt="pfp" src={homeLogo} className="rounded-[50px] w-[40px] h-[40px] lg:w-[75px] lg:h-[75px]" />
                                        <div className="bg-[#181818] text-white h-full p-2 rounded-lg w-full">Message 1Message 1Message 1Message 1Messagage 1Message 1Message 1</div>
                                    </div>
                                    <div className="flex items-end mt-[30px] ">
                                        <Image alt="pfp" src={homeLogo} className="rounded-[50px] w-[40px] h-[40px] lg:w-[75px] lg:h-[75px]" />
                                        <div className="bg-[#181818] text-white h-full p-2 rounded-lg w-full">Message 1Message 1Message 1Message 1Messagage 1Message 1Message 1</div>
                                    </div>
                                    <div className="flex items-end mt-[30px] ">
                                        <Image alt="pfp" src={homeLogo} className="rounded-[50px] w-[40px] h-[40px] lg:w-[75px] lg:h-[75px]" />
                                        <div className="bg-[#181818] text-white h-full p-2 rounded-lg w-full">Message 1Message 1Message 1Message 1Messagage 1Message 1Message 1</div>
                                    </div>


                                </div>
                            </div>

                            <div className="bg-[#080808]  p-[15px] lg:p-[30px] ">
                                <div className="w-full h-full relative">
                                    <Image alt="send" src={sendIcon} className="cursor-pointer w-[40px] h-[40px] absolute right-[0] bottom-0" />
                                    <textarea placeholder="Type your message..." className="text-[#808080] placeholder:text-[#808080] w-full pr-[50px] px-4 py-2 rounded-lg bg-[#282828] border border-[#707070] focus:outline-none focus:border-blue-500 resize-y h-full"></textarea>
                                </div>


                            </div>
                        </div> */}
          </div>
        </div>
      </div>

      <div className={notificationsPageClick}>
        <div className="mx-[20px] mb-[100px]">
          {
            displayNotif && displayNotif.map((notif, idx) => {
              return (
                <div key={idx}>
                  <NotificationBoxComponent id={notif.id} message={notif.message} />
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  );
};

export default MessagePage;
