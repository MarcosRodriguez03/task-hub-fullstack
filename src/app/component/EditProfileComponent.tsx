"use client";

import Image from "next/image";
import React from "react";
import loginBg from "@/assets/loginBg.jpg"

const EditProfileComponent = () => {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className=" bg-[#181818] border-[#808080] border-[1px] mx-[10px] w-full lg:w-[941px] max-h-[800px] h-full p-[30px] rounded-[10px] shadow-md overflow-auto">
          <p className="hidden lg:block font-semibold text-[30px] text-white leading-[48px] mb-[20px]">
            Edit Profile
          </p>
          <div className="grid lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-8">
              <input
                className="mb-[20px] rounded-[10px] bg-[#282828] border-[#808080] border-b-[1px] focus:outline-none px-[20px] w-full lg:w-[561px] h-[44px] text-[20px] text-[#808080] placeholder:text-[#808080]"
                placeholder="First name"
              />
              <input
                className="mb-[20px] rounded-[10px] bg-[#282828] border-[#808080] border-b-[1px] focus:outline-none px-[20px] w-full lg:w-[561px] h-[44px] text-[20px] text-[#808080] placeholder:text-[#808080]"
                placeholder="Last name"
              />
              <textarea className="mb-[20px] rounded-[10px] bg-[#282828] border-0 border-b-[1px] border-[#808080] outline-none py-[10px] px-[20px] w-full lg:w-[561px] h-[384px] text-[20px] text-[#808080] placeholder:text-[#808080]"
                placeholder="Bio">
                
                </textarea> 
            </div>
            <div className="order-1 lg:order-2 lg:col-span-4 grid justify-center lg:justify-end">
              <div>
                <div className="grid justify-center">
              <Image src={loginBg} className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px]" alt="profile picture"/>

                </div>
              <button className="mt-[25px] lg:mt-[15px] bg-[#282828] border-[1px] border-[#808080] h-[50px] w-[250px] text-[24px] font-semibold text-white rounded-[10px]">Upload Photo</button>
              <div className="my-[15px] leading-[29px] cursor-pointer text-[#CB76F2] text-[24px] text-center">Remove Photo</div>
              </div>
            </div>
          </div>

            <div className="flex justify-center lg:justify-end">
            <button className="h-[50px] w-[143px] bg-[#282828] rounded-[10px] text-white text-[20px] font-semibold">
              Cancel
            </button>
            <button className="ms-[25px] h-[50px] w-[143px] bg-[#CB76F2] rounded-[10px] text-white text-[20px] font-semibold">
              Save
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default EditProfileComponent;