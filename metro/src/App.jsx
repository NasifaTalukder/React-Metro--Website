import React from 'react';
import './App.css';
import slideBackground from "./assets/slide backgrnd.jpg"
import slideImgOne from "./assets/homeslide_1.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import MenuSec from './components/Homepage/MenuSec';
import MenuBottom from './components/Homepage/MenuBottom';
 import darkLogo from "./assets/logo-dark.png";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LeshangerLight from "./assets/443.png";
import HeadPhone from "./assets/444.png";
import GameController from "./assets/vr.jpg";
import keyBoard from "./assets/Keyboard.jpg"
import bluetothSpeaker from "./assets/bluetooth_speaker-360x432.jpg"
import cardHeadphone from "./assets/p_5-111-360x432.jpg";
import ultraLense from "./assets/l-360x432.jpg"
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

function App() {

  return (
    <>
    <div className='w-full h-[2000px] font-[Josefin Sans, sans-serif] p-0 m-0 bg-white'>
       <div className='w-[1300px] m-auto'>
        <div className='h-48 bg-white'>
          {/* ------menusection------ */}
           {/* <MenuSec/> */}
           <div className='flex flex-wrap justify-between pt-5 overflow-hidden'>
          <div className=''>
             <img src={darkLogo} alt="" className='w-[130px]'/>
           </div>
           <div>
             <div className='ml-[106px]'>
               <ul className='flex flex-wrap space-x-2 text-medium font-medium  mt-3'>
                 <li><a href="#">Home<KeyboardArrowDownIcon fontSize='small'/></a></li>
                 <li><a href="#">Shop<KeyboardArrowDownIcon fontSize='small'/></a></li>
                 <li><a href="#">Card<KeyboardArrowDownIcon fontSize='small'/></a></li>
                 <li><a href="#">Checkout<KeyboardArrowDownIcon fontSize='small'/></a></li>
                 <li><a href="#">Error<KeyboardArrowDownIcon fontSize='small'/></a></li>
                 <li><a href="#">My Account<KeyboardArrowDownIcon fontSize='small'/></a></li>
                 <li><a href="#">Contact</a></li>
               </ul>
             </div>
           </div>             
           <div className='flex flex-wrap space-x-3 mt-2 ml-28'>
             <SearchIcon fontSize='large'/>
             <PersonOutlineIcon fontSize='large'/>
             <FavoriteBorderIcon fontSize='large'/>            
             <ShoppingCartIcon fontSize='large'/>
             <p className='text-lg mt-2'>$0.00</p>
             </div>         
         </div>
           <MenuBottom/>       
       </div>
       </div>
       <div>
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
    </div> 
    <div className='w-[1350px] m-auto' >
      <div className='mt-8'>
        <div className='flex flex-wrap space-x-6'>
        <div className='w-[650px] h-[350px] bg-[#dad3d3f0] rounded-sm'>
        <div className='pt-10 ml-10'>
          <h1 className='text-2xl font-semibold'>LED HANGER LIGHT</h1>
          <p className='text-lg font-medium mt-1'>Trending 2019</p>
          </div>
          <div className='mt-12 overflow-hidden'>
            <img src={LeshangerLight} alt="" className='w-[460px] m-auto transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 duration-300 ...'/>
          </div>       
        </div>

        <div className='w-[650px] h-[350px] bg-[#dad3d3f0] rounded-sm'> 
        <div className='flex flex-wrap'>
        <div className='pt-3 overflow-hidden'>
            <img src={HeadPhone} alt="" className='w-[320px] ml-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'/>
          </div>   
          <div className='pt-56 ml-16'>
          <h1 className='text-2xl font-semibold'>HEADPHONE</h1>
          <p className='text-lg font-medium mt-1'>Collection 2019</p>
          </div> 
          </div>                 
        </div>

        </div>       
      </div>

      <div className='mt-20'>
        <h1 className='text-2xl font-semibold text-center'>Featured Products</h1>
      </div>
      <div className=''>
        <div className='flex flex-wrap'>
          <div className=''>
          <div>
              <p className='pl-2 pr-2 rounded bg-black text-white absolute z-[1000] mt-5 ml-6'>-4%</p>
            </div>
            <div>           
              <img src={GameController} alt="" className='relative'/>
            </div>
            <div className='flex flex-wrap absolute z-[1000] mt-[-100px]'>
              <p className=''><del>$390.00</del></p>
              <h2 className=''>$375.00</h2>
            </div>
            <p className='absolute z-[1000]'>Game Controller</p>
          </div>
          <div className='flex flex-wrap space-x-2 ml-6'>
            <div>
            <div>
              <p className='pl-2 pr-2 rounded bg-black text-white absolute z-[1000] mt-5 ml-6'>-4%</p>
            </div>
            <div>           
              <img src={keyBoard} alt="" className='relative w-80'/>
            </div>
            </div>

            <div>
            <div>
              <p className='pl-2 pr-2 rounded bg-black text-white absolute z-[1000] mt-5 ml-6'>-4%</p>
            </div>
            <div>           
              <img src={bluetothSpeaker} alt="" className='relative  w-80'/>
            </div>
            </div>
          </div>
        
        <div className='flex flex-wrap space-x-2'>
            <div>
            <div>
              <p className='pl-2 pr-2 rounded bg-black text-white absolute z-[1000] mt-5 ml-6'>-4%</p>
            </div>
            <div>           
              <img src={cardHeadphone} alt="" className='relative  w-80'/>
            </div>
            </div>

            <div>
            <div>
              <p className='pl-2 pr-2 rounded bg-black text-white absolute z-[1000] mt-5 ml-6'>-4%</p>
            </div>
            <div>           
              <img src={ultraLense} alt="" className='relative  w-80'/>
            </div>
            </div>
        </div>
          

          


        </div>
      </div>
      </div>  
    </div>


    
    </>

  )
}

export default App
