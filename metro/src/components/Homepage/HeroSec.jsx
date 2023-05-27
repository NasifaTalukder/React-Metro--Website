import React from 'react'
import slideBackground from "../../assets/slide backgrnd.jpg"
import slideImgOne from "../../assets/homeslide_1.png"

const HeroSec = () => {
  return (
    <>
      <div>
    <img src={slideBackground} alt="" className='relative'/>
    
      <div className='w-[1300px] m-auto'>  
       
       <div className='flex flex-wrap space-x-44 absolute top-60'>
        <div className='mt-10'>
          <h2 className='text-2xl font-normal'>SOUNDBOX</h2>
          <h1 className='text-6xl font-bold mt-4'>Bluetooth Speaker</h1>
          <p className='mt-6 text-lg w-[430px]'>New Modern Stylist Fashionable Men's Wearholder
              bag maxcan weather holder.</p>
            <h2 className='text-lg mt-6 font-medium'>EXPLORE NOW</h2>

        </div>
        <div>
            <img src={slideImgOne} alt="" className='w-[400px]'/>
        </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default HeroSec
