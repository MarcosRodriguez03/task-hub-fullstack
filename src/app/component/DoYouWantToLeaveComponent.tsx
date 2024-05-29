import React from 'react'

interface Ileave {
    setCreateProject: (input: string) => void
    leaveFunation: () => void

}

const DoYouWantToLeaveComponent = (prop: Ileave) => {
    return (
        <div className=' fixed bg-black bg-opacity-90 z-50   h-screen w-screen '>
            <div className='fixed  z-50 flex justify-center items-center h-full w-full'>
                <div className='w-[325px] sm:w-[500px] px-4 h-[full] py-16 bg-[#181818]  rounded-md flex flex-col items-center justify-center' >
                    <p className=' text-lg lg:text-2xl text-center text-white '>Are you sure you want to leave project.</p>
                    <div className='flex'>
                        <button
                            onClick={() => {

                                prop.setCreateProject('hidden')
                            }}
                            className={" mt-4 mr-20 bg-[#5C5C5C] hover:bg-[#7b7b7b] h-[44px] w-[100px]  rounded-[10px] text-white text-[20px] font-semibold"}>Cancel
                        </button>

                        <button
                            onClick={() => {
                                prop.leaveFunation()
                                prop.setCreateProject('hidden')
                            }}
                            className={" mt-4 hover:bg-[#d186f3]  h-[44px] w-[100px] bg-[#CB76F2] rounded-[10px] text-white text-[20px] font-semibold"}>Ok
                        </button>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default DoYouWantToLeaveComponent
