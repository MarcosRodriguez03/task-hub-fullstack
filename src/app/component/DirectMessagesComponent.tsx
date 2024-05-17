'use client'

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import homeLogo from "@/assets/homelogo.png";
import emptyPfp from "@/assets/emptyPfp.png";
import { getEntireUserProfileById, getLoggedInUserData } from '@/utils/DataService';

const DirectMessagesComponent = (prop: {id:number}) => {

    const [name, setName] = useState<string>();
    const [image, setImage] = useState<any>();

    useEffect(() => {
        const userProfile = async () => {
            let arr = await getEntireUserProfileById(prop.id);
            console.log(arr);
            setName(arr.username);
            setImage(arr.image);
        }
        userProfile();
    }, [])


  return (
    <div 

              className="cursor-pointer flex items-center px-[25px] py-[10px] border-b border-[#525252] justify-between ">
                <div
                  
                  className="flex items-center gap-[20px]"
                >
                  <Image
                    alt="pfp"
                    src={image ? image : emptyPfp}
                    className="h-[50px] w-[50px] rounded-[50px]"
                  />
                  <p className="text-white">{name && name}</p>
                </div>
                {/* <Image alt="x" src={exit} className="hidden  h-[40px] w-[40px]" /> */}
              </div>
  )
}

export default DirectMessagesComponent
