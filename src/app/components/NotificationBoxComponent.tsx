"use client";

import React from "react";
import Image from "next/image";
import removeNotifs from "@/assets/removeNotifsIcon.png";

const NotificationBoxComponent = (prop: { message: string }) => {
  return (
    <div className="bg-[#D9D9D9] w-[400px] h-[77px] rounded-[15px] mb-[15px]">
      <div className="flex justify-between mx-[25px] h-full">
        <p className="my-auto">{prop.message}</p>
        <Image
          className="cursor-pointer h-[41px] w-[41px] my-auto"
          src={removeNotifs}
          alt="remove icon"
        />
      </div>
    </div>
  );
};

export default NotificationBoxComponent;
