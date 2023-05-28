import React from 'react'
import bluetothSpeaker from "../../assets/./HomePagePic/bluetooth_speaker-360x432.jpg"

const SpeakerComp = () => {
  return (
    <>
    <div>
            <div>
              <p className='pl-2 pr-2 rounded bg-black text-white absolute z-[1000] mt-5 ml-6'>-4%</p>
            </div>
            <div>           
              <img src={bluetothSpeaker} alt="" className='relative  w-[308px] rounded'/>
            </div>
            <div className='absolute z-[1000] mt-[-60px] ml-6'>
              <h2 className='text-xl font-semibold'>$80.00</h2>
               <p className=' text-slate-400 font-semibold'>Speaker</p>
            </div>
            </div>
    </>
  )
}

export default SpeakerComp
