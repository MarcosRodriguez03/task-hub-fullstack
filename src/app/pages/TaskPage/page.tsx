'use client'
import React from 'react'
import Image from "next/image";
import purplePlus from '@/assets/puplePlus.png'
import greenPlus from '@/assets/greenPlus.png'
import redPlus from '@/assets/redPlus.png'

import taskExit from '@/assets/taskExit.png'
import highWarning from '@/assets/highWarning.png'
import emptyPfp from '@/assets/emptyPfp.png'
import addPeople from '@/assets/addPeople.png'
import plusSign from '@/assets/plusSign.png'
import TaskSqaureComponent from '@/app/component/TaskSqaureComponent';
import { Button } from 'flowbite-react';




const TaskPage = () => {

    return (
        <div>
            <div className='w-full h-[80px] lg:h-[70px] bg-white'>header</div>


            <div className="flex flex-col lg:flex-row bg-[#080808] absolute top-[80px] lg:top-[70px] bottom-[80px] lg:bottom-0 w-full">
                <div className="border-y lg:border-r border-[#525252] lg:w-[100px] items-center w-full lg:h-full h-[54px] bg-[#181818] flex lg:flex-col overflow-x-scroll  lg:overflow-auto ">

                    <>
                        <Image className='ml-[20px] lg:ml-0 lg:mt-[20px] w-[34px] h-[34px]' alt='add' src={addPeople} />
                    </>

                    <>
                        <Image className='  ml-[20px] lg:ml-0  lg:mt-[25px] w-[34px] h-[34px]' alt='pfp' src={greenPlus} />
                        <p className='text-[20px] text-center text-white hidden lg:block'>Tyler</p>
                    </>




                </div>
                <div className="flex flex-col flex-grow w-full relative  top-0 bottom-[80px] lg:bottom-0">
                    {/* desktop buttons */}
                    <div className='hidden lg:block'>
                        <div className='grid grid-cols-3 px-[30px] gap-[30px] pt-[30px]'>
                            <div className=' w-full h-[59px] bg-[#CB76F2] rounded-[10px] flex items-center justify-between p-[25px]'>
                                <p className='text-[24px] text-white'>Ideas</p>
                                <Image alt="add" className='w-[30px] h-[30px]' src={purplePlus} />
                            </div>

                            <div className=' w-full h-[59px] bg-[#04BAAD] rounded-[10px] flex items-center justify-between p-[25px]'>
                                <p className='text-[24px] text-white'>In Progress</p>
                                <Image alt="add" className='w-[30px] h-[30px]' src={greenPlus} />
                            </div>

                            <div className=' w-full h-[59px] bg-[#EC5A52] rounded-[10px] flex items-center justify-between p-[25px]'>
                                <p className='text-[24px] text-white'>Done</p>
                                <Image alt="add" className='w-[30px] h-[30px]' src={redPlus} />
                            </div>
                        </div>
                    </div>


                    {/* desktop task */}
                    <div className='hidden lg:block'>
                        <div className='  grid grid-cols-3 px-[30px] gap-[30px] absolute top-[109px]  bottom-[80px] w-full'>

                            <div className=' w-full overflow-auto '>
                                <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />


                                <p className='text-white'>left input</p>
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
                            <div className='bg-[#CB76F2] h-[50px] flex items-center rounded-[10px] justify-center'>
                                <p className='text-[16px] text-white font-semibold' >Ideas</p>
                            </div>
                            <div className='bg-[#04BAAD] h-[50px] flex items-center rounded-[10px] justify-center'>
                                <p className='text-[16px] text-white font-semibold' >In Progress</p>
                            </div>
                            <div className='bg-[#EC5A52] h-[50px] flex items-center rounded-[10px] justify-center'>
                                <p className='text-[16px] text-white font-semibold' >Done</p>
                            </div>

                            <div className=' mt-[20px] col-span-3 h-[50px] bg-[#181818] border border-[#525252] rounded-[10px] flex items-center justify-between'>
                                <p className='ml-[25px] text-[20px] text-white'>Create Task</p>
                                <Image className='mr-[25px] w-[30px] h-[30px]' alt='add' src={plusSign} />
                            </div>
                        </div>
                    </div>


                    <div className='lg:hidden  overflow-y-auto absolute top-[162px] left-0 right-0 bottom-0 px-[20px] lg:bottom-[80px]   '>
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
                        <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
                        <TaskSqaureComponent pfp={greenPlus} taskName='name' priority={highWarning} />
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
            {/* <div className='bg-white w-full h-[80px] absolute bottom-0'>footer</div> */}

        </div>





        // <div className=" h-screen flex flex-col  ">
        //     {/* Navbar */}
        //     <div className=" bg-gray-800 text-white flex flex-col items-center justify-center">
        //         <p className='h-[70px]'>height</p>
        //     </div>

        //     <div className='grid grid-cols-12  lg:flex-1 lg:flex-row lg:h-[80%]'>

        //         <div className=' col-span-12  h-[54px] lg:h-full lg:col-span-1 lg:bg-[#181818]   border-y lg:border-r border-[#525252]  overflow-x-scroll lg:overflow-y-scroll  flex lg:flex-col items-center '>
        //             <>
        //                 <Image className='ml-[20px] lg:ml-0 lg:mt-[20px] w-[34px] h-[34px]' alt='add' src={addPeople} />
        //             </>

        //             <>
        //                 <Image className='  ml-[20px] lg:ml-0  lg:mt-[25px] w-[34px] h-[34px]' alt='pfp' src={greenPlus} />
        //                 <p className='text-[20px] text-center text-white hidden lg:block'>Tyler</p>
        //             </>

        //         </div>

        //         <div className=' col-span-12 lg:col-span-11 relative'>

        //             <div className='hidden lg:grid grid-cols-3 gap-x-[30px] pt-[30px] px-[30px]   mb-[20px] '>
        //                 <div className='grid grid-cols-1  '>

        //                     <div className=' w-full h-[59px] bg-[#CB76F2] rounded-[10px] flex items-center justify-between p-[25px]'>
        //                         <p className='text-[24px] text-white'>Ideas</p>
        //                         <Image alt="add" className='w-[30px] h-[30px]' src={purplePlus} />
        //                     </div>
        //                 </div>

        //                 <div className='grid grid-cols-1'>
        //                     <div className='w-full h-[59px] bg-[#04BAAD] rounded-[10px] flex items-center justify-between p-[25px]'>
        //                         <p className='text-[24px] text-white'>In Progress</p>
        //                         <Image alt="add" className='w-[30px] h-[30px]' src={greenPlus} />
        //                     </div>
        //                 </div>

        //                 <div className='grid grid-cols-1'>
        //                     <div className='w-full h-[59px] bg-[#EC5A52] rounded-[10px] flex items-center justify-between p-[25px]'>
        //                         <p className='text-[24px] text-white'>Done</p>
        //                         <Image alt="add" className='w-[30px] h-[30px]' src={redPlus} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className='lg:hidden grid grid-cols-3 px-[20px] pt-[20px] gap-x-[20px]'>

        //                 <div className='bg-[#CB76F2] h-[50px] flex items-center rounded-[10px] justify-center'>
        //                     <p className='text-[16px] text-white font-semibold' >Ideas</p>
        //                 </div>
        //                 <div className='bg-[#04BAAD] h-[50px] flex items-center rounded-[10px] justify-center'>
        //                     <p className='text-[16px] text-white font-semibold' >In Progress</p>
        //                 </div>
        //                 <div className='bg-[#EC5A52] h-[50px] flex items-center rounded-[10px] justify-center'>
        //                     <p className='text-[16px] text-white font-semibold' >Done</p>
        //                 </div>

        //                 <div className=' mt-[20px] col-span-3 h-[50px] bg-[#181818] border border-[#525252] rounded-[10px] flex items-center justify-between'>
        //                     <p className='ml-[25px] text-[20px] text-white'>Create Task</p>
        //                     <Image className='mr-[25px] w-[30px] h-[30px]' alt='add' src={plusSign} />
        //                 </div>


        //             </div>




        //             <div className='lg:grid grid-cols-3 gap-x-[30px] px-[30px] hidden  '>

        //                 <div className='grid col-span-1'>
        //                     <div className=' overflow-scroll  flex-grow  h-[80vh]' >



        //                         <TaskSqaureComponent taskName='new task' pfp={greenPlus} priority={highWarning} />
        //                         <TaskSqaureComponent taskName='new task' pfp={greenPlus} priority={highWarning} />
        //                         <TaskSqaureComponent taskName='new task' pfp={greenPlus} priority={highWarning} />
        //                         <TaskSqaureComponent taskName='new task' pfp={greenPlus} priority={highWarning} />
        //                         <TaskSqaureComponent taskName='new task' pfp={greenPlus} priority={highWarning} />
        //                         <TaskSqaureComponent taskName='new task' pfp={greenPlus} priority={highWarning} />
        //                         <TaskSqaureComponent taskName='new task' pfp={greenPlus} priority={highWarning} />
        //                         <TaskSqaureComponent taskName='new task' pfp={greenPlus} priority={highWarning} />
        //                         <TaskSqaureComponent taskName='new task' pfp={greenPlus} priority={highWarning} />
        //                         <TaskSqaureComponent taskName='new task' pfp={greenPlus} priority={highWarning} />
        //                         <TaskSqaureComponent taskName='new task' pfp={greenPlus} priority={highWarning} />

        //                     </div>
        //                 </div>

        //                 <div className='grid col-span-1'>
        //                     <div className=' overflow-scroll  flex-grow  h-[80vh]' >

        //                         <TaskSqaureComponent taskName='new task' pfp={greenPlus} priority={highWarning} />
        //                     </div>
        //                 </div>

        //                 <div className='grid col-span-1'>
        //                     <div className=' overflow-scroll  flex-grow  h-[80vh]' >
        //                         <TaskSqaureComponent taskName='new task' pfp={greenPlus} priority={highWarning} />

        //                     </div>
        //                 </div>

        //             </div>




        //             <div className='lg:block hidden flex justify-center absolute bottom-0 w-full py-[30px] bg-black '>
        //                 <div className="w-[95%]  h-6  bg-gray-200 rounded-full dark:bg-gray-700 ">
        //                     <div className="h-6 bg-[#CB76F2] rounded-full dark:bg-blue-500" style={{ width: "45%" }}></div>
        //                 </div>
        //             </div>

        //             <main className="lg:hidden block mt-[20px] h-[45vh] overflow-auto px-[20px]">
        //                 <TaskSqaureComponent pfp={greenPlus} priority={highWarning} taskName='dfg' />
        //                 <TaskSqaureComponent pfp={greenPlus} priority={highWarning} taskName='dfg' />
        //                 <TaskSqaureComponent pfp={greenPlus} priority={highWarning} taskName='dfg' />
        //                 <TaskSqaureComponent pfp={greenPlus} priority={highWarning} taskName='dfg' />
        //                 <TaskSqaureComponent pfp={greenPlus} priority={highWarning} taskName='dfg' />
        //                 <TaskSqaureComponent pfp={greenPlus} priority={highWarning} taskName='dfg' />
        //                 <TaskSqaureComponent pfp={greenPlus} priority={highWarning} taskName='dfg' />
        //                 <TaskSqaureComponent pfp={greenPlus} priority={highWarning} taskName='dfg' />
        //             </main>

        //         </div>

        //     </div>




        // </div >

    )
}

export default TaskPage

