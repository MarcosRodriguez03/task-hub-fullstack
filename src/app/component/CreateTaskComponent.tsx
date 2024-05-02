'use client'
import React, { useEffect, useState } from 'react'
import { Dropdown } from "flowbite-react";
import greenPlus from '@/assets/greenPlus.png'
import highWarning from '@/assets/highWarning.png'
import Image from 'next/image';
import { CreateTask } from '@/utils/DataService';
import { ITask } from '@/interface/interface';
import { getLocalStorage, getLocalStorageProjectId } from '@/utils/localStorage';
import { useAppContext } from '@/Context/Context';


const CreateTaskComponent = (prop: { setCreateTask: (input: string) => void; }) => {

    const [useProjectID, setUseProjectID] = useState<number>(0);
    const [useTaskName, setUseTaskName] = useState<string>("");
    const [useTaskDescription, setUseTaskDescription] = useState<string>("");
    const [useTaskDuration, setUseTaskDuration] = useState<string>("")
    const [useUserID, serUseUserID] = useState<number>(1)
    const [useDueDate, setUseDueDate] = useState<string>("")
    const [usePriority, setUsePriority] = useState<string>("Low Urgency");
    const [useStatus, setUseStatus] = useState<string>("Ideas");
    const [useIsDeleted, setUseIsDeleted] = useState<boolean>(false)
    const [isTrue, setIsTrue] = useState<boolean>(false);


    const data = useAppContext()

    const [open, setOpen] = useState("hidden");

    const handleCreateTask = async () => {
        await CreateTask(dummy)
        setIsTrue(!isTrue)
        data.setPageTwoName3(`${isTrue}`)
    }
    const handleUserIDChange = (e: any) => {
        serUseUserID(e.target.value);
    };


    const dummy: ITask = {
        id: 0,
        projectID: useProjectID,
        taskName: useTaskName,
        taskDescription: useTaskDescription,
        taskDuration: useTaskDuration,
        userID: useUserID,
        dueDate: useDueDate,
        priority: usePriority,
        status: useStatus,
        isDeleted: false
    };


    const OpenDropDown = () => {
        if (open == "hidden") {
            setOpen("block")
        } else {
            setOpen("hidden")
        }
    }

    useEffect(() => {
        let projectID = getLocalStorageProjectId();
        setUseProjectID(projectID)

        console.log(useProjectID)
        console.log(useTaskName)
        console.log(useTaskDescription)
        console.log(useTaskDuration)
        console.log(useUserID)
        console.log(useDueDate)
        console.log(usePriority)
        console.log(useStatus)
        console.log(useIsDeleted)
    }, [useProjectID, useTaskName])
    return (
        <div className='absolute top-1/2 -translate-y-1/2 z-50 justify-center  flex w-full bg-black bg-opacity-80 h-screen  items-center'>
            <div className='flex flex-col w-full md:w-[604px] bg-[#181818]  mx-[10px] border-[#808080] border  rounded-[10px] p-[20px] lg:p-[30px]  h-fit  relative overflow-auto'>

                <div className='w-auto h-[44px] rounded-[10px] mb-[25px] bg-[#282828] border-b border-[#808080]'>
                    <input
                        onChange={(e) => setUseTaskName(e.target.value)}
                        type="text" placeholder='Task name' className='placeholder:text-[#808080] text-[#808080] w-full rounded-[10px] border border-transparent bg-transparent' />
                </div>

                <div className='w-auto h-[44px] rounded-[10px] mb-[25px] bg-[#282828] border-b border-[#808080]'>
                    <input
                        onChange={(e) => setUseTaskDescription(e.target.value)}
                        type="text" placeholder='Description' className='placeholder:text-[#808080] text-[#808080] w-full rounded-[10px] border border-transparent bg-transparent' />
                </div>

                <div className='w-auto h-[44px] rounded-[10px] mb-[25px] bg-[#282828] border-b border-[#808080]'>
                    <input
                        onChange={(e) => setUseTaskDuration(e.target.value)}
                        type="text" placeholder='Est. task duration' className='placeholder:text-[#808080] text-[#808080] w-full rounded-[10px] border border-transparent bg-transparent' />
                </div>



                <select
                    onChange={handleUserIDChange}
                    className='bg-[#282828] text-[#808080] border-[#808080] lg:w-[180px] w-full h-[44px] rounded-[10px] mb-[25px]'
                >
                    <option value={1} className='text-center'>Person 1</option>
                    <option value={2} className='text-center'>Person 2</option>
                    <option value={3} className='text-center'>Person 3</option>
                </select>

                <div className='w-auto h-[44px] rounded-[10px] mb-[25px]'>
                    <input
                        onChange={(e) => setUseDueDate(e.target.value)}
                        type="date" className='text-center placeholder:text-[#808080] text-[#808080] lg:w-[180px]  w-full rounded-[10px] bg-[#282828] border-[#808080]' />
                </div>

                <select
                    onChange={(e) => setUsePriority(e.target.value)}
                    className='bg-[#282828] text-[#808080] border-[#808080] lg:w-[180px]  w-full  h-[44px] rounded-[10px] mb-[25px]'>
                    <option value="Low Urgency" className='text-center'>Low Urgency</option>
                    <option value="Medium Urgency" className='text-center'>Medium Urgency</option>
                    <option value="High Urgency" className='text-center'>High Urgency </option>
                </select>

                <select
                    onChange={(e) => setUseStatus(e.target.value)}
                    className=' bg-[#282828] text-[#808080] border-[#808080] lg:w-[180px]  w-full  h-[44px] rounded-[10px] mb-[25px]'>
                    <option value="Ideas" className='text-center'>Ideas</option>
                    <option value="In progress" className='text-center'>In progress</option>
                    <option value="Done" className='text-center'>Done</option>
                </select>

                <hr className='border-t-1 border-[#808080]' />

                <div className='flex justify-end mt-[25px] '>
                    <button
                        onClick={() => {
                            prop.setCreateTask('hidden')
                        }}
                        className='bg-[#282828] rounded-[10px] me-[25px]'>
                        <p className='text-white text-[20px] px-[20px] py-[10px]'>Cancel</p>
                    </button>
                    <button
                        onClick={() => {
                            handleCreateTask(),
                                prop.setCreateTask('hidden')
                        }}
                        className='bg-[#CB76F2] rounded-[10px]'>
                        <p className='text-white text-[20px] px-[20px] py-[10px]'>Create Task</p>
                    </button>
                </div>


            </div>


        </div>
    )
}

export default CreateTaskComponent
