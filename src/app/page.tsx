'use client'
import { Button } from "flowbite-react";
import { useState } from "react";
import { IToken } from '@/interface/interface';
import { createAccount, getLoggedInUserData, login } from '@/utils/DataService';
import { useRouter } from 'next/navigation';
import HomePage from "./pages/HomePage/page";
import Image from "next/image";
import loginLogo from '@/assets/loginLogo.png'



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

    <div className="bg-image">
      <div className="grid grid-cols-2">

        <div>
          <Image src={loginLogo} alt="Logo" />
        </div>

        <div>

        </div>

      </div>
    </div>

    // <div className=" loginBg  min-h-screen flex justify-center items-center p-[10px]">
    //   <div className="bg-white rounded-lg w-[600px] p-[20px] md:p-[50px]">
    //     <div className="flex items-center pb-[25px] md:pb-[50px]">
    //       <img src="https://picsum.photos/200" className="w-[50px] pe-2 h-auto" alt="" />
    //       <h1 className="text-lg md:text-2xl text-[#6E387C]">TaskHub</h1>
    //     </div>
    //     <div className="pb-[50px]">
    //       <p className="text-lg md:text-2xl font-bold ">{switchBool ? "Login " : "Create account"}</p>
    //       <p className="hidden md:block text-lg  md:text-xl">{switchBool ? "For all you managing needs" : "It all starts with an email"}.</p>
    //     </div>
    //     {/* {
    //       !switchBool ? <div className="pb-[25px]">
    //         <p className="text-lg md:text-xl">Email Address</p>
    //         <input className=" w-full rounded-lg" type="text" />
    //       </div> : ""
    //     } */}
    //     <div className="pb-[25px]">
    //       <p className="text-lg md:text-xl">Username</p>
    //       <input className=" w-full rounded-lg" type="text" required onChange={(e) => setUserName(e.target.value)} />
    //     </div>
    //     <div className="pb-[50px]">
    //       <p className="text-lg md:text-xl">Password</p>
    //       <input className=" w-full rounded-lg" type="text" required onChange={(e) => setPassword(e.target.value)} />
    //     </div>
    //     <button
    //       onClick={handleSubmit}
    //       className="mb-[50px] w-full bg-[#6E387C] text-lg md:text-2xl h-[50px] rounded-lg text-white">{switchBool ? "Login" : "Create account"}</button>
    //     <div
    //       onClick={handleSwitch}
    //       className="flex justify-center">
    //       <span className="cursor-pointer text-center md:flex text-lg md:text-xl"><p className="text-center me-2">{switchBool ? "Dont have an account?" : "Have an account?"}</p><p onClick={handleSwitch}>{switchBool ? "Register now" : "Login here"}</p></span>
    //     </div>
    //   </div>
    // </div>
  );
}
