

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
  const [btnDisable, setBtnDisable] = useState<boolean>(true);

  const data = useAppContext()

  useEffect(() => {
    if (projectName === '') {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  }, [projectName])

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
    id: 0,
    userID: userID,
    projectName: projectName,
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
        <div className=" bg-[#181818] border-[#808080] border-[1px] mx-[10px] w-full md:w-[424px] h-[200px] p-[30px] rounded-[10px] shadow-md">
          <input
            required
            onChange={(e) => {
              if (!/[^a-zA-Z0-9\s]/.test(e.target.value)) {
                e.preventDefault();
                setProjectName(e.target.value)
              }
            }}
            maxLength={40}
            value={projectName}
            className="mb-[25px] rounded-[10px] bg-[#282828] border-[#808080] border-b-[1px] focus:outline-none px-[20px] w-full md:w-[364px] h-[44px] text-[20px] text-[#808080] placeholder:text-[#808080]" placeholder="Project name" />

          <div className="mt-[25px] flex justify-end">
            <button
              onClick={() => {
                prop.setCreateProject('hidden')
                setProjectName('');
                setAddedUser('');
              }}
              className="h-[44px] w-[106px] bg-[#5C5C5C] hover:bg-[#7b7b7b] rounded-[10px] text-white text-[20px] font-semibold">Cancel</button>
            <button
              onClick={() => {
                if (projectName != "") {
                  prop.setCreateProject('hidden');
                  handleOnClick();
                }
              }}
              className={btnDisable ? "bg-[#6a3e7e] text-[#838383] cursor-default ms-[25px] h-[44px] w-[106px] rounded-[10px] text-[20px] font-semibold" : "hover:bg-[#d186f3] ms-[25px] h-[44px] w-[106px] bg-[#CB76F2] rounded-[10px] text-white text-[20px] font-semibold"} >Create</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CreateProjectComponent
