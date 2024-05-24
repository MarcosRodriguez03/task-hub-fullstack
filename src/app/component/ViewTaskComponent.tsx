import { IUserData } from '@/interface/interface'
import { GetTaskByID, getEntireUserProfile, getEntireUserProfileById } from '@/utils/DataService'
import React, { useEffect, useState } from 'react'

interface IViewTask {
    taskID: number,
    viewFunction: (input: string) => void
    ID: number

}

const ViewTaskComponent = (props: IViewTask) => {
    const [taskObject, setTaskObject] = useState<any>()
    const [username, SetUsername] = useState<any>("")

    useEffect(() => {

        const loadAll = async () => {
            try {
                const taskInfo: any = await GetTaskByID(props.taskID && props.taskID);
                if (props.ID > 0) {
                    const username: any = await getEntireUserProfileById(props.ID && props.ID)
                    SetUsername(username)
                }

                setTaskObject(taskInfo);
            } catch (error) {
            }

        }
        loadAll()
    })
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-80 z-50"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className=" bg-[#181818] border-[#808080] border-[1px] mx-[10px] w-full md:w-[604px] h-auto p-[30px] rounded-[10px] shadow-md">
                    <div>


                        <p className='text-white text-[20px]'>Task Name</p>
                        <p className='text-[#808080]'>{taskObject && taskObject.taskName}</p>
                        <p className='text-white text-[20px]'>Task Description</p>
                        <p className='text-[#808080]'>{taskObject && taskObject.taskDescription}</p>
                        <p className='text-white text-[20px]'>Task Duration</p>
                        <p className='text-[#808080]'>{taskObject && taskObject.taskDuration}</p>
                        <p className='text-white text-[20px]'>Task UserID</p>
                        <p className='text-[#808080]'>{taskObject && taskObject.userID}</p>
                        <p className='text-white text-[20px]'>Task Priority</p>
                        <p className='text-[#808080]'>{taskObject && taskObject.priority}</p>
                        <p className='text-white text-[20px]'>Task Due Date</p>
                        <p className='text-[#808080]'>{taskObject && taskObject.dueDate}</p>
                        <p className='text-white text-[20px]'>Task Status</p>
                        <p className='text-[#808080]'>{taskObject && taskObject.status}</p>
                        <p className='text-white text-[20px]'>Assigned User</p>
                        <p className='text-[#808080]'>{username && username.username}</p>
                    </div>




                    <hr className='bg-[#525252] h-[1px] border-0 my-[25px]' />
                    <div className=" flex justify-end ">
                        <button
                            onClick={() => {
                                props.viewFunction("hidden")
                            }}
                            className="h-[44px] w-[106px] bg-[#5C5C5C] hover:bg-[#7b7b7b] rounded-[10px] text-white text-[20px] font-semibold">Close</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewTaskComponent
