import { useAppContext } from '@/Context/Context'
import { DeleteProject, DeleteTask } from '@/utils/DataService'
import React, { useEffect, useState } from 'react'

interface Iconfirm {
    isDeleteTask: boolean
    setIsDeleteTask: (input: boolean) => void
    projectId: number
    projectName: string
    isTrue: boolean
}

const ConfirmDeleteComponent = (props: Iconfirm) => {
    const data = useAppContext()

    const [hideConfirm, setHideConfirm] = useState("block")

    const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        await DeleteTask(data.globalTaskId)
        data.setPageTwoName3(!data.pageTwoName3)
        props.setIsDeleteTask(false)


    }

    const handleDeleteProject = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        await DeleteProject(props.projectId);
        data.setPageTwoName2(`${!data.pageTwoName2}`);
        props.setIsDeleteTask(false)
        data.setTurnFalse(!data.turnFalse)
    }




    return (
        <div onClick={(event) => { event.stopPropagation(); }} className={` fixed  inset-0 bg-black bg-opacity-80 flex justify-center h-full w-full items-center z-30 ${hideConfirm} `}>
            <div className='bg-[#181818] h-[225px] max-w-[500px] w-full rounded-xl px-[30px] flex-col flex justify-center mx-[15px] items-center'>
                <h1 className="text-lg lg:text-2xl font-bold text-center text-white"> Are you sure you want to delete <br /> {`${props.isTrue == true ? data.globalTaskName : props.projectName}?`}</h1>

                <div className='flex '>
                    <button
                        onClick={(event) => {
                            event.stopPropagation();
                            props.setIsDeleteTask(false)
                        }}
                        className="mt-[20px] me-10 bg-[#5C5C5C] hover:bg-[#7b7b7b]   text-white font-bold py-2 px-5 rounded">
                        Cancel
                    </button>

                    <button
                        onClick={props.isTrue == true ? handleDelete : handleDeleteProject}
                        className="mt-[20px] bg-[#EC5A52]  hover:bg-[#ff6961] text-white font-bold py-2 px-8 rounded">
                        Yes
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ConfirmDeleteComponent
