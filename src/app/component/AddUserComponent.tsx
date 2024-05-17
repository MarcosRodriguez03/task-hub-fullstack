

import { useAppContext } from "@/Context/Context";
import { addUserToProject, getEntireUserProfile, } from "@/utils/DataService";
import { getLocalStorageProjectId } from "@/utils/localStorage";
import React, { useEffect, useState } from "react";

const AddUserComponent = (prop: { setAddUser: (input: string) => void; }) => {

  const [enteredUser, setEnteredUser] = useState<string>("")
  const [projID, setProjID] = useState<number>(0)
  const [isTrue, setIsTrue] = useState<Boolean>(true)

  const data = useAppContext()


  const addUserToProjectFunction = async () => {
    if (enteredUser != "") {
      let user: any = await getEntireUserProfile(enteredUser)

      console.log("-----------------------------------------")
      console.log(user[0].id)
      console.log(projID)
      await addUserToProject(user[0].id, projID);
      setIsTrue(!isTrue)
      data.setBoolUser(!data.boolUser)

    }
    setEnteredUser("");

  }

  useEffect(() => {
    let currentProjectId = getLocalStorageProjectId()
    setProjID(currentProjectId)
    console.log(enteredUser)


  }, [data.pageTwoName2, enteredUser])

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className=" bg-[#181818] border-[#808080] border-[1px] mx-[10px] w-full md:w-[424px] h-[173px] p-[30px] rounded-[10px] shadow-md">
          <input
            onChange={(e) => { setEnteredUser(e.target.value) }}
            value={enteredUser}
            maxLength={25}
            className="rounded-[10px] bg-[#282828] border-[#808080] border-b-[1px] focus:outline-none px-[20px] w-full md:w-[364px] h-[44px] text-[20px] text-[#808080] placeholder:text-[#808080]" placeholder="Add username" />
          <div className="mt-[25px] flex justify-end">
            <button
              onClick={() => { prop.setAddUser('hidden') }}
              className="h-[44px] w-[106px] bg-[#282828] rounded-[10px] text-white text-[20px] font-semibold">Cancel</button>
            <button
              onClick={() => {
                prop.setAddUser('hidden')
                  , addUserToProjectFunction()
              }}
              className="ms-[25px] h-[44px] w-[80px] bg-[#CB76F2] rounded-[10px] text-white text-[20px] font-semibold">Add</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddUserComponent;
