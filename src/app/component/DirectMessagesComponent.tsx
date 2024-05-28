'use client'

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import homeLogo from "@/assets/homelogo.png";
import emptyPfp from "@/assets/emptyPfp.png";
import { RemoveDM, getEntireUserProfileById, getLoggedInUserData } from '@/utils/DataService';
import exit from "@/assets/removeIcon.png";

const DirectMessagesComponent = (prop: {id:number, focus:string, chatid:number, render:() => void, stop: () => void}) => {

    const [name, setName] = useState<string>();
    const [image, setImage] = useState<any>();

    useEffect(() => {
        const userProfile = async () => {
            let arr = await getEntireUserProfileById(prop.id);
            setName(arr.username);
            setImage(arr.image);
        }
        userProfile();
    }, [])

    // const removeDirectMessage = async () => {
    //   console.log(prop.id);
    //   await RemoveDM(prop.id);
    //   prop.render();
    // }


  return (
    <div 
              className={`cursor-pointer flex items-center px-[25px] py-[10px] border-b border-r ${prop.focus} border-[#525252] justify-between`}>
                <div
                  
                  className="flex items-center gap-[20px]"
                >
                    <div className='relative h-[50px] w-[50px] rounded-[50px]'>
                       <Image
                       fill
                    alt="pfp"
                    src={image ? image : emptyPfp}
                    className="h-[50px] w-[50px] rounded-[50px]"
                  /> 
                    </div>
                  
                  <p className="text-white">{name && name}</p>
                </div>
                <Image
                onClick={(event) => {
                  // removeDirectMessage();
                  prop.stop();
                  event.stopPropagation();
                }}
                alt="x" src={exit} className="invisible  h-[25px] w-[25px]" />
              </div>
  )
}

export default DirectMessagesComponent
