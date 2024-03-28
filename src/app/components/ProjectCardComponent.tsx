'use client';

import React from 'react'
import Image from 'next/image';
import removeIcon from '@/assets/removeIcon.png';
import { Progress } from 'flowbite-react';

const ProjectCardComponent = (prop : {percentText:string, percent:string, projectName:string}) => {
  return (
    <div className='grid justify-center'>
        <div className='h-[365px] w-[304px] bg-[#3B3B3B] rounded-[15px] border-[#717171] border-[3px] cursor-pointer text-center'>
            <div className='grid justify-end me-[25px] mt-[25px] mb-[13px]'>
                <Image src={removeIcon} height={30} width={30} alt='remove icon'/>
            </div>
            <p className='text-[64px] text-white'>{prop.percentText}</p>
            <div className='mx-[35px] mt-[40px] mb-[40px]'>
                <div className="w-full bg-[#D9D9D9] rounded-full h-5 dark:bg-gray-700">
                    <div className="bg-[#CB76F2] h-5 rounded-full" style={{width: `${prop.percent}%`}}></div>
                </div>
            </div>
            <div className='text-white text-[24px]'>{prop.projectName}</div>
        </div>
    </div>
  )
}

export default ProjectCardComponent
