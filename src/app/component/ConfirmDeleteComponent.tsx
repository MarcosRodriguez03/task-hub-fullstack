import { useAppContext } from '@/Context/Context'
import { DeleteTask } from '@/utils/DataService'
import React, { useEffect, useState } from 'react'

interface Iconfirm {
    isDeleteTask: boolean
    setIsDeleteTask: (input: boolean) => void
}

const ConfirmDeleteComponent = (props: Iconfirm) => {
    const data = useAppContext()

    const [hideConfirm, setHideConfirm] = useState("block")

    const handleDelete = async (event: any) => {
        event.stopPropagation();
        await DeleteTask(data.globalTaskId)
        data.setPageTwoName3(!data.pageTwoName3)
        props.setIsDeleteTask(false)
    }




    return (
        <div className={` fixed bg-black bg-opacity-80 flex justify-center h-full w-full items-center z-30 ${hideConfirm} `}>
            <div className='   bg-[#181818] h-[225px] max-w-[500px] w-full rounded-xl px-[30px] flex-col flex justify-center mx-[15px] items-center'>
                <h1 className="text-lg lg:text-2xl font-bold text-center text-white"> {`Are you sure you want to delete ${data.globalTaskName}.`}</h1>

                <div className='flex '>
                    <button
                        onClick={() => { props.setIsDeleteTask(false) }}
                        className="mt-[20px] me-10 bg-[#5C5C5C] hover:bg-[#7b7b7b]   text-white font-bold py-2 px-5 rounded">
                        Cancel
                    </button>

                    <button
                        onClick={handleDelete}
                        className="mt-[20px] bg-[#EC5A52]  hover:bg-[#ff6961] text-white font-bold py-2 px-8 rounded">
                        Yes
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ConfirmDeleteComponent
