"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import plusIcon from "@/assets/plusIcon.png";
import ProjectCardComponent from "@/app/components/ProjectCardComponent";
import NavBarComponent from "@/app/components/NavBarComponent";
import NotificationBoxComponent from "@/app/components/NotificationBoxComponent";

const HomePage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#080808";
  }, []);

  return (
    <div>
      <NavBarComponent title="Projects"/>

      <div className="hidden lg:block">
        <div className="grid absolute right-[110px] mt-[15px] text-[24px]">
          <NotificationBoxComponent message="Tyler sent a message" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 px-[20px] xl:px-[30px] mt-[20px] lg:mt-[60px]">
        <div className="lg:grid lg:justify-center">
          <div className="h-[50px] w-full lg:h-[340px] lg:w-[240px] 2xl:h-[365px] 2xl:w-[290px] bg-[#CB76F2] lg:bg-[#181818] rounded-[15px] border-[#525252] border-[1px] lg:border-[3px] cursor-pointer lg:text-center mb-[20px] 2xl:mb-[30px]">
            <div className="hidden lg:block">
              <div className="grid justify-center mt-[85px] 2xl:mt-[115px] mb-[65px] 2xl:mb-[70px]">
                <Image height={75} width={75} src={plusIcon} alt="plus icon" />
              </div>
            </div>
            <div className="h-full lg:h-0 flex lg:grid justify-between lg:justify-normal lg: px-[25px] lg:px-0">
              <p className="text-white text-[20px] lg:text-[24px] my-auto ">
                Create Project
              </p>
              <Image
                src={plusIcon}
                className=" lg:hidden inline h-[30px] w-[30px] my-auto"
                alt="plus icon"
              />
            </div>
          </div>
        </div>
        <ProjectCardComponent
          percent="10"
          projectName="New Project"
        />
        <ProjectCardComponent
          percent="100"
          projectName="Old Project"
        />
      </div>
    </div>
  );
};

export default HomePage;
