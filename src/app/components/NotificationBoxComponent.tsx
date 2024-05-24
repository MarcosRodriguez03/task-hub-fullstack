'use client'

import React, { useEffect } from "react";
import Image from "next/image";
import removeNotifs from "@/assets/removeNotifsIcon.png";
import { DeleteNotification } from "@/utils/DataService";
import { useAppContext } from "@/Context/Context";

const NotificationBoxComponent = (prop: { message: string, id:number }) => {

  const data = useAppContext();
  const handleDeleteNotif = async () => {
    await DeleteNotification(prop.id);
    data.setIsNotif(!data.isNotif);
  }


  return (
    <div className="bg-[#D9D9D9] w-full h-[55px] rounded-[15px] my-[25px] lg:my-[15px] text-[15px] lg:text-[16px] lg:grid">
      <div className="flex justify-between ms-[15px] me-[10px] h-full">
        <p className="my-auto">{prop.message}</p>
        <Image
          onClick={() => {
            handleDeleteNotif();
          }}
          className="cursor-pointer h-[41px] w-[41px] my-auto"
          src={removeNotifs}
          alt="remove icon"
        />
      </div>
    </div>
  );
};

export default NotificationBoxComponent;
