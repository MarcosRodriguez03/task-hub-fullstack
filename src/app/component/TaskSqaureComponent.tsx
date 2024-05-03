'use client'
import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from "next/image";
import purplePlus from '@/assets/puplePlus.png'
import greenPlus from '@/assets/greenPlus.png'
import redPlus from '@/assets/redPlus.png'
import taskExit from '@/assets/taskExit.png'

import emptyPfp from '@/assets/emptyPfp.png'
import addPeople from '@/assets/addPeople.png'
import lowWarning from '@/assets/lowWarning.png'
import mediumWarning from '@/assets/mediumWarning.png'
import highWarning from '@/assets/highWarning.png'
import CreateTaskComponent from './CreateTaskComponent';
import { saveLocalStorageTaskId } from '@/utils/localStorage';
import { getEntireUserProfile, getEntireUserProfileById } from '@/utils/DataService';

function checkPriority(input: string) {


    if (input == "Low Urgency") {
        return lowWarning
    } else if (input == "Medium Urgency") {
        return mediumWarning
    } else if (input == "High Urgency") {
        return highWarning
    } else {
        return ""
    }

}

type iTaskSqaure = {
    taskName: string
    priority: string
    ID: number
    taskId: number


}

const TaskSqaureComponent = (props: iTaskSqaure) => {
    const [createTask, setCreateTask] = useState<string>('hidden');

    const [userPfp, setUserPfp] = useState<any>("");




    useEffect(() => {
        const loadAll = async () => {


            // setUserPfp(await getEntireUserProfileById(props.ID))
        }
        loadAll()
    })

    return (
        <div onClick={() => {

        }}
            className=' inset-0'>
            <div className={`${createTask} fixed inset-0`}>
                <CreateTaskComponent taskId={props.taskId} boolDetermine={false} setCreateTask={setCreateTask} />
            </div>


            <div className='h-[127px] w-full bg-[#181818] border border-solid border-[#525252] rounded-[10px] px-[25px] mb-[20px]'>
                <div className='flex justify-between py-[21px]'>
                    <div className='flex items-center '>
                        <Image alt="icon" src={checkPriority(props.priority)} className='h-[30px] w-[30px] me-[10px]' />
                        <p className='text-white text-[24px]'>{props.taskName}</p>
                    </div>
                    <Image alt='close' src={taskExit} className='h-[30px] w-[30px]' />
                </div>
                <hr className='bg-[#525252] h-[1px] border-0' />
                <div className='flex items-center justify-between my-[7px]'>
                    {

                        // userPfp.image && userPfp.image != null ? <Image fill className=' w-[34px] h-[34px] rounded-[50px]' alt='pfp' src={userPfp.image && userPfp.image} /> : <Image src={emptyPfp} alt='default pfp' />

                    }

                    <p
                        onClick={() => {
                            setCreateTask('block')
                        }}
                        className='font-bold text-[20px] rounded-[5px] py-[2px] px-[10px] text-[#7A7A7A] bg-[#353535]'>Edit</p>
                </div>
            </div>
        </div >

    )
}

export default TaskSqaureComponent
