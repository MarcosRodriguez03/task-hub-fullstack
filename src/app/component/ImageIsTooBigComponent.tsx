import React from 'react'

const ImageIsTooBigComponent = () => {
    return (
        <div className=' fixed bg-black bg-opacity-80  z-50 w-full h-full fixed flex justify-center items-center '>
            <div className='z-50 w-[full] h-[full] px-8 py-16 bg-[#181818]  rounded-md flex flex-col items-center justify-center' >
                <p className=' text-lg lg:text-2xl text-center text-white '>File size exceeds the limit (5MB). Please choose a smaller file.</p>

                <button
                    onClick={() => {


                    }}
                    className={" mt-4 hover:bg-[#d186f3]  h-[44px] w-[80px] bg-[#CB76F2] rounded-[10px] text-white text-[20px] font-semibold"}>Ok
                </button>
            </div>

        </div>
    )
}

export default ImageIsTooBigComponent
