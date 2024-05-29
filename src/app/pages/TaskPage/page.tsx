'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import purplePlus from '@/assets/puplePlus.png'
import greenPlus from '@/assets/greenPlus.png'
import redPlus from '@/assets/redPlus.png'
import taskHubLogo from '@/assets/taskhublogo.png'
import homelogo from '@/assets/homelogo.png'
import taskExit from '@/assets/taskExit.png'
import highWarning from '@/assets/highWarning.png'
import emptyPfp from '@/assets/emptyPfp.png'
import addPeople from '@/assets/addPeople.png'
import plusSign from '@/assets/plusSign.png'
import TaskSqaureComponent from '@/app/component/TaskSqaureComponent';
import { Button } from 'flowbite-react';
import NavBarComponent from '@/app/components/NavBarComponent';
import NotificationBoxComponent from '@/app/components/NotificationBoxComponent';
import ProfilePageComponent from '@/app/components/ProfilePageComponent';
import AddUserComponent from '@/app/component/AddUserComponent';
import CreateTaskComponent from '@/app/component/CreateTaskComponent';
import newData from '@/app/TestTask.json'
import { getLocalStorage, getLocalStorageProjectId, getLocalStorageUserID, saveLocalStorage } from '@/utils/localStorage';
import { IProject, ITask, ITaskArr, IUserProfile } from '@/interface/interface';
import { CreateTask, GetNotifications, GetProjectByID, GetTasksByProjectID, GetTasksByStatus, GetUsersByProjectId, RemoveUserFromProjectByID, getEntireUserProfile, getEntireUserProfileById } from '@/utils/DataService';
import { useAppContext } from '@/Context/Context';
import ViewTaskComponent from '@/app/component/ViewTaskComponent';
import ConfirmDeleteComponent from '@/app/component/ConfirmDeleteComponent';
import CreateTaskTwoComponent from '@/app/component/CreateTaskTwoComponent';
import UserDoesntExist from '@/app/component/UserDoesntExist';
import leaveProject from '@/assets/leaveProject.png'
import { useRouter } from 'next/navigation';
import DoYouWantToLeaveComponent from '@/app/component/DoYouWantToLeaveComponent';




