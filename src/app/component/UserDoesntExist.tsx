import React from 'react'

interface InoUser {
    setCreateProject: (input: string) => void

}


const UserDoesntExist = (prop: InoUser) => {

    return (
        <div className=' fixed bg-black bg-opacity-90 z-50   h-screen w-screen '>
            <div className='fixed  z-50 flex justify-center items-center h-full w-full'>
                <div className='w-[325px] sm:w-[500px] px-4 h-[full] py-16 bg-[#181818]  rounded-md flex flex-col items-center justify-center' >
                    <p className=' text-lg lg:text-2xl text-center text-white '>User does not exist</p>

                    <button
                        onClick={() => {

                            prop.setCreateProject('hidden')
                        }}
                        className={" mt-4 hover:bg-[#d186f3]  h-[44px] w-[80px] bg-[#CB76F2] rounded-[10px] text-white text-[20px] font-semibold"}>Ok
                    </button>
                </div>
            </div>


        </div>
    )
}

export default UserDoesntExist
