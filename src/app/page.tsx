'use client'
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { IToken } from '@/interface/interface';
import { createAccount, getLoggedInUserData, login } from '@/utils/DataService';
import { useRouter } from 'next/navigation';
import HomePage from "./pages/HomePage/page";
import Image from "next/image";
import loginLogo from '@/assets/loginLogo.png'
import TaskPage from "./pages/TaskPage/page";
import { useAppContext } from "@/Context/Context";
import { saveLocalStorage, saveLocalStorageUserID } from "@/utils/localStorage";
import ImageIsTooBigComponent from "./component/ImageIsTooBigComponent";



export default function Home() {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [switchBool, setSwitchBool] = useState<boolean>(false);
  const [hideModel, setHideModel] = useState("hidden");
  const [modelBool, setModelBool] = useState(true);
  const [textBox1, setTextBox1] = useState("block");
  const [textBox2, setTextBox2] = useState("block");
  const [btnDisable, setBtnDisable] = useState<boolean>(true);

  const data = useAppContext();

  let router = useRouter();

  useEffect(() => {
    if (username === '' || password === '') {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  }, [username, password])

  const handleSwitch = () => {
    setSwitchBool(!switchBool)
    setPassword("")
    setUserName("")
  }

  const handleSubmit = async () => {
    //letting our user data inside of an object so we can put it in our post fetch
    let userData = {
      username: username,
      password: password
    }

    if (switchBool === true) {
      if (username != "" && password != "") {
        if (await createAccount(userData)) {
          setModelBool(true)
          setTextBox1("block")
          setTextBox2("hidden")
          setHideModel("block")
          setSwitchBool(!switchBool)

        } else {
          setTextBox1("block")
          setTextBox2("hidden")
          setModelBool(false)
          setHideModel("block")
        }
      } else {
        setTextBox1("block")
        setTextBox2("hidden")
        setModelBool(false)
        setHideModel("block")
      }


      setPassword("")
      setUserName("")

    } else {
      //login logic here
      let token: IToken = await login(userData);


      //checks to see if we succeed
      if (token.token != null) {

        localStorage.clear();
        saveLocalStorage(username)
        data.setPageTwoName(username);
        localStorage.setItem("Token", token.token)
        getLoggedInUserData(username);
        let userId = await getLoggedInUserData(username)


        saveLocalStorageUserID(userId.id || 1)

        router.push('/pages/HomePage');

      } else {
        setTextBox2("block")
        setTextBox1("hidden")
        setHideModel("block")
      }
      setPassword("")
      setUserName("")
    }
  }


  return (
    // <TaskPage />
    <div className="bg-image">
      <div className="grid lg:grid-cols-2 grid-cols-1">

        <div className="flex justify-center px-[20px]  ">
          <div className="min-h-screen w-[600px] grid">

            <div className="my-auto">


              <div className="flex items-center mb-[50px]">
                <Image src={loginLogo} alt="Logo" className="mr-[25px]" />
                <p className="text-[30px] text-[#CB76F2] ">TaskHub</p>
              </div>

              <div className="text-white mb-[50px]">
                <p className="text-[34px] pb-[15px]">{switchBool ? "Create account" : "Login "}</p>
                <p className="text-[20px] lg:text-[24px]">{switchBool ? "It all starts with an account" : "For all your managing needs"}.</p>
              </div>

              <div className="mb-[50px]">
                <div className="bg-[#282828] rounded-[10px] border-b border-[#808080] mb-[25px]">
                  <input
                    required onChange={(e) => {
                      if (!/[^a-zA-Z0-9\s]/.test(e.target.value) && !/\s/.test(e.target.value)) {
                        e.preventDefault();
                        setUserName(e.target.value)
                      }
                    }}
                    maxLength={25}
                    value={username}
                    placeholder="Username"
                    className="px-[15px] lg:px-[20px]  rounded-[10px] w-full border border-transparent bg-transparent focus:outline-none focus:ring-0 text-[20px] lg:text-[24px]  text-[#808080] placeholder:text-[#808080]" type="text" />
                </div>

                <div className="bg-[#282828] rounded-[10px] border-b border-[#808080] ">
                  <input
                    required onChange={(e) => {
                      if (!/[^a-zA-Z0-9\s]/.test(e.target.value) && !/\s/.test(e.target.value)) {
                        e.preventDefault();
                        setPassword(e.target.value)
                      }
                    }}
                    maxLength={25}
                    value={password}
                    placeholder="Password"
                    type="password"
                    className="px-[15px] lg:px-[20px] w-full rounded-[10px]  border border-transparent bg-transparent focus:outline-none focus:ring-0 text-[20px] lg:text-[24px]  text-[#808080] placeholder:text-[#808080]" />
                </div>
              </div>



              <button
                onClick={() => {
                  if (username != '' || password != '') {
                    handleSubmit();
                  }
                }}

                className={btnDisable ? "w-full bg-[#6a3e7e] text-[#838383] cursor-default rounded-[10px] h-[70px] flex items-center justify-center mb-[50px]" : "w-full bg-[#CB76F2] hover:bg-[#d186f3] text-white cursor-pointer rounded-[10px] h-[70px] flex items-center justify-center mb-[50px]"}>
                <p className="text-[24px] lg:text-[34px] ">{switchBool ? "Create account" : "Login"}</p>
              </button>

              <div className="flex justify-center" >
                <span className="lg:flex text-center text-white text-[20px] lg:text-[24px] ">
                  <p className="me-2">{switchBool ? "Have an account?" : "Dont have an account?"} </p>
                  <p onClick={handleSwitch} className="cursor-pointer font-bold"> {switchBool ? "Login here" : "Register now"}</p>
                </span>
              </div>
            </div>

          </div>
        </div>


        <div className=" grid-cols-none lg:grid-cols-1">

        </div>

      </div>
      <div className={`${hideModel} fixed inset-0 flex items-center justify-center bg-black bg-opacity-80`}>

        <div className={` ${textBox1} bg-[#181818] h-[225px] max-w-[500px] w-full rounded-xl shadow-[20px] p-[30px] flex-col flex justify-center mx-[15px] items-center`}>
          <h1 className="text-lg lg:text-2xl font-bold text-center text-white"> {modelBool ? "Account Successfully Created" : "An Error has Occured when Creating Account. Please try again."}</h1>
          <button
            onClick={() => { setHideModel("hidden") }}
            className={modelBool ? "mt-[20px] bg-[#04BAAD] hover:bg-[#86f3ec]  text-white font-bold py-2 px-10 rounded" : "mt-[20px] bg-[#EC5A52] hover:bg-[#ff6961]  text-white font-bold py-2 px-10 rounded"}>
            Ok
          </button>
        </div>

        <div className={` ${textBox2} bg-[#181818] h-[225px] max-w-[500px] w-full rounded-xl shadow-[20px] px-[30px] flex-col flex justify-center mx-[15px] items-center`}>
          <h1 className="text-lg lg:text-2xl font-bold text-center text-white"> Could not find an account matching the username or password.</h1>
          <button
            onClick={() => { setHideModel("hidden") }}
            className="mt-[20px] bg-[#EC5A52] hover:bg-[#ff6961] text-white font-bold py-2 px-10 rounded">
            Ok
          </button>
        </div>





      </div>
    </div>



  );
}
