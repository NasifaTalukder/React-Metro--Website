import React from 'react'
import GraphicsCard from "../../assets/./HomePagePic/card-360x432.jpg"

const GraphicsCardComp = () => {
  return (
    <>
      <div className=''>
          <div>          
              <img src={GraphicsCard} alt="" className='relative  w-[308px] rounded'/>
            </div>
            <div className='absolute z-[1000] mt-[-60px] ml-6'>
              <h2 className='text-lg font-semibold'>$180.00</h2>
               <p className=' text-slate-400 font-semibold'>Graphics Card</p>
            </div>
            </div>
    </>
  )
}

export default GraphicsCardComp