const TaskPage = () => {

    const [mobileTitle, setMobileTitle] = useState<string>('Tasks');
    const [toggleNotifications, setToggleNotifications] = useState<string>("hidden lg:hidden");
    const [homePage, setHomePage] = useState<string>('block lg:block');
    const [notificationsPageClick, setNotificationsPageClick] = useState<string>('hidden lg:hidden');
    const [profilePage, setProfilePage] = useState<string>('hidden lg:hidden');
    const [messagesPage, setMessagesPage] = useState<string>("block lg:block");
    const [taskPage, setTaskPage] = useState<string>("block lg:block");
    const [addUser, setAddUser] = useState<string>('hidden');
    const [createTask, setCreateTask] = useState<string>('hidden');
    const [createTaskTwo, setCreateTaskTwo] = useState<string>('hidden');
    const [fullArr, setFullArr] = useState<ITask[]>([])
    const [userArr, setUserArr] = useState<IUserProfile[]>([])
    const [statusSet, setStatusSet] = useState<string>("Ideas")

    const [isCreate, setIsCreate] = useState<boolean>(true)
    const [barPercent, setBarPercent] = useState<string>("0%")
    const [userProfile, setUserProfile] = useState<IUserProfile>()


    const [profileId, setProfileId] = useState<number>(4)
    const [pageBool, setPageBool] = useState<boolean>(true)
    const [isDeleteTask, setIsDeleteTask] = useState<boolean>(false)
    const [status, setStatus] = useState<string>("")
    const [displayNotif, setDisplayNotif] = useState<any[]>([]);
    const [createProject, setCreateProject] = useState<string>('hidden');
    const [ownProject, setOwnProject] = useState<number>(0)
    const [currentUserId, setCurrentUserId] = useState<number>(0);
    const [leave, setLeave] = useState<string>("hidden")


    const data = useAppContext();

    const router = useRouter()

    const handleLeave = async () => {
        let projId = getLocalStorageProjectId();
        await RemoveUserFromProjectByID(currentUserId, projId)
        data.setBoolUser(!data.boolUser);
        router.push('./HomePage')
    }

    const handleAddUser = () => {
        setAddUser('block');
    }

    const handleNothing = () => {

    }
    const giveId = (num: string) => {
        saveLocalStorage(num)
    }

    const getPercent = (numOne: number, numTwo: number) => {

        let percent = (numOne / numTwo) * 100;
        let round = Math.round(percent).toString();
        let finalPercent = round + "%"
        setBarPercent(finalPercent)

    }






    useEffect(() => {
        const fetchData = async () => {



            let currentProjectId = getLocalStorageProjectId();
            let userId = getLocalStorageUserID();
            setCurrentUserId(userId)

            if (currentProjectId != null) {
                try {
                    let owner: IProject = await GetProjectByID(currentProjectId)
                    setOwnProject(owner.userID)
                } catch (e) {
                    console.log("")
                }

            }


            let currentDone = await GetTasksByStatus("Done", Number(currentProjectId))
            let taskObjArr = await GetTasksByProjectID(currentProjectId);

            setFullArr(taskObjArr);
            getPercent(currentDone.length, taskObjArr.length)



        };


        fetchData();

    }, [data.pageTwoName3]);

    useEffect(() => {
        const fetchUsers = async () => {
            let currentProjectId = getLocalStorageProjectId();
            let UsersByProjectId = await GetUsersByProjectId(currentProjectId);


            let TaskUsersArr = []
            for (let i = 0; i < UsersByProjectId.length; i++) {
                let person: IUserProfile = await getEntireUserProfileById(UsersByProjectId[i].userID);

                TaskUsersArr.push(person)
            }
            setUserArr(TaskUsersArr)
        }
        fetchUsers();

    }, [data.boolUser])

    useEffect(() => {
        const loadPicture = async () => {
            let username = getLocalStorage();
            let fullProfile = await getEntireUserProfile(username)
            setUserProfile(fullProfile[0].image)
        }
        loadPicture()
    }, [data.pageTwoName4, data.pageTwoName])

    useEffect(() => {
        const callNotifications = async () => {
            let notif = await GetNotifications(Number(data.globalUserId));
            setDisplayNotif(notif);

        }
        callNotifications();
    }, [toggleNotifications, notificationsPageClick, data.isNotif])



    return (

        <div>

            <div className={data.createProject}>
                <UserDoesntExist setCreateProject={data.setCreateProject} />
            </div>
            <div className={`${leave} z-50`}>
                <DoYouWantToLeaveComponent leaveFunation={handleLeave} setCreateProject={setLeave} />
            </div>

            <div className={` ${createTaskTwo} z-50`}>
                <CreateTaskTwoComponent passingValue={status} taskId={0} boolDetermine={isCreate} setCreateTask={setCreateTaskTwo} />
            </div>

            <div className={isDeleteTask ? "block" : "hidden"}>
                <ConfirmDeleteComponent projectName='' projectId={0} isTrue={true} isDeleteTask={isDeleteTask} setIsDeleteTask={setIsDeleteTask} />
            </div>


            <div className={`${createTask} z-50`}>
                <CreateTaskComponent taskId={0} boolDetermine={isCreate} setCreateTask={setCreateTask} />
            </div>


            <div className={addUser}>
                <AddUserComponent setAddUser={setAddUser} />
            </div>
            <div className={profilePage}>
                <ProfilePageComponent pageProfile={setProfilePage} pageBool={pageBool} pageProfileId={profileId} />
            </div>

            <NavBarComponent title={mobileTitle}
                closeTop={handleNothing}
                setTitle={setMobileTitle}
                logo={homelogo}
                logoText=""
                notificationBtn={setToggleNotifications}
                notificationCheck={toggleNotifications}
                homePage={setHomePage}
                messagesPage={setMessagesPage}
                taskPage={setTaskPage}
                pageNotificationTwo={setNotificationsPageClick}
                pageProfile={setProfilePage}
                profilePicture={userProfile}
                pageBool={setPageBool}
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
                <div className="flex flex-col lg:flex-row bg-[#080808] absolute top-[80px] lg:top-[70px] bottom-[80px] lg:bottom-0 w-full" >
                    <div className="border-y lg:border-r border-[#525252] lg:w-[100px] items-center w-full lg:h-full h-[54px] bg-[#181818] flex lg:flex-col overflow-x-scroll no-scrollbar  lg:overflow-auto ">

                        <>
                            <Image
                                onClick={handleAddUser}
                                className='ml-[20px] lg:ml-0 lg:mt-[20px] w-[34px] h-[34px] cursor-pointer' alt='add' src={addPeople} />
                        </>

                        {userArr && userArr.map((person, idx) => {
                            return <div key={idx} onClick={() => { setPageBool(false); setProfileId(person.id); setProfilePage(" block"); data.setIsProfileOpen(!data.isProfileOpen) }} className='cursor-pointer lg:mt-3' >
                                <div className='  lg:mx-auto ml-4   relative h-[34px] w-[34px]'>
                                    {
                                        person.image && person.image != null ? <Image fill className='    w-[34px] h-[34px] rounded-[50px]' alt='pfp' src={person.image && person.image} /> : <Image src={emptyPfp} alt='default pfp' />
                                    }
                                </div>
                                <p className=' truncate w-[90px] text-[20px] text-center text-white hidden lg:block'>{person && person.username}</p>


                            </div>

                        })}

                        {
                            ownProject && ownProject != currentUserId ? <div className='cursor-pointer mr-6 lg:mr-0 ml-auto lg:ml-0 lg:mt-auto lg:mb-12 lg:pt-6'  >
                                <div className='  lg:mx-auto ml-4    relative lg:h-[34px] lg:w-[34px] h-[30px] w-[30px]'>

                                    <Image onClick={() => { setLeave("block") }} src={leaveProject} alt='default pfp' />

                                </div>

                            </div> : <div></div>
                        }









                    </div>
                    <div className="  flex flex-col flex-grow w-full relative  top-0 bottom-[80px] lg:bottom-0">
                        {/* desktop buttons */}
                        <div className='hidden lg:block'>
                            <div className='grid grid-cols-3 px-[30px] gap-[30px] pt-[30px]'>
                                <div className=' w-full h-[59px] bg-[#CB76F2] rounded-[10px] flex items-center justify-between p-[25px]'>
                                    <p className='text-[24px] text-white'>Ideas</p>
                                    <Image
                                        onClick={() => {
                                            data.setIsClearDefault(false)
                                            setCreateTaskTwo('block')
                                            setIsCreate(true)
                                            data.setStatusNum(1)

                                            data.setUseStatus("Ideas")

                                        }}
                                        alt="add" className='w-[30px] h-[30px] cursor-pointer' src={purplePlus} />
                                </div>

                                <div className=' w-full h-[59px] bg-[#04BAAD] rounded-[10px] flex items-center justify-between p-[25px]'>
                                    <p className='text-[24px] text-white'>In Progress</p>
                                    <Image
                                        onClick={() => {
                                            data.setIsClearDefault(false)
                                            setCreateTaskTwo('block')
                                            setIsCreate(true)
                                            data.setStatusNum(2)
                                            data.setUseStatus("In progress")


                                        }}
                                        alt="add" className='w-[30px] h-[30px] cursor-pointer' src={greenPlus} />
                                </div>

                                <div className=' w-full h-[59px] bg-[#EC5A52] rounded-[10px] flex items-center justify-between p-[25px]'>
                                    <p className='text-[24px] text-white'>Done</p>
                                    <Image
                                        onClick={() => {
                                            data.setIsClearDefault(false)
                                            setCreateTaskTwo('block')
                                            setIsCreate(true)
                                            data.setStatusNum(3)
                                            data.setUseStatus("Done")


                                        }}
                                        alt="add" className='w-[30px] h-[30px] cursor-pointer' src={redPlus} />
                                </div>
                            </div>
                        </div>


                        {/* desktop task */}
                        <div className='hidden lg:block'>
                            <div className='  grid grid-cols-3 px-[30px] gap-[30px] absolute top-[109px]  bottom-[80px] w-full'>
                                <div className=' w-full no-scrollbar overflow-auto   '>
                                    {/* leftInput */}
                                    {fullArr && fullArr.map((task: ITask) => (
                                        task.status === "Ideas" && (
                                            <div key={task.id} >
                                                <TaskSqaureComponent setIsDeleteTask={setIsDeleteTask} taskId={task.id} taskName={task.taskName} priority={task.priority} ID={task.userID} />
                                            </div>
                                        )
                                    ))}


                                </div>

                                <div className=' w-full  overflow-auto no-scrollbar'>

                                    {/* <p className='text-white'> middle input</p> */}

                                    {fullArr && fullArr.map((task: ITask) => (
                                        task.status === "In progress" && (
                                            <div key={task.id} >
                                                <TaskSqaureComponent setIsDeleteTask={setIsDeleteTask} taskId={task.id} taskName={task.taskName} priority={task.priority} ID={task.userID} />
                                            </div>
                                        )
                                    ))}

                                </div>

                                <div className=' w-full overflow-auto no-scrollbar'>

                                    {/* <p className='text-white'>  right input</p> */}

                                    {fullArr && fullArr.map((task: ITask) => (
                                        task.status === "Done" && (
                                            <div key={task.id} >
                                                <TaskSqaureComponent setIsDeleteTask={setIsDeleteTask} taskId={task.id} taskName={task.taskName} priority={task.priority} ID={task.userID} />
                                            </div>

                                        )
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='lg:hidden'>
                            <div className='grid grid-cols-3 gap-x-[20px] px-[20px] mt-[20px]'>
                                <div
                                    onClick={() => setStatusSet("Ideas")}
                                    className='cursor-pointer bg-[#CB76F2] h-[50px] flex items-center rounded-[10px] justify-center'>
                                    <p className='text-[16px] text-white font-semibold' >Ideas</p>
                                </div>
                                <div
                                    onClick={() => setStatusSet("In progress")}
                                    className='cursor-pointer bg-[#04BAAD] h-[50px] flex items-center rounded-[10px] justify-center'>
                                    <p className='text-[16px] text-white font-semibold' >In Progress</p>
                                </div>
                                <div
                                    onClick={() => setStatusSet("Done")}
                                    className='cursor-pointer bg-[#EC5A52] h-[50px] flex items-center rounded-[10px] justify-center'>
                                    <p className='text-[16px] text-white font-semibold' >Done</p>
                                </div>

                                <div
                                    onClick={() => {
                                        // setCreateTask('block')
                                        // setIsCreate(true)
                                        // data.setStatusNum(1)

                                        data.setIsClearDefault(false)
                                        setCreateTaskTwo('block')
                                        setIsCreate(true)
                                        data.setStatusNum(1)
                                        data.setUseStatus("Ideas")
                                    }}
                                    className='cursor-pointer mt-[20px] col-span-3 h-[50px] bg-[#181818] border border-[#525252] rounded-[10px] flex items-center justify-between'>
                                    <p className='ml-[25px] text-[20px] text-white'>Create Task</p>
                                    <Image className='mr-[25px] w-[30px] h-[30px]' alt='add' src={plusSign} />
                                </div>
                            </div>
                        </div>


                        <div className='lg:hidden no-scrollbar overflow-y-auto absolute top-[162px] left-0 right-0 bottom-0 px-[20px] lg:bottom-[80px]   '>
                            Content
                            {fullArr && fullArr.map((task: ITask) => (
                                task.status === statusSet && (
                                    <TaskSqaureComponent setIsDeleteTask={setIsDeleteTask} taskId={task.id} key={task.id} taskName={task.taskName} priority={task.priority} ID={task.userID} />
                                )
                            ))}
                        </div>

                        <div className='hidden lg:block '>
                            <div className='flex justify-center absolute bottom-0 w-full py-[30px] bg-[#080808]  '>
                                <div className="w-[95%]  h-4  bg-gray-200 rounded-full dark:bg-gray-700 ">
                                    <div className="h-4 bg-[#CB76F2] rounded-full dark:bg-blue-500" style={{ width: barPercent }}></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

            < div className={notificationsPageClick} >
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
            </div >

        </div >







    )
}

export default TaskPage

