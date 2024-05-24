"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import taskHubLogo from "@/assets/taskhublogo.png";
import homelogo from "@/assets/homelogo.png";
import plusIcon from "@/assets/plusIcon.png";
import ProjectCardComponent from "@/app/components/ProjectCardComponent";
import NavBarComponent from "@/app/components/NavBarComponent";
import NotificationBoxComponent from "@/app/components/NotificationBoxComponent";
import ProfilePageComponent from "@/app/components/ProfilePageComponent";
import CreateProjectComponent from "@/app/component/CreateProjectComponent";
import EditProfileComponent from "@/app/component/EditProfileComponent";
import { getLocalStorage, getLocalStorageUserID, saveLocalStorageUserID } from "@/utils/localStorage";
import { GetAllProjects, GetAllProjectsUserIsIn, GetNotifications, GetTaskByID, getEntireUserProfile, getLoggedInUserData } from "@/utils/DataService";
import { IProject, IProjectUserIsIn, IUserData, IUserProfile, IUserProfileIndex } from "@/interface/interface";
import { useAppContext } from "@/Context/Context";
import { url } from "inspector";
import emptyPfp from '@/assets/emptyPfp.png';


const HomePage = () => {
    const [mobileTitle, setMobileTitle] = useState<string>('Projects');
    const [toggleNotifications, setToggleNotifications] =
        useState<string>("hidden lg:hidden");
    const [homePage, setHomePage] = useState<string>('block lg:block');
    const [notificationsPageClick, setNotificationsPageClick] = useState<string>('hidden lg:hidden');
    const [profilePage, setProfilePage] = useState<string>('hidden lg:hidden');
    const [messagesPage, setMessagesPage] = useState<string>("block lg:block");
    const [taskPage, setTaskPage] = useState<string>("block lg:block");
    const [createProject, setCreateProject] = useState<string>('hidden');
    const [editProfile, setEditProfile] = useState<string>('block');
    const [allProjectsArr, setAllProjectsArr] = useState<IProjectUserIsIn[]>([])
    const [allProjectsArr2, setAllProjectsArr2] = useState<IProject[]>([])
    const [userProfile, setUserProfile] = useState<string>()
    const [nothing, setNothing] = useState<number>(0);
    const [displayNotif, setDisplayNotif] = useState<any[]>([]);
    const [userIDuser, setuserIDuser] = useState<number>();


    const data = useAppContext()

    useEffect(() => {
        document.body.style.backgroundColor = "#080808";



        let profile = getLocalStorage();
        const loadAll = async () => {
            let user = getLocalStorageUserID();
            setuserIDuser(user);
            let usersID = await getLoggedInUserData(profile)
            data.setGlobalUserId(usersID.userId)
            saveLocalStorageUserID(usersID.userId)
            let allProjects = await GetAllProjectsUserIsIn(usersID.userId)
            console.log(allProjects)
            setAllProjectsArr(allProjects)

            let allProjects2 = await GetAllProjects()
            console.log(allProjects2)
            setAllProjectsArr2(allProjects2)



        }
        loadAll()




    }, [data.pageTwoName2]);

    useEffect(() => {

        const loadPicture = async () => {
            let username = getLocalStorage();
            let fullProfile: IUserProfileIndex = await getEntireUserProfile(username)
            setUserProfile(fullProfile[0].image);




        }
        loadPicture()

    }, [userProfile, data.pageTwoName4, data.pageTwoName])

    const handleCreateProject = () => {
        setCreateProject('block');
    }

    const handleNothing = () => {

    }

    useEffect(() => {
        const callNotifications = async () => {
          let notif = await GetNotifications(Number(data.globalUserId));
          setDisplayNotif(notif);
          console.log(notif);
        }
        callNotifications();
      }, [toggleNotifications, notificationsPageClick, data.isNotif])

    return (
        <div>



            <div className={createProject}>
                <CreateProjectComponent setCreateProject={setCreateProject} />
            </div>
            <div className={profilePage}>
                <ProfilePageComponent pageBool={true} pageProfileId={0} pageProfile={setProfilePage} />
            </div>

            <NavBarComponent
                closeTop={handleNothing}
                title={mobileTitle}
                setTitle={setMobileTitle}
                logo={taskHubLogo}
                logoText="TaskHub"
                notificationBtn={setToggleNotifications}
                notificationCheck={toggleNotifications}
                homePage={setHomePage}
                messagesPage={setMessagesPage}
                taskPage={setTaskPage}
                pageNotificationTwo={setNotificationsPageClick}
                pageProfile={setProfilePage}
                profilePicture={userProfile}
                pageBool={handleNothing}
            />



            <div className={`${toggleNotifications} absolute right-[105px] w-[520px] z-30 px-[20px] bg-[#181818] border-[#808080] border-[1px] rounded-[10px] drop-shadow-2xl shadow-2xl h-[85vh] overflow-y-auto -mt-0.5`}>
                <h1 className="text-white font-semibold text-[25px] mt-4 mb-3">Notifications</h1>
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


            <div className={homePage}>
                <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 px-[20px] xl:px-[30px] mt-[20px] lg:mt-[60px] ">
                    <div className="lg:grid lg:justify-center">
                        <div
                            onClick={handleCreateProject}
                            className="h-[50px] w-full lg:h-[340px] lg:w-[240px] 2xl:h-[365px] 2xl:w-[290px] bg-[#CB76F2] lg:bg-[#181818] rounded-[15px] border-[#525252] border-[1px] lg:border-[3px] cursor-pointer lg:text-center mb-[20px] 2xl:mb-[30px]">
                            <div className="hidden lg:block">
                                <div className="grid justify-center mt-[85px] 2xl:mt-[115px] mb-[65px] 2xl:mb-[70px]">
                                    <Image
                                        height={75}
                                        width={75}
                                        src={plusIcon}
                                        alt="plus icon"
                                    />
                                </div>
                            </div>
                            <div className="h-full lg:h-0 flex lg:grid justify-between lg:justify-normal lg: px-[25px] lg:px-0">
                                <p className="text-white text-[20px] lg:text-[24px] my-auto truncate">
                                    Create Project
                                </p>
                                <Image
                                    src={plusIcon}
                                    className=" lg:hidden inline h-[30px] w-[30px] my-auto"
                                    alt="plus icon"
                                />
                            </div>
                        </div>
                    </div>
                    {allProjectsArr && allProjectsArr.map((project: IProjectUserIsIn) => (
                        allProjectsArr2 && allProjectsArr2.map((project2) => {
                            if (project.projectID === project2.id) {
                                return (
                                    <ProjectCardComponent
                                        key={project.projectID}
                                        projectId={project.projectID}
                                        taskPage={setTaskPage}
                                        owner={project2.userID == userIDuser ? '' : 'invisible'}
                                        projectName={project2 && project2.projectName}
                                    />
                                );
                            } else {
                                return null; // Return null if no match found
                            }
                        })
                    ))}


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

export default HomePage;
