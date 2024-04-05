'use client'
import React from 'react'
import leftArrow from '@/assets/leftArrow.png'
import Image from 'next/image'
import emptyPfp from "@/assets/emptyPfp.png"

const ProfilePageComponent = (prop: {pageProfile: (input: string) => void}) => {


    return (
        <div className='w-full lg:bg-black lg:bg-opacity-80 h-screen  absolute right-0  lg:z-50' >


            <span className='hidden lg:flex items-center bg-[#181818] border-l border-[#808080] w-[604px] absolute right-0 px-[30px] pb-[20px] pt-[30px] '>
                <button onClick={() => {prop.pageProfile('hidden lg:hidden')}} className='me-[15px] w-[50px] h-[50px] bg-[#212020] hover:bg-[#3a3838] active:bg-[#4a4848] rounded-[10px] flex items-center justify-center'>
                    <Image className='h-[32px] w-[32px] ' alt='back arrow' src={leftArrow} />
                </button>
                <p className='text-[28px] text-[#B8B8B8] font-semibold '>Profile</p>
            </span>

            <div className=' w-full lg:w-[604px]  absolute right-0 z-20 top-[80px] bottom-[80px] lg:bottom-0  border-l border-[#808080] bg-[#181818] p-[30px] overflow-auto'>


                <div className='flex justify-center flex-col items-center  mt-[25px]'>
                    <Image className=' w-[150px] h-[150px]' alt="pfp" src={emptyPfp} />
                    <p className=' mt-[25px] text-[28px] font-bold text-white'>Tyler Nguyen</p>
                    <p className='text-[24px] font-bold text-[#B8B8B8]'>TylerAcc233</p>
                    <Image className=' w-[150px] h-[150px]' alt="pfp" src={emptyPfp} />
                    <p className=' mt-[25px] text-[28px] font-bold text-white'>Tyler Nguyen</p>
                    <p className='text-[24px] font-bold text-[#B8B8B8]'>TylerAcc233</p>
                    <Image className=' w-[150px] h-[150px]' alt="pfp" src={emptyPfp} />
                    <p className=' mt-[25px] text-[28px] font-bold text-white'>Tyler Nguyen</p>
                    <p className='text-[24px] font-bold text-[#B8B8B8]'>TylerAcc233</p>
                    <Image className=' w-[150px] h-[150px]' alt="pfp" src={emptyPfp} />
                    <p className=' mt-[25px] text-[28px] font-bold text-white'>Tyler Nguyen</p>
                    <p className='text-[24px] font-bold text-[#B8B8B8]'>TylerAcc233</p>
                    <Image className=' w-[150px] h-[150px]' alt="pfp" src={emptyPfp} />
                    <p className=' mt-[25px] text-[28px] font-bold text-white'>Tyler Nguyen</p>
                    <p className='text-[24px] font-bold text-[#B8B8B8]'>TylerAcc233</p>

                </div>



            </div>
        </div>

    )
}

export default ProfilePageComponent
