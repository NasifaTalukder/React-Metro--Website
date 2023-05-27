import React from 'react'
import Watch from "../../assets/p_4-1-360x432.jpg"

const WatchComp = () => {
  return (
    <>
      <div className=''>
          <div>          
              <img src={Watch} alt="" className='relative  w-[308px] rounded'/>
            </div>
            <div className='absolute z-[1000] mt-[-60px] ml-6'>
              <h2 className='text-lg font-semibold'>$160.00</h2>
               <p className=' text-slate-400 font-semibold'>Hobbyist Watch</p>
            </div>
            </div>
    </>
  )
}

export default WatchComp
