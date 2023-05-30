import React from 'react'
import slideBackground from "../../assets/./HomePagePic/slide backgrnd.jpg"
import slideImgOne from "../../assets/./HomePagePic/homeslide_1.png"

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };

const HeroSec = () => {
  return (
    <>
      <div>
    <img src={slideBackground} alt="" className='relative w-full h-[585px] bg-cover bg-fixed'/>
    
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
