"use client";
import React, { useState } from "react";
import leftArrow from "@/assets/leftArrow.png";
import Image from "next/image";
import emptyPfp from "@/assets/emptyPfp.png";
import EditProfileComponent from "../component/EditProfileComponent";
import { useRouter } from "next/navigation";

const ProfilePageComponent = (prop: {
  pageProfile: (input: string) => void;
}) => {

    const [editProfile, setEditProfile] = useState<string>('hidden');

    let router = useRouter();

    const LogOut = () => {
        router.push('/');
    }

    const handleEditProfile = () => {
        if(editProfile === 'hidden'){
            setEditProfile('block');
        }else{
            setEditProfile('hidden');
        }
    }

  return (
    <div>
      <div className={editProfile}>
        <EditProfileComponent setEditProfile={setEditProfile}/>
      </div>
      <div className="w-full lg:bg-black lg:bg-opacity-80 h-screen absolute right-0 lg:z-40">
        <span className="hidden lg:flex items-center bg-[#181818] border-l border-[#808080] w-[604px] absolute right-0 px-[30px] pb-[20px] pt-[30px] ">
          <button
            onClick={() => {
              prop.pageProfile("hidden lg:hidden");
            }}
            className="me-[15px] w-[50px] h-[50px] bg-[#212020] hover:bg-[#3a3838] active:bg-[#4a4848] rounded-[10px] flex items-center justify-center"
          >
            <Image
              className="h-[32px] w-[32px] "
              alt="back arrow"
              src={leftArrow}
            />
          </button>
          <p className="text-[28px] text-[#B8B8B8] font-semibold ">Profile</p>
        </span>

        <div className=" w-full lg:w-[604px]  absolute right-0 z-20 top-[80px] bottom-[80px] lg:bottom-0  lg:border-l lg:border-[#808080] bg-[#080808] lg:bg-[#181818] p-[20px] lg:p-[30px] overflow-auto">
          <div className="flex justify-center flex-col items-center mt-[25px]">
            <Image className=" w-[150px] h-[150px]" alt="pfp" src={emptyPfp} />
            <p className=" mt-[25px] text-[28px] font-bold text-white">
              Tyler Nguyen
            </p>
            <p className="text-[24px] font-bold text-[#B8B8B8] mt-1">
              TylerAcc233
            </p>
            <div className="bg-[#282828] w-full mx-[20px] lg:mx-[30px] h-[257px] lg:h-[283px] rounded-[10px] my-6 overflow-y-auto p-[20px]">
              <p className="text-[#B8B8B8] text-[24px] font-semibold">
                Contact
              </p>
              <p className="text-white text-[20px] font-medium">
                free.99@gmail.com
              </p>
              <p className="text-[#B8B8B8] text-[24px] font-semibold mt-6">
                Bio
              </p>
              <p className="text-white text-[20px] font-medium">descriptions</p>
            </div>
            <div className="flex justify-center mb-6">
              <button 
              onClick={handleEditProfile}
              className="bg-[#5C5C5C] text-[24px] text-white font-semibold h-[49px] w-[193px] rounded-[10px]">
                Edit
              </button>
              <button 
              onClick={LogOut}
              className="ms-[25px] bg-[#ED473D] text-[24px] text-white font-semibold h-[49px] w-[193px] rounded-[10px]">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageComponent;
