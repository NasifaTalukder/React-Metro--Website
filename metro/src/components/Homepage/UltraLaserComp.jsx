import React from 'react'
import ultraLense from "../../assets/l-360x432.jpg"

const UltraLaserComp = () => {
  return (
    <>
      <div>
            <div>
              <p className='pl-2 pr-2 rounded bg-black text-white absolute z-[1000] mt-5 ml-6'>-4%</p>
            </div>
            <div>           
              <img src={ultraLense} alt="" className='relative  w-[308px] rounded'/>
            </div>
            <div className='absolute z-[1000] mt-[-60px] ml-6'>
              <h2 className='text-xl font-semibold'>$630.00</h2>
            <p className=' text-slate-400 font-semibold'>Ultra Lense</p>
          </div>
            </div>
    </>
  )
}

export default UltraLaserComp
