
import React, { useEffect, useId, useRef, useState } from 'react'
import { Dropdown } from "flowbite-react";
import greenPlus from '@/assets/greenPlus.png'
import highWarning from '@/assets/highWarning.png'
import Image from 'next/image';
import { CreateTask, EditTask, GetTaskByID, GetUsersByProjectId, getEntireUserProfileById } from '@/utils/DataService';
import { ITask } from '@/interface/interface';
import { getLocalStorage, getLocalStorageProjectId, getLocalStorageTaskId, getLocalStorageUserID } from '@/utils/localStorage';
import { useAppContext } from '@/Context/Context';


const CreateTaskComponent = (prop: { taskId: number, boolDetermine: boolean, setCreateTask: (input: string) => void; }) => {
    const data = useAppContext()
    const [useProjectID, setUseProjectID] = useState<number>(0);
    const [useTaskId, setTaskId] = useState<number>(0);

    const [useTaskName, setUseTaskName] = useState<string>("");
    const [useTaskDescription, setUseTaskDescription] = useState<string>("");
    const [useTaskDuration, setUseTaskDuration] = useState<string>("")
    const [useUserID, serUseUserID] = useState<number>(0)
    const [useDueDate, setUseDueDate] = useState<string>("")
    const [usePriority, setUsePriority] = useState<string>("Low Urgency");
    const [useStatus, setUseStatus] = useState<string>("Ideas");
    const [useIsDeleted, setUseIsDeleted] = useState<boolean>(false)
    const [isTrue, setIsTrue] = useState<boolean>(true);
    const [relationTable, setRelationTable] = useState<any>();
    const [userOptions, setUserOptions] = useState<any>([]);
    const [userID, setUserID] = useState<number>(0);
    const [taskObj, setTaskObj] = useState<any>()
    const [btnDisable, setBtnDisable] = useState<boolean>(true);




    const [open, setOpen] = useState("hidden");
    const id = useId()

    useEffect(() => {
        if (useTaskName === '') {
            setBtnDisable(true);
        } else {
            setBtnDisable(false);
        }
    }, [useTaskName])


    const handleCreateTask = async () => {
        if (prop.boolDetermine == true) {

            if (data.statusNum == 1) {
                dummy.status = "Ideas"
                console.log("12345432")

            } else if (data.statusNum == 2) {
                dummy.status = "In progress"
                console.log("12345432")

            } else if (data.statusNum == 3) {

                dummy.status = "Done"
                console.log("12345432")

            } else {

            }

            console.log(dummy)
            await CreateTask(dummy)
            data.setPageTwoName3(!data.pageTwoName3)

            setUseTaskName("");
            setUseTaskDescription("");
            setUseDueDate("");
            setUseTaskDuration("");

        } else {
            await EditTask(dummy)
            data.setPageTwoName3(!data.pageTwoName3)
        }
    }

    const handleUserIDChange = (e: any) => {

        serUseUserID(e.target.value);


    };




    const dummy: ITask = {
        id: prop.boolDetermine == true ? 0 : useTaskId,
        projectID: useProjectID,
        taskName: useTaskName == "" ? taskObj && taskObj.taskName : useTaskName,
        taskDescription: useTaskDescription == "" ? taskObj && taskObj.taskDescription : useTaskDescription,
        taskDuration: useTaskDuration == "" ? taskObj && taskObj.taskDuration : useTaskDuration,
        userID: useUserID == 0 ? taskObj && taskObj.userID : useUserID,
        dueDate: useDueDate == "" ? taskObj && taskObj.dueDate : useDueDate,
        priority: usePriority == "" ? taskObj && taskObj.priority : usePriority,
        status: useStatus == "" ? taskObj && taskObj.status : useStatus,
        isDeleted: false
    };
    // const dummy: ITask = {
    //     id: prop.boolDetermine == true ? 0 : useTaskId,
    //     projectID: useProjectID,
    //     taskName: useTaskName == "" ? taskObj && taskObj.taskName : useTaskName,
    //     taskDescription: useTaskDescription == "" ? taskObj && taskObj.taskDescription : useTaskDescription,
    //     taskDuration: useTaskDuration == "" ? taskObj && taskObj.taskDuration : useTaskDuration,
    //     userID: useUserID == 0 ? taskObj && taskObj.userID : useUserID,
    //     dueDate: useDueDate == "" ? taskObj && taskObj.dueDate : useDueDate,
    //     priority: usePriority == "" ? taskObj && taskObj.priority : usePriority,
    //     status: data.useStatus,
    //     isDeleted: false
    // };








    const OpenDropDown = () => {
        if (open == "hidden") {
            setOpen("block")
        } else {
            setOpen("hidden")
        }
    }

    useEffect(() => {
        const loadAll = async () => {
            console.log(data.isClearDefault)

            let numb: number = getLocalStorageUserID()
            setUserID(numb)
            console.log(useTaskName)

            let num: string = getLocalStorageTaskId()
            console.log(prop.taskId)
            setTaskId(prop.taskId)

            let projectID = getLocalStorageProjectId();
            setUseProjectID(projectID)
            try {
                const taskInfo: any = await GetTaskByID(prop.taskId && prop.taskId);
                setTaskObj(taskInfo)
                console.log(taskInfo)
                setUsePriority(taskInfo && taskInfo.priority)
            } catch (error) {

            }



            let relations = await GetUsersByProjectId(projectID);

            const options = await Promise.all(relations.map(async (ele: any) => {
                const user = await getEntireUserProfileById(ele.userID);
                return <option key={ele.userID} value={ele && ele.userID} className='text-center'>{user.username}</option>;
            }));
            setUserOptions(options);

        }
        loadAll()





    }, [useProjectID, useTaskName, data.boolUser, data.isOpenTask])
    return (
        <div className='  absolute top-1/2 -translate-y-1/2 z-[100] justify-center  flex w-full bg-black bg-opacity-80 h-screen  items-center'>

            <div className='  flex flex-col w-full md:w-[604px] bg-[#181818]  mx-[10px] border-[#808080] border  rounded-[10px] p-[20px] lg:p-[30px]  h-[600px] md:h-fit  relative overflow-auto'>
                <p className=' ml-2 pb-2 text-[16px] text-[#808080]'>Task Name</p>
                <div className='w-auto h-[40px] rounded-[10px] mb-[25px] bg-[#282828] border-b border-[#808080]'>
                    <input

                        maxLength={20}
                        defaultValue={taskObj && taskObj.taskName}



                        onChange={(e) => { setUseTaskName(e.target.value); }}
                        type="text" className='h-[40px] placeholder:text-white text-white w-full rounded-[10px] border border-transparent bg-transparent' />
                </div>



                <p className=' ml-2 pb-2 text-[16px] text-[#808080]'>Description</p>
                <div className='w-auto h-[40px] rounded-[10px] mb-[25px] bg-[#282828] border-b border-[#808080]'>
                    <input
                        maxLength={200}
                        defaultValue={taskObj && taskObj.taskDescription}
                        onChange={(e) => setUseTaskDescription(e.target.value)}
                        type="text" placeholder='' className='h-[40px] placeholder:text-white text-white w-full rounded-[10px] border border-transparent bg-transparent' />
                </div>

                <p className=' ml-2 pb-2 text-[16px] text-[#808080] '>Est. Time Duratation</p>
                <div className='w-auto h-[40px] rounded-[10px] mb-[25px] bg-[#282828] border-b border-[#808080]'>
                    <input
                        maxLength={20}
                        defaultValue={taskObj && taskObj.taskDuration}
                        onChange={(e) => setUseTaskDuration(e.target.value)}
                        type="text" placeholder="" className='h-[40px] placeholder:text-white text-white w-full rounded-[10px] border border-transparent bg-transparent' />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='  md:w-fit'>
                        <p className=' ml-2 pb-2 text-[16px] text-[#808080]'>Assign User</p>
                        <select
                            onChange={handleUserIDChange}
                            className='bg-[#282828] text-white border-[#808080] lg:w-[180px] w-full rounded-[10px] mb-[25px]'
                        >
                            <option key="default" value={0} >Select an option</option>;
                            {userOptions}
                        </select>
                    </div>

                    <div className='  md:w-fit md:ml-auto'>
                        <p className=' ml-2 pb-2 text-[16px] text-[#808080]'>Due date</p>
                        <div className='w-auto rounded-[10px] mb-[25px] relative z-[1]'>
                            <input
                                onChange={(e) => setUseDueDate(e.target.value)}
                                defaultValue={taskObj && taskObj.dueDate}
                                type="date" className='text-center  placeholder:text-[#808080] text-white lg:w-[180px]  w-full rounded-[10px] bg-[#282828] border-[#808080]' />
                        </div>
                    </div>



                    <div className='  md:w-fit '>
                        <p className=' ml-2 pb-2 text-[16px] text-[#808080]'>Priority</p>
                        <select
                            defaultValue={taskObj && taskObj.priority}
                            onChange={(e) => setUsePriority(e.target.value)}
                            className=' bg-[#282828] text-white border-[#808080] lg:w-[180px]  w-full   rounded-[10px] mb-[25px]'>
                            <option value="Low Urgency" className='text-center'>Low Urgency</option>
                            <option value="Medium Urgency" className='text-center'>Medium Urgency</option>
                            <option value="High Urgency" className='text-center'>High Urgency </option>
                        </select>
                    </div>

                    <div className='  md:w-fit md:ml-auto'>
                        <p className=' ml-2 pb-2 text-[16px] text-[#808080]'>Status</p>

                        <select
                            defaultValue={taskObj && taskObj.status}
                            onChange={(e) => setUseStatus(e.target.value)}
                            className=' bg-[#282828] text-white border-[#808080] lg:w-[180px] text-[16px]  w-full   rounded-[10px] mb-[25px]'>
                            <option value="Ideas" className='text-center'>Ideas</option>
                            <option value="In progress" className='text-center'>In progress</option>
                            <option value="Done" className='text-center'>Done</option>
                        </select>
                    </div>

                </div>





                <hr className='border-t-1 border-[#808080]' />

                <div className='flex justify-end mt-[25px] '>
                    <button
                        onClick={() => {
                            prop.setCreateTask('hidden')
                        }}
                        className='bg-[#5C5C5C] hover:bg-[#7b7b7b] rounded-[10px] me-[25px] font-semibold'>
                        <p className='text-white text-[16px] px-[20px] py-[10px]'>Cancel</p>
                    </button>
                    <button
                        onClick={() => {
                            if (taskObj && taskObj.taskName != "" || useTaskName != "") {
                                handleCreateTask()
                                prop.setCreateTask('hidden')
                                // setIsTrue(!isTrue)  
                            }


                        }}
                        className={btnDisable ? 'bg-[#6a3e7e] text-[#838383] cursor-default rounded-[10px] font-semibold' : 'bg-[#CB76F2] text-white hover:bg-[#d186f3] rounded-[10px] font-semibold'}>
                        <p className=' text-[16px] px-[18px] py-[10px]'>{prop.boolDetermine == true ? "Create Task" : "Save"}</p>
                    </button>
                </div>


            </div>


        </div>
    )
}

export default CreateTaskComponent
