

import { useAppContext } from '@/Context/Context'
import { IProject } from '@/interface/interface'
import { addUserToProject, createProject, getEntireUserProfile, getLoggedInUserData } from '@/utils/DataService'
import { getLocalStorage } from '@/utils/localStorage'
import React, { useEffect, useState } from 'react'



const CreateProjectComponent = (prop: { setCreateProject: (input: string) => void; }) => {

  const [projectName, setProjectName] = useState<string>("")
  const [userID, setUserID] = useState<number>(0)
  const [addedUser, setAddedUser] = useState<string>("")
  const [isTrue, setIsTrue] = useState<boolean>(true)

  const data = useAppContext()



  const handleOnClick = async () => {
    let projID = await createProject(projectObject)

    if (addedUser != "") {
      let addedUserId = await getLoggedInUserData(addedUser)
      if (projID > 0) {
        await addUserToProject(addedUserId.userId, projID)
      }
    }

    setIsTrue(!isTrue)
    data.setPageTwoName2(`${isTrue}`)

  }

  const projectObject: IProject = {
    ID: 0,
    UserId: userID,
    ProjectName: projectName,
    isDeleted: false,
  }

  useEffect(() => {
    let profile = getLocalStorage();
    const loadAll = async () => {
      let userNumber = await getLoggedInUserData(profile)

      setUserID(userNumber.userId)





    }
    loadAll()

  })

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className=" bg-[#181818] border-[#808080] border-[1px] mx-[10px] w-full md:w-[424px] h-[242px] p-[30px] rounded-[10px] shadow-md">
          <input
            onChange={(e) => {
              if (e.target.value != "") {
                setProjectName(e.target.value)
              }
            }}
            className="mb-[25px] rounded-[10px] bg-[#282828] border-[#808080] border-b-[1px] focus:outline-none px-[20px] w-full md:w-[364px] h-[44px] text-[20px] text-[#808080] placeholder:text-[#808080]" placeholder="Project name" />
          <input
            onChange={(e) => setAddedUser(e.target.value)}
            className="rounded-[10px] bg-[#282828] border-[#808080] border-b-[1px] focus:outline-none px-[20px] w-full md:w-[364px] h-[44px] text-[20px] text-[#808080] placeholder:text-[#808080]" placeholder="Add username" />
          <div className="mt-[25px] flex justify-end">
            <button
              onClick={() => {
                prop.setCreateProject('hidden')
              }}
              className="h-[44px] w-[106px] bg-[#282828] rounded-[10px] text-white text-[20px] font-semibold">Cancel</button>
            <button
              onClick={() => {
                prop.setCreateProject('hidden');
                handleOnClick();
              }}
              className="ms-[25px] h-[44px] w-[106px] bg-[#CB76F2] rounded-[10px] text-white text-[20px] font-semibold" >Create</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CreateProjectComponent
