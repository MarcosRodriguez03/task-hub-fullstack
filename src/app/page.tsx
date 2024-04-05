'use client'
import { Button } from "flowbite-react";
import { useState } from "react";
import { IToken } from '@/interface/interface';
import { createAccount, getLoggedInUserData, login } from '@/utils/DataService';
import { useRouter } from 'next/navigation';
import HomePage from "./pages/HomePage/page";
import Image from "next/image";
import loginLogo from '@/assets/loginLogo.png'
import TaskPage from "./pages/TaskPage/page";



export default function Home() {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [switchBool, setSwitchBool] = useState<boolean>(true);

  let router = useRouter();

  const handleSwitch = () => {
    setSwitchBool(!switchBool)
  }

  const handleSubmit = async () => {
    //letting our user data inside of an object so we can put it in our post fetch
    let userData = {
      username: username,
      password: password
    }
    if (switchBool === true) {
      //create account logic here
      createAccount(userData)

    } else {
      //login logic here
      let token: IToken = await login(userData);
      console.log(token)

      //checks to see if we succeed
      if (token.token != null) {
        localStorage.setItem("Token", token.token)
        getLoggedInUserData(username);
        router.push('/pages/HomePage');
      } else {
        alert("login failed")

      }
    }
  }

  return (
    // <TaskPage />
    <div className="bg-image">
      <div className="grid lg:grid-cols-2 grid-cols-1">

        <div className="flex justify-center px-[20px]  ">
          <div className="min-h-screen w-[600px] pt-[15%]">

            <div className="flex items-center mb-[50px]">
              <Image src={loginLogo} alt="Logo" className="mr-[25px]" />
              <p className="text-[30px] text-[#CB76F2] ">TaskHub</p>
            </div>

            <div className="text-white mb-[50px]">
              <p className="text-[34px] pb-[15px]">{switchBool ? "Create account" : "Login "}</p>
              <p className="text-[20px] lg:text-[24px]">{switchBool ? "It all starts with an account" : "For all you managing needs"}.</p>
            </div>

            <div className="mb-[50px]">
              <div className="bg-[#282828] rounded-[10px] border-b border-[#808080] mb-[25px]">
                <input
                  required onChange={(e) => setUserName(e.target.value)}
                  placeholder="Username"
                  className=" border border-transparent bg-transparent focus:outline-none focus:ring-0 text-[20px] lg:text-[24px]  text-[#808080]" type="text" />
              </div>

              <div className="bg-[#282828] rounded-[10px] border-b border-[#808080] ">
                <input
                  required onChange={(e) => setPassword(e.target.value)}
                  placeholder=" Password"
                  className=" border border-transparent bg-transparent focus:outline-none focus:ring-0 text-[20px] lg:text-[24px]  text-[#808080]" type="text" />
              </div>
            </div>


            <div
              onClick={handleSubmit}
              className="bg-[#CB76F2] rounded-[10px] h-[70px] flex items-center justify-center mb-[50px]">
              <p className="text-[24px] lg:text-[34px]  text-white">{switchBool ? "Create account" : "Login"}</p>
            </div>

            <div className="flex justify-center" onClick={handleSwitch}>
              <span className="lg:flex text-center text-white text-[20px] lg:text-[24px] ">
                <p className="me-2">{switchBool ? "Have an account?" : "Dont have an account?"} </p>
                <p className="font-bold"> {switchBool ? "Login here" : "Register now"}</p>
              </span>
            </div>
          </div>
        </div>


        <div className=" grid-cols-none lg:grid-cols-1">
<p>sjiodsjdsiodjs</p>
        </div>

      </div>
    </div>



  );
}
