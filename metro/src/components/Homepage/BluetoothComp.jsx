import React from 'react'
import Bluetoth from "../../assets/./HomePagePic/electronics_2-360x432.jpg"

const BluetoothComp = () => {
  return (
    <>
      <div className=''>
          <div>          
              <img src={Bluetoth} alt="" className='relative  w-[308px] rounded'/>
            </div>
            <div className='absolute z-[1000] mt-[-60px] ml-6'>
              <h2 className='text-lg font-semibold'>$90.00</h2>
               <p className=' text-slate-400 font-semibold'>Bluetooth</p>
            </div>
            </div>
    </>
  )
}

export default BluetoothComp
