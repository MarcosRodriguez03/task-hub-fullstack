"use client";

import React from "react";
import Image from "next/image";
import removeIcon from "@/assets/removeIcon.png";

const ProjectCardComponent = (prop: {
  percent: string;
  projectName: string;
}) => {
  return (
    <div className="lg:grid lg:justify-center">
      <div className="h-[100px] lg:h-[340px] w-full lg:w-[240px] 2xl:h-[365px] 2xl:w-[290px] bg-[#181818] rounded-[15px] border-[#525252] border-[1px] lg:border-[3px] cursor-pointer lg:text-center mb-[20px] 2xl:mb-[30px]">
        <div className="lg:grid lg:justify-end lg:me-[15px] 2xl:me-[25px] lg:mt-[15px] 2xl:mt-[25px] mb-[13px]">
            <div className="flex justify-between px-[25px] lg:px-0 lg:justify-normal lg:grid mt-[10px] lg:mt-0">
               <p className="block lg:hidden text-white text-[20px] truncate">{prop.projectName}</p>
                <Image src={removeIcon} className="h-[30px] w-[30px]" alt="remove icon" /> 
            </div>
            <div className="block lg:hidden mt-[10px] ms-[21px] me-[29px]">
                <hr className="bg-[#525252] border-0 h-px"/>
            </div>
            
        </div>
        <p className="hidden lg:block text-[64px] text-white">{`${prop.percent}%`}</p>
        <div className="ms-[21px] me-[29px] lg:mx-[17px] mt-[17px] lg:mt-[20px] 2xl:mt-[35px] mb-[30px] 2xl:mb-[40px]">
          <div className="w-full bg-[#D9D9D9] rounded-full h-[15px] lg:h-5 dark:bg-gray-700">
            <div
              className="bg-[#CB76F2] h-[15px] lg:h-5 rounded-full"
              style={{ width: `${prop.percent}%` }}
            ></div>
          </div>
        </div>
        <div className="hidden lg:block text-white text-[24px]">{prop.projectName}</div>
      </div>
    </div>
  );
};

export default ProjectCardComponent;
