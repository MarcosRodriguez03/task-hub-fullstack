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

    const handleAddUser = () => {
        setAddUser('block');
    }

    // const fetchTask = async () => {
    //     const response: any = await fetch("/task-hub-fullstack/src/app/pages/TaskPage/TestTask.json");
    //     const data: any = await response.json();
    //     return data
    // }



    useEffect(() => {
        console.log(dummyData[0].TaskName)
    }, []);

    return (
        <div>
            <div className={createTask}>
                <CreateTaskComponent setCreateTask={setCreateTask} />
            </div>
            <div className={addUser}>
                <AddUserComponent setAddUser={setAddUser} />
            </div>
            <div className={profilePage}>
                <ProfilePageComponent pageProfile={setProfilePage} />
            </div>
            {/* <div className='w-full h-[80px] lg:h-[70px] bg-white'>header</div> */}
            {/* <AddUserComponent /> */}
            {/* <CreateTaskComponent /> */}
            {/* <AddUserComponent /> */}

            <NavBarComponent title={mobileTitle}
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
                profilePicture={homelogo}
            />

            <div className={`${toggleNotifications} absolute right-[110px] z-30`}>
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

                        <>
                            <Image className='  ml-[20px] lg:ml-0  lg:mt-[25px] w-[34px] h-[34px]' alt='pfp' src={greenPlus} />
                            <p className='text-[20px] text-center text-white hidden lg:block'>Tyler</p>
                        </>




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
                                        }}
                                        alt="add" className='w-[30px] h-[30px] cursor-pointer' src={purplePlus} />
                                </div>

                                <div className=' w-full h-[59px] bg-[#04BAAD] rounded-[10px] flex items-center justify-between p-[25px]'>
                                    <p className='text-[24px] text-white'>In Progress</p>
                                    <Image
                                        onClick={() => {
                                            setCreateTask('block')
                                        }}
                                        alt="add" className='w-[30px] h-[30px] cursor-pointer' src={greenPlus} />
                                </div>

                                <div className=' w-full h-[59px] bg-[#EC5A52] rounded-[10px] flex items-center justify-between p-[25px]'>
                                    <p className='text-[24px] text-white'>Done</p>
                                    <Image
                                        onClick={() => {
                                            setCreateTask('block')
                                        }}
                                        alt="add" className='w-[30px] h-[30px] cursor-pointer' src={redPlus} />
                                </div>
                            </div>
                        </div>


                        {/* desktop task */}
                        <div className='hidden lg:block'>
                            <div className='  grid grid-cols-3 px-[30px] gap-[30px] absolute top-[109px]  bottom-[80px] w-full'>

                                <div className=' w-full overflow-auto '>
                                    {/* <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} /> */}


                                    <p className='text-white'>left input</p>

                                    {dummyData.map((task: any) => {
                                        if (task.Status == "Ideas" && task.IsDeleted == false) {
                                            return <TaskSqaureComponent key={task.ID} taskName={task.TaskName} pfp={task.pfp} priority={task.priority} />

                                            // return <div key={task.ID} className='bg-white h-100 w-100'>
                                            //     <h1 className='text-black'>{task.TaskName}</h1>
                                            // </div>
                                        }
                                    })}


                                </div>

                                <div className=' w-full  overflow-auto'>

                                    <p className='text-white'> middle input</p>
                                </div>

                                <div className=' w-full overflow-auto '>

                                    <p className='text-white'>  right input</p>
                                </div>
                            </div>
                        </div>

                        <div className='lg:hidden'>
                            <div className='grid grid-cols-3 gap-x-[20px] px-[20px] mt-[20px]'>
                                <div className='cursor-pointer bg-[#CB76F2] h-[50px] flex items-center rounded-[10px] justify-center'>
                                    <p className='text-[16px] text-white font-semibold' >Ideas</p>
                                </div>
                                <div className='cursor-pointer bg-[#04BAAD] h-[50px] flex items-center rounded-[10px] justify-center'>
                                    <p className='text-[16px] text-white font-semibold' >In Progress</p>
                                </div>
                                <div className='cursor-pointer bg-[#EC5A52] h-[50px] flex items-center rounded-[10px] justify-center'>
                                    <p className='text-[16px] text-white font-semibold' >Done</p>
                                </div>

                                <div
                                    onClick={() => {
                                        setCreateTask('block')
                                    }}
                                    className='cursor-pointer mt-[20px] col-span-3 h-[50px] bg-[#181818] border border-[#525252] rounded-[10px] flex items-center justify-between'>
                                    <p className='ml-[25px] text-[20px] text-white'>Create Task</p>
                                    <Image className='mr-[25px] w-[30px] h-[30px]' alt='add' src={plusSign} />
                                </div>
                            </div>
                        </div>


                        <div className='lg:hidden  overflow-y-auto absolute top-[162px] left-0 right-0 bottom-0 px-[20px] lg:bottom-[80px]   '>
                            {/* <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
                            <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
                            <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
                            <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
                            <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
                            <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
                            <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
                            <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
                            <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
                            <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
                            <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
                            <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
                            <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
                            <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
                            <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} /> */}
                            Content
                        </div>







                        <div className='hidden lg:block '>
                            <div className='flex justify-center absolute bottom-0 w-full py-[30px] bg-[#080808] '>
                                <div className="w-[95%]  h-6  bg-gray-200 rounded-full dark:bg-gray-700 ">
                                    <div className="h-6 bg-[#CB76F2] rounded-full dark:bg-blue-500" style={{ width: "45%" }}></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className='bg-white w-full h-[80px] absolute bottom-0'>footer</div> */}
            <div className={notificationsPageClick}>
                <div className="mx-[20px]">
                    <NotificationBoxComponent message="Tyler sent a message" />
                </div>
            </div>

        </div>







    )
}

export default TaskPage

