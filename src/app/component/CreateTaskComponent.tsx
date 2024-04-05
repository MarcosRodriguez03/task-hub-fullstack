'use client'
import React from 'react'

const CreateTaskComponent = () => {
    return (
        <div className='absolute top-1/2 -translate-y-1/2 z-50 justify-center  flex w-full bg-black h-screen  items-center'>
            <div className='  w-[604px] bg-[#181818]  mx-[10px] border-[#808080] border  rounded-[10px] p-[20px] lg:p-[30px]  h-fit  relative overflow-auto'>

                <div className='w-auto h-[44px] rounded-[10px] mb-[25px]'>
                    <input type="text" className='w-full rounded-[10px] bg-[#282828] border-[#808080]' />
                </div>

                <div className='w-auto h-[44px] rounded-[10px] mb-[25px]'>
                    <input type="text" className='w-full rounded-[10px] bg-[#282828] border-[#808080]' />
                </div>
                <div className='w-auto h-[44px] rounded-[10px] mb-[25px]'>
                    <input type="text" className='w-full rounded-[10px] bg-[#282828] border-[#808080]' />
                </div>
                <div className='w-auto h-[44px] rounded-[10px] mb-[25px]'>
                    <input type="text" className='lg:w-[180px]  w-full rounded-[10px] bg-[#282828] border-[#808080]' />
                </div>
                <div className='w-auto h-[44px] rounded-[10px] mb-[25px]'>
                    <input type="text" className='lg:w-[180px]  w-full rounded-[10px] bg-[#282828] border-[#808080]' />
                </div>
                <div className='w-auto h-[44px] rounded-[10px] mb-[25px]'>
                    <input type="text" className='lg:w-[180px]  w-full rounded-[10px] bg-[#282828] border-[#808080]' />
                </div>
                <div className='w-auto h-[44px] rounded-[10px] mb-[25px]'>
                    <input type="text" className='lg:w-[180px] w-full rounded-[10px] bg-[#282828] border-[#808080]' />
                </div>

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
