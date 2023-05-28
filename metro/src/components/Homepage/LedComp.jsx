import React from 'react'
import LeshangerLight from "../../assets/./HomePagePic/443.png";

const LedComp = () => {
  return (
    <>
    <div className='w-[640px] h-[330px] bg-slate-100 rounded-sm'>
        <div className='pt-10 ml-10'>
          <h1 className='text-2xl font-semibold'>LED HANGER LIGHT</h1>
          <p className='text-lg font-medium mt-1'>Trending 2019</p>
          <span className='w-8 h-[2px] bg-black block mt-2 transition delay-500 hover:w-40 duration-700'></span>
          </div>
          <div className='mt-4 overflow-hidden'>
            <img src={LeshangerLight} alt="" className='w-[460px] m-auto transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 duration-300 ...'/>
          </div>       
        </div>
    </>
  )
}

export default LedComp

