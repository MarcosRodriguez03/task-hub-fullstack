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
import { getLocalStorage, getLocalStorageProjectId, saveLocalStorage } from '@/utils/localStorage';
import { ITask } from '@/interface/interface';
import { CreateTask, GetTasksByProjectID, GetTasksByStatus, GetUsersByProjectId, getEntireUserProfile, getEntireUserProfileById } from '@/utils/DataService';
import { useAppContext } from '@/Context/Context';




const TaskPage = () => {

    const [mobileTitle, setMobileTitle] = useState<string>('Tasks');
    const [toggleNotifications, setToggleNotifications] =
        useState<string>("hidden lg:hidden");
    const [homePage, setHomePage] = useState<string>('block lg:block');
    const [notificationsPageClick, setNotificationsPageClick] = useState<string>('hidden lg:hidden');
    const [profilePage, setProfilePage] = useState<string>('hidden lg:hidden');
    const [messagesPage, setMessagesPage] = useState<string>("block lg:block");
    const [taskPage, setTaskPage] = useState<string>("block lg:block");
    const [addUser, setAddUser] = useState<string>('hidden');
    const [createTask, setCreateTask] = useState<string>('hidden');
    const [dummyData, setDummyData] = useState<any>(newData)
    const [fullArr, setFullArr] = useState<any[]>([])
    const [userArr, setUserArr] = useState<any[]>([])
    const [statusSet, setStatusSet] = useState<string>("Ideas")
    const [isTrue, setIsTrue] = useState<boolean>(true)
    const [isCreate, setIsCreate] = useState<boolean>(true)
    const [barPercent, setBarPercent] = useState<string>("0%")
    const [userProfile, setUserProfile] = useState<any>(emptyPfp)


    const data = useAppContext();


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

        return finalPercent;
    }

    // GetUsersByProjectId




    useEffect(() => {
        const fetchData = async () => {
            try {
                let currentProjectId = getLocalStorageProjectId();

                let currentDone: any = await GetTasksByStatus("Done", Number(currentProjectId))

                let taskObjArr = await GetTasksByProjectID(currentProjectId);
                console.log(barPercent)



                getPercent(await currentDone.length, await taskObjArr.length)

                setFullArr(taskObjArr);

            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        // Call fetchData when the component mounts (empty dependency array)
        // This ensures it runs once when the component initially renders
        fetchData();

    }, [isTrue, data.pageTwoName3]);

    useEffect(() => {
        const fetchUsers = async () => {



            let currentProjectId = getLocalStorageProjectId();
            let UsersByProjectId = await GetUsersByProjectId(currentProjectId);
            setUserArr(UsersByProjectId);
            // console.log(UsersByProjectId)
            let person = await getEntireUserProfileById(UsersByProjectId[0].userID)
            console.log(person)
        }
        fetchUsers();

    }, [data.pageTwoName3, data.boolUser])

    useEffect(() => {
        const loadPicture = async () => {
            let username = getLocalStorage();
            let fullProfile: any = await getEntireUserProfile(username)
            setUserProfile(fullProfile[0].image ? fullProfile[0].image : emptyPfp)
      
      
      
      
          }
          loadPicture()
    }, [userProfile, data.pageTwoName])



    return (

        <div>


            <div className={createTask}>
                <CreateTaskComponent taskId={0} boolDetermine={isCreate} setCreateTask={setCreateTask} />
            </div>


            <div className={addUser}>
                <AddUserComponent setAddUser={setAddUser} />
            </div>
            <div className={profilePage}>
                <ProfilePageComponent pageProfile={setProfilePage} />
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
            />

            <div className={`${toggleNotifications} absolute right-[105px] w-[520px] z-30 px-[20px] bg-[#181818] border-[#808080] border-[1px] rounded-[10px] drop-shadow-2xl shadow-2xl h-[85vh] overflow-y-auto -mt-0.5`}>
                <h1 className="text-white font-semibold text-[25px] mt-4 mb-3">Notifications</h1>
                <hr />
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

            <div className={homePage}>
                <div className="flex flex-col lg:flex-row bg-[#080808] absolute top-[80px] lg:top-[70px] bottom-[80px] lg:bottom-0 w-full" >
                    <div className="border-y lg:border-r border-[#525252] lg:w-[100px] items-center w-full lg:h-full h-[54px] bg-[#181818] flex lg:flex-col overflow-x-scroll  lg:overflow-auto ">

                        <>
                            <Image
                                onClick={handleAddUser}
                                className='ml-[20px] lg:ml-0 lg:mt-[20px] w-[34px] h-[34px] cursor-pointer' alt='add' src={addPeople} />
                        </>



                        {userArr && userArr.map(async (user) => {

                            let person: any = await getEntireUserProfileById(user.userID);
                            // return <>{console.log(person && person)}</>
                            return (
                                <>
                                    <div onClick={handleNothing} className=' lg:mt-3' >
                                        <div className='  mx-auto  relative h-[34px] w-[34px]'>
                                            {
                                                person.image && person.image != null ? <Image fill className='    w-[34px] h-[34px] rounded-[50px]' alt='pfp' src={person.image && person.image} /> : <Image src={emptyPfp} alt='default pfp' />
                                            }
                                        </div>

                                        <p className='w-[100px] text-[20px] text-center text-white hidden lg:block'>{person && person.username}</p>
                                    </div>

                                </>
                            );
                        })}








                    </div>
                    <div className="  flex flex-col flex-grow w-full relative  top-0 bottom-[80px] lg:bottom-0">
                        {/* desktop buttons */}
                        <div className='hidden lg:block'>
                            <div className='grid grid-cols-3 px-[30px] gap-[30px] pt-[30px]'>
                                <div className=' w-full h-[59px] bg-[#CB76F2] rounded-[10px] flex items-center justify-between p-[25px]'>
                                    <p className='text-[24px] text-white'>Ideas</p>
                                    <Image
                                        onClick={() => {
                                            setCreateTask('block')
                                            setIsCreate(true)
                                        }}
                                        alt="add" className='w-[30px] h-[30px] cursor-pointer' src={purplePlus} />
                                </div>

                                <div className=' w-full h-[59px] bg-[#04BAAD] rounded-[10px] flex items-center justify-between p-[25px]'>
                                    <p className='text-[24px] text-white'>In Progress</p>
                                    <Image
                                        onClick={() => {
                                            setCreateTask('block')
                                            setIsCreate(true)
                                        }}
                                        alt="add" className='w-[30px] h-[30px] cursor-pointer' src={greenPlus} />
                                </div>

                                <div className=' w-full h-[59px] bg-[#EC5A52] rounded-[10px] flex items-center justify-between p-[25px]'>
                                    <p className='text-[24px] text-white'>Done</p>
                                    <Image
                                        onClick={() => {
                                            setCreateTask('block')
                                            setIsCreate(true)
                                        }}
                                        alt="add" className='w-[30px] h-[30px] cursor-pointer' src={redPlus} />
                                </div>
                            </div>
                        </div>


                        {/* desktop task */}
                        <div className='hidden lg:block'>
                            <div className='  grid grid-cols-3 px-[30px] gap-[30px] absolute top-[109px]  bottom-[80px] w-full'>
                                <div className=' w-full overflow-auto '>
                                    {fullArr && fullArr.map((task: ITask) => (
                                        task.status === "Ideas" && (
                                            <div key={task.id} >
                                                <TaskSqaureComponent taskId={task.id} taskName={task.taskName} priority={task.priority} ID={task.userID} />
                                            </div>
                                        )
                                    ))}


                                </div>

                                <div className=' w-full  overflow-auto'>

                                    {/* <p className='text-white'> middle input</p> */}

                                    {fullArr && fullArr.map((task: ITask) => (
                                        task.status === "In progress" && (
                                            <div key={task.id} >
                                                <TaskSqaureComponent taskId={task.id} taskName={task.taskName} priority={task.priority} ID={task.userID} />
                                            </div>
                                        )
                                    ))}

                                </div>

                                <div className=' w-full overflow-auto '>

                                    {/* <p className='text-white'>  right input</p> */}

                                    {fullArr && fullArr.map((task: ITask) => (
                                        task.status === "Done" && (
                                            <div key={task.id} >
                                                <TaskSqaureComponent taskId={task.id} taskName={task.taskName} priority={task.priority} ID={task.userID} />
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
                                        setCreateTask('block')
                                        setIsCreate(true)
                                    }}
                                    className='cursor-pointer mt-[20px] col-span-3 h-[50px] bg-[#181818] border border-[#525252] rounded-[10px] flex items-center justify-between'>
                                    <p className='ml-[25px] text-[20px] text-white'>Create Task</p>
                                    <Image className='mr-[25px] w-[30px] h-[30px]' alt='add' src={plusSign} />
                                </div>
                            </div>
                        </div>


                        <div className='lg:hidden  overflow-y-auto absolute top-[162px] left-0 right-0 bottom-0 px-[20px] lg:bottom-[80px]   '>

                            Content
                            {fullArr && fullArr.map((task: ITask) => (
                                task.status === statusSet && (
                                    <TaskSqaureComponent taskId={task.id} key={task.id} taskName={task.taskName} priority={task.priority} ID={task.userID} />
                                )
                            ))}
                        </div>







                        <div className='hidden lg:block '>
                            <div className='flex justify-center absolute bottom-0 w-full py-[30px] bg-[#080808] '>
                                <div className="w-[95%]  h-6  bg-gray-200 rounded-full dark:bg-gray-700 ">
                                    <div className="h-6 bg-[#CB76F2] rounded-full dark:bg-blue-500" style={{ width: barPercent }}></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

            {/* <div className='bg-white w-full h-[80px] absolute bottom-0'>footer</div> */}
            < div className={notificationsPageClick} >
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
            </div >

        </div >







    )
}

export default TaskPage

