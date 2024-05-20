
import React, { useEffect, useState } from "react";
import leftArrow from "@/assets/leftArrow.png";
import Image from "next/image";
import emptyPfp from "@/assets/emptyPfp.png";
import EditProfileComponent from "../component/EditProfileComponent";
import { useRouter } from "next/navigation";
import { getLocalStorage, getLocalStorageProjectId, getLocalStorageUserID } from "@/utils/localStorage";
import { RemoveUserFromProjectByID, getEntireUserProfile, getEntireUserProfileById } from "@/utils/DataService";
import { useAppContext } from "@/Context/Context";

const ProfilePageComponent = (prop: {
  pageProfile: (input: string) => void;
  pageProfileId: number;
  pageBool: boolean;

}) => {

  const data = useAppContext();

  const [editProfile, setEditProfile] = useState<string>('hidden');

  const [username, setUsername] = useState<string>("admin");
  const [profileFirstName, setProfileFirstName] = useState<string>("user")
  const [profileLastName, setProfileLastName] = useState<string>("user")
  const [profileContact, setProfileContact] = useState<string>("contact")
  const [profileBio, setProfileBio] = useState<string>("")
  const [profileImage, setProfileImage] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<number>(0);


  const { pageTwoName } = useAppContext();


  useEffect(() => {
    let user = getLocalStorage();
    let userId = getLocalStorageUserID();
    console.log(userId)
    setCurrentUser(userId)
    const loadProfile = async () => {
      if (prop.pageBool == true) {
        let fullProfile: any = await getEntireUserProfile(user)
        console.log(fullProfile)
        setUsername(fullProfile[0].username);
        setProfileFirstName(fullProfile[0].firstName)
        setProfileLastName(fullProfile[0].lastName)
        setProfileContact(fullProfile[0].contact)
        setProfileBio(fullProfile[0].bio)
        setProfileImage(fullProfile[0].image)
      } else {
        let fullProfile: any = await getEntireUserProfileById(prop.pageProfileId)
        console.log(fullProfile)
        setUsername(fullProfile && fullProfile.username);
        setProfileFirstName(fullProfile && fullProfile.firstName)
        setProfileLastName(fullProfile && fullProfile.lastName)
        setProfileContact(fullProfile && fullProfile.contact)
        setProfileBio(fullProfile && fullProfile.bio)
        setProfileImage(fullProfile && fullProfile.image)

      }

    }
    loadProfile()
  }, [pageTwoName, data.isProfileOpen])


  let router = useRouter();

  const LogOut = () => {
    router.push('/');
  }

  const handleKickUser = async () => {
    let projId = getLocalStorageProjectId();
    await RemoveUserFromProjectByID(prop.pageProfileId, projId)
    data.setBoolUser(!data.boolUser);
  }

  const handleEditProfile = () => {
    if (editProfile === 'hidden') {
      setEditProfile('block');
    } else {
      setEditProfile('hidden');
    }
  }

  return (
    <div>
      <div className={editProfile}>
        <EditProfileComponent setEditProfile={setEditProfile} />
      </div>
      <div className="w-full lg:bg-black lg:bg-opacity-80 h-screen absolute right-0 lg:z-40">
        <span className="hidden lg:flex items-center bg-[#181818] border-l border-[#808080] w-[604px] absolute right-0 px-[30px] pb-[20px] pt-[30px] ">
          <button
            onClick={() => {
              prop.pageProfile("hidden lg:hidden");
            }}
            className="me-[15px] w-[50px] h-[50px] bg-[#212020] hover:bg-[#3a3838] active:bg-[#4a4848] rounded-[10px] flex items-center justify-center"
          >
            <Image
              className="h-[32px] w-[32px] "
              alt="back arrow"
              src={leftArrow}
            />
          </button>
          <p className="text-[28px] text-[#B8B8B8] font-semibold ">Profile</p>
        </span>

        <div className=" w-full lg:w-[604px] absolute right-0 z-20 top-[80px] bottom-[80px] lg:bottom-0  lg:border-l lg:border-[#808080] bg-[#080808] lg:bg-[#181818] p-[20px] lg:p-[30px] overflow-y-auto">
          <div className="flex justify-center flex-col items-center mt-[25px]">

            <div className="w-[150px] h-[150px] relative">
              <Image
                fill
                alt="pfp"
                src={profileImage ? profileImage : emptyPfp}
              />
            </div>

            <p className=" mt-[25px] text-[28px] font-bold text-white break-words text-center w-full">
              {profileFirstName && profileFirstName} {profileLastName && profileLastName}
            </p>
            <p className="text-[24px] font-bold text-[#B8B8B8] mt-1 break-words">
              {username && username}
            </p>
            <div className="bg-[#282828] w-full mx-[20px] lg:mx-[30px] min-h-[300px] lg:h-[283px] rounded-[10px] my-6 p-[20px] lg:overflow-y-auto">
              <p className="text-[#B8B8B8] text-[24px] font-semibold">
                Contact
              </p>
              <p className="text-white text-[20px] font-medium break-words">
                {profileContact && profileContact}
              </p>
              <p className="text-[#B8B8B8] text-[24px] font-semibold mt-6">
                Bio
              </p>
              <p className="text-white text-[20px] font-medium break-words">{profileBio && profileBio}</p>
            </div>


            {prop.pageBool == true || prop.pageProfileId == currentUser ? <div className="flex justify-center mb-6 w-full">
              <button
                onClick={handleEditProfile}
                className="bg-[#5C5C5C] text-[24px] text-white font-semibold h-[49px] w-full max-w-[174px] rounded-[10px]">
                Edit
              </button>
              <button
                onClick={LogOut}
                className="ms-[25px] bg-[#ED473D] text-[24px] text-white font-semibold h-[49px] w-full max-w-[174px] rounded-[10px]">
                Sign Out
              </button>
            </div> :
              <div className="flex justify-center mb-6 w-full">
                <button
                  onClick={() => { handleKickUser(); data.setPageTwoName4(!data.pageTwoName4); prop.pageProfile("hidden") }}
                  className="bg-[#ED473D] text-[24px] text-white font-semibold h-[49px] w-full max-w-[174px] rounded-[10px]">
                  Remove
                </button>
              </div>

            }




          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageComponent;
