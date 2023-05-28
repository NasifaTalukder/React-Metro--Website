import React from 'react'
import Producttre from "../../assets/ShopPagePic/img_10-360x432.jpg"

const ProductTreSec = () => {
  return (
   <>
   
   <div>
            <div>
              <p className='pl-2 pr-2 rounded bg-black text-white absolute z-[1000] mt-5 ml-6 font-sans'>-11%</p>
            </div>
            <div className='overflow-hidden'>           
              <img src={Producttre} alt="" className=' w-[308px] rounded transition ease-in-out delay-150 hover:-translate-y-16 hover:scale-105 duration-500...'/>
            </div>
            <div className=''>
            <p className=' text-slate-400 mt-3'>Hair Growth Serum</p>
            <div className='flex flex-wrap space-x-3 '>
              <p className=' text-slate-400 font-sans'><del>$999.00</del></p>
              <h2 className='text-xl font-semibold font-sans'>888.00</h2>
            </div> 
            </div>          
            {/* <div className='space-x-1 mt-3'>
                <button className='p-3 bg-black text-white rounded'><FavoriteBorderIcon/></button>
                <button className='pl-16 pr-16 pt-4 pb-4 bg-black text-white rounded text-xs font-bold font-sans'>ADD TO CART</button>
                <button className='p-3 bg-black text-white rounded'><SearchIcon/></button>                               
            </div>         */}
          </div>
   </>
  )
}

export default ProductTreSec
