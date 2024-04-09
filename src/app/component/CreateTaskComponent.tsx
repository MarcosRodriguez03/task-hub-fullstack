'use client'
import React, { useState } from 'react'
import { Dropdown } from "flowbite-react";
import greenPlus from '@/assets/greenPlus.png'
import highWarning from '@/assets/highWarning.png'
import Image from 'next/image';


const CreateTaskComponent = () => {

    const [open, setOpen] = useState("hidden");

    const OpenDropDown = () => {
        if (open == "hidden") {
            setOpen("block")
        } else {
            setOpen("hidden")
        }
    }
    return (
        <div className='absolute top-1/2 -translate-y-1/2 z-50 justify-center  flex w-full bg-black h-screen  items-center'>
            <div className='flex flex-col  w-[604px] bg-[#181818]  mx-[10px] border-[#808080] border  rounded-[10px] p-[20px] lg:p-[30px]  h-fit  relative overflow-auto'>

                <div className='w-auto h-[44px] rounded-[10px] mb-[25px] bg-[#282828] border-b border-[#808080]'>
                    <input type="text" placeholder='Task name' className='placeholder:text-[#808080] text-[#808080] w-full rounded-[10px] border border-transparent bg-transparent' />
                </div>

                <div className='w-auto h-[44px] rounded-[10px] mb-[25px] bg-[#282828] border-b border-[#808080]'>
                    <input type="text" placeholder='Description' className='placeholder:text-[#808080] text-[#808080] w-full rounded-[10px] border border-transparent bg-transparent' />
                </div>

                <div className='w-auto h-[44px] rounded-[10px] mb-[25px] bg-[#282828] border-b border-[#808080]'>
                    <input type="text" placeholder='Est. task duration' className='placeholder:text-[#808080] text-[#808080] w-full rounded-[10px] border border-transparent bg-transparent' />
                </div>

                <select className='bg-[#282828] text-[#808080] border-[#808080] lg:w-[180px]  w-full  h-[44px] rounded-[10px] mb-[25px]'>
                    <option value="option1" className='text-center'>person 1</option>
                    <option value="option2" className='text-center'>person 2</option>
                    <option value="option3" className='text-center'>person 3 </option>
                </select>


                <div className='w-auto h-[44px] rounded-[10px] mb-[25px]'>
                    <input type="date" className='text-center placeholder:text-[#808080] text-[#808080] lg:w-[180px]  w-full rounded-[10px] bg-[#282828] border-[#808080]' />
                </div>

                <select className='bg-[#282828] text-[#808080] border-[#808080] lg:w-[180px]  w-full  h-[44px] rounded-[10px] mb-[25px]'>
                    <option value="option1" className='text-center'>Low Urgency</option>
                    <option value="option2" className='text-center'>Medium Urgency:</option>
                    <option value="option3" className='text-center'>High Urgency </option>
                </select>

                <select className=' bg-[#282828] text-[#808080] border-[#808080] lg:w-[180px]  w-full  h-[44px] rounded-[10px] mb-[25px]'>
                    <option value="option1" className='text-center'>Ideas</option>
                    <option value="option2" className='text-center'>In progress</option>
                    <option value="option3" className='text-center'>Done</option>
                </select>

                <hr className='border-t-1 border-[#808080]' />

                <div className='flex justify-end mt-[25px] '>
                    <button className='bg-[#282828] rounded-[10px] me-[25px]'>
                        <p className='text-white text-[20px] px-[20px] py-[10px]'>Cancel</p>
                    </button>
                    <button className='bg-[#CB76F2] rounded-[10px]'>
                        <p className='text-white text-[20px] px-[20px] py-[10px]'>Create Task</p>
                    </button>
                </div>


            </div>


        </div>
    )
}

export default CreateTaskComponent
