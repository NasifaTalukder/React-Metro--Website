import React from 'react'
import HeadPhone from "../../assets/./HomePagePic/444.png";

const headPhone = () => {
  return (
    <>
    <div className='w-[640px] h-[330px] bg-slate-100 rounded-sm'> 
        <div className='flex flex-wrap space-x-20'>
        <div className='pt-3 overflow-hidden'>
            <img src={HeadPhone} alt="" className='w-[300px] ml-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'/>
          </div>   
          <div className='pt-56'>
          <h1 className='text-2xl font-semibold'>HEADPHONE</h1>
          <p className='text-lg font-medium mt-1'>Collection 2019</p>
          <span className='w-8 h-[2px] bg-black block mt-2 transition delay-500 hover:w-40 duration-700'></span>
          </div> 
          </div>                 
        </div>
    </>
  )
}

export default headPhone
