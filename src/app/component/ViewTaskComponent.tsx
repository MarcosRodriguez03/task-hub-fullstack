import React from 'react'

interface IViewTask {
    taskName: string,
    taskDescription: string,
    taskDuration: string,
    userId: number,
    dueDate: string,
    priority: string,
    status: string
}

const ViewTaskComponent = (props: IViewTask) => {
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-80 z-50"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className=" bg-[#181818] border-[#808080] border-[1px] mx-[10px] w-full md:w-[604px] h-[418px] p-[30px] rounded-[10px] shadow-md">

                    <p>{props.taskName}</p>
                    <p>{props.taskDescription}</p>
                    <p>{props.taskDescription}</p>
                    <p>{props.userId}</p>
                    <p>{props.priority}</p>
                    <p>{props.status}</p>




                    <div className="mt-[25px] flex justify-end">
                        <button
                            onClick={() => {
                                //   prop.setCreateProject('hidden')
                            }}
                            className="h-[44px] w-[106px] bg-[#282828] rounded-[10px] text-white text-[20px] font-semibold">Close</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewTaskComponent
