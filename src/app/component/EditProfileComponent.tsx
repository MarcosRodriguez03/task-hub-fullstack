"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import loginBg from "@/assets/loginBg.jpg";
import { FileInput } from "flowbite-react";
import { getLoggedInUserData, publishEditUserInfo } from "@/utils/DataService";
import { getLocalStorage } from "@/utils/localStorage";
import ProfilePageComponent from "../components/ProfilePageComponent";
import { useAppContext } from "@/Context/Context";



const EditProfileComponent = (prop: {
  setEditProfile: (input: string) => void;
}) => {

  const [inputID, setInputID] = useState<number>(0)
  const [first, setFirst] = useState<string>("");
  const [second, setSecond] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [image, setImage] = useState<any>("");
  const [isTrue, setIsTrue] = useState<boolean>(true)
  const [profilePage, setProfilePage] = useState<string>('hidden');

  const handleFirst = (e: React.ChangeEvent<HTMLInputElement>) => setFirst(e.target.value);
  const handleSecond = (e: React.ChangeEvent<HTMLInputElement>) => setSecond(e.target.value);
  const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value);
  const handleBio = (e: any) => setBio(e.target.value);

  const data = useAppContext()

  useEffect(() => {
    let profile = getLocalStorage()
    const startEditProfile = async () => {

      let info = await getLoggedInUserData(profile);
      setInputID(info.userId)



    }
    startEditProfile();
    console.log(first)
    console.log(second)
    console.log(contact)
    console.log(bio)
    console.log(image)
  }, [first])

  const fileInputRef: any = React.createRef();

  const handleClickBtn = () => {
    fileInputRef.current.click();
  }
  const handleEditProfile = async () => {
    await publishEditUserInfo(inputID, first, second, contact, bio, "image");
    setIsTrue(!isTrue)
    data.setPageTwoName(`${isTrue}`)


  }

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      let reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        setImage(reader.result as string); // Set image state with selected file data (converted to Base64 string)
      }
      reader.readAsDataURL(file); // Read file as data URL
    } else {
      console.error("No file selected");
    }
  }

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className=" bg-[#181818] border-[#808080] border-[1px] mx-[10px] w-full lg:w-[941px] p-[30px] h-[80vh] lg:h-[650px] rounded-[10px] shadow-md overflow-auto">
          <p className="hidden lg:block font-semibold text-[30px] text-white leading-[48px] mb-[20px]">
            Edit Profile
          </p>
          <div className="grid lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-8">
              <input
                onChange={handleFirst}
                className="mb-[20px] rounded-[10px] bg-[#282828] border-[#808080] border-b-[1px] focus:outline-none px-[20px] w-full lg:w-[561px] h-[44px] text-[20px] text-[#808080] placeholder:text-[#808080]"
                placeholder="First name"
              />
              <input
                onChange={handleSecond}
                className="mb-[20px] rounded-[10px] bg-[#282828] border-[#808080] border-b-[1px] focus:outline-none px-[20px] w-full lg:w-[561px] h-[44px] text-[20px] text-[#808080] placeholder:text-[#808080]"
                placeholder="Last name"
              />
              <input
                onChange={handleContact}
                className="mb-[20px] rounded-[10px] bg-[#282828] border-[#808080] border-b-[1px] focus:outline-none px-[20px] w-full lg:w-[561px] h-[44px] text-[20px] text-[#808080] placeholder:text-[#808080]"
                placeholder="Contact"
              />
              <textarea
                onChange={handleBio}
                className="mb-[20px] rounded-[10px] bg-[#282828] border-0 border-b-[1px] border-[#808080] outline-none py-[10px] px-[20px] w-full lg:w-[561px] h-[150px] lg:h-[250px] text-[20px] text-[#808080] placeholder:text-[#808080]"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-4 grid justify-center lg:justify-end">
              <div>


                <FileInput ref={fileInputRef} onChange={handleImage} accept='image/png, image/jpg,' id="Pictures" required placeholder='Choose img' style={{ display: 'none' }} />

                <div className="grid justify-center">

                  <Image
                    src={loginBg}
                    className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px]"
                    alt="profile picture"
                  />
                </div>
                <button onClick={handleClickBtn} className="mt-[25px] lg:mt-[15px] bg-[#282828] border-[1px] border-[#808080] h-[50px] w-[250px] text-[24px] font-semibold text-white rounded-[10px]">
                  Upload Photo
                </button>
                <div className="my-[15px] leading-[29px] cursor-pointer text-[#CB76F2] text-[24px] text-center">
                  Remove Photo
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <button
              onClick={() => {
                prop.setEditProfile("hidden")
              }}
              className="h-[50px] w-[143px] bg-[#282828] rounded-[10px] text-white text-[20px] font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                prop.setEditProfile("hidden")
                  , handleEditProfile()

              }}
              className="ms-[25px] h-[50px] w-[143px] bg-[#CB76F2] rounded-[10px] text-white text-[20px] font-semibold"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileComponent;
