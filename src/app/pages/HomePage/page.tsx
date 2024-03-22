'use client';
'use client';

import React, { useEffect } from 'react'
import Image from 'next/image';
import messageIcon from '@/assets/messagesIcon.png';
import noNotifications from '@/assets/notFullNotifsIcon.png';
import plusIcon from '@/assets/plusIcon.png';
import ProjectCardComponent from '@/app/components/ProjectCardComponent';

const HomePage = () => {

    useEffect(() => {
        document.body.style.backgroundColor = '#FDFDFD';
    }, [])


    useEffect(() => {
        document.body.style.backgroundColor = '#FDFDFD';
    }, [])

    return (
        <div>
            <div className='h-[100px] bg-black px-[25px] opacity-85'>
                <div className='flex justify-between h-full'>
                    <div className='text-white my-auto text-[24px] ps-[75px]'>
                        Task Hub
                    </div>
                    <div className='flex'>
                        <div className='my-auto'>
                            <Image className='cursor-pointer' height={50} width={50} src={messageIcon} alt='messaging icon' />
                        </div>
                        <div className='my-auto'>
                            <Image height={50} width={50} className='mx-[75px] cursor-pointer' src={noNotifications} alt='not full notifications icon' />
                        </div>
                        <div className='my-auto rounded-[75px] bg-white h-[75px] w-[75px] cursor-pointer'></div>
                    </div>

                </div>

                <div className='grid justify-end'>
                    <div className='bg-[#D9D9D9] w-[400px] h-[77px] rounded-[15px]'>
                        <div className='flex justify-between'>
                            <p>Hello</p>
                            <p>hey</p>
                        </div>
                    </div>
                    <div>Hello</div>
                    <div>Hello</div>
                    <div>Hello</div>
                    <div>Hello</div>
                    <div>Hello</div>
                    <div className='ms-18'>Hello</div>
                </div>

            </div>

            <div className='grid grid-cols-5 px-[75px] mt-[100px]'>
                <div className='grid justify-center'>
                    <div className='h-[365px] w-[304px] bg-[#3B3B3B] rounded-[15px] border-[#717171] border-[3px] cursor-pointer text-center'>
                        <div className='grid justify-center mt-[115px] mb-[75px]'>
                            <Image height={75} width={75} src={plusIcon} alt='plus icon' />
                        </div>
                        <div className='text-white text-[24px]'>Create Project</div>
                    </div>
                </div>
                <ProjectCardComponent percentText='50%' percent='50' projectName='Old Project' />
            </div>




        </div>
    )
}

export default HomePage
