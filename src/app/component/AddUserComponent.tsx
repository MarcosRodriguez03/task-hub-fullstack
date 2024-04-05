'use client'

import React from "react";

const AddUserComponent = () => {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-[#181818] border-[#808080] border-[1px] w-[424px] h-[173px] p-[30px] rounded-[10px] shadow-md">
            <input className="rounded-[10px] bg-[#282828] border-[#808080] border-[1px] focus:outline-none px-[20px] w-[364px] h-[44px] text-[20px] text-[#808080] placeholder:text-[#808080]" placeholder="Add username"/>
            <div className="mt-[25px] flex justify-end">
                <button className="h-[44px] w-[106px] bg-[#282828] rounded-[10px] text-white text-[20px] font-semibold">Cancel</button>
                <button className="ms-[25px] h-[44px] w-[80px] bg-[#CB76F2] rounded-[10px] text-white text-[20px] font-semibold">Add</button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default AddUserComponent;
