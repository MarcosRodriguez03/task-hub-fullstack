

import React, { useEffect, useState } from "react";
import Image from "next/image";
import removeIcon from "@/assets/removeIcon.png";
import { useRouter } from "next/navigation";
import { saveLocalStorage, saveLocalStorageProjectId } from "@/utils/localStorage";
import { useAppContext } from "@/Context/Context";
import { DeleteProject, GetTasksByProjectID, GetTasksByStatus } from "@/utils/DataService";
import ConfirmDeleteComponent from "../component/ConfirmDeleteComponent";
import { IProject, ITask, ITaskArr } from "@/interface/interface";


const ProjectCardComponent = (prop: {
  owner: string;
  projectName: string;
  taskPage: (input: string) => void;
  projectId: number
}) => {
  const [barPercent, setBarPercent] = useState<string>("0%")
  const [isDeleteProject, setIsDeleteProject] = useState<boolean>(false)

  const data = useAppContext()
  let currentProjectId = prop.projectId


  let router = useRouter();

  const GoToTask = () => {
    data.setCurrentProjectId(currentProjectId)
    router.push("./TaskPage")
  }

  const getPercent = (numOne: number, numTwo: number) => {

    let percent = (numOne / numTwo) * 100;

    if (isNaN(percent)) {
      percent = 0
    }

    let round = Math.round(percent).toString();
    let finalPercent = round + "%"


    setBarPercent(finalPercent)
    return finalPercent;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let currentProjectId = prop.projectId;
        let currentDone: ITaskArr[] = await GetTasksByStatus("Done", Number(currentProjectId))
        let taskObjArr = await GetTasksByProjectID(currentProjectId);
        getPercent(await currentDone.length, await taskObjArr.length)
      } catch (error) {
        console.error("");
      }
    };

    fetchData();

  }, []);





  return (


    <div
      onClick={() => {
        prop.taskPage('block lg:block');
        saveLocalStorageProjectId(currentProjectId)
        GoToTask()
      }}
      className="lg:grid lg:justify-center">

      <div className={isDeleteProject ? "block" : "hidden"}>
        <ConfirmDeleteComponent projectId={prop.projectId} isTrue={false} projectName={prop.projectName} isDeleteTask={isDeleteProject} setIsDeleteTask={setIsDeleteProject} />
      </div>
      <div className="h-[100px] lg:h-[340px] w-full lg:w-[240px] 2xl:h-[365px] 2xl:w-[290px] bg-[#181818] rounded-[15px] border-[#525252] border-[1px] lg:border-[3px] cursor-pointer lg:text-center mb-[20px] 2xl:mb-[30px]">
        <div className="lg:grid lg:justify-end lg:me-[15px] 2xl:me-[25px] lg:mt-[15px] 2xl:mt-[25px] mb-[13px]">
          <div className="flex justify-between px-[25px] lg:px-0 lg:justify-normal lg:grid mt-[10px] lg:mt-0">
            <p className="block lg:hidden text-white text-[20px] truncate">{prop.projectName}</p>
            <Image
              onClick={(event) => {
                event.stopPropagation();

                setIsDeleteProject(true)
              }}
              src={removeIcon} className={`h-[30px] w-[30px] ${prop.owner}`} alt="remove icon" />
          </div>
          <div className="block lg:hidden mt-[10px] ms-[21px] me-[29px]">
            <hr className="bg-[#525252] border-0 h-px" />
          </div>

        </div>
        <p className="hidden lg:block text-[64px] text-white">{barPercent}</p>
        <div className="ms-[21px] me-[29px] lg:mx-[17px] mt-[17px] lg:mt-[20px] 2xl:mt-[35px] mb-[30px] 2xl:mb-[40px]">
          <div className="w-full bg-[#D9D9D9] rounded-full h-[15px] lg:h-5 dark:bg-gray-700">
            <div
              className="bg-[#CB76F2] h-[15px] lg:h-5 rounded-full"
              style={{ width: barPercent }}
            ></div>
          </div>
        </div>
        <div className="hidden lg:block text-white text-[24px]">{prop.projectName}</div>
      </div>
    </div>
  );
};

export default ProjectCardComponent;
