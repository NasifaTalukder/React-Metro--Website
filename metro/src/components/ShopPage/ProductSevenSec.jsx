import React from 'react'
import ProductSeven from "../../assets/ShopPagePic/part_11-360x432.jpg"

const ProductSevenSec = () => {
  return (
    <>
       <div>
            <div className='overflow-hidden'>           
              <img src={ProductSeven} alt="" className='w-[308px] rounded transition ease-in-out delay-150 hover:-translate-y-16 hover:scale-105 duration-500...'/>
            </div>
            <div className=''>
            <p className=' text-slate-400 mt-3'>Hydrolic Breaking</p>
              <h2 className='text-xl font-semibold font-sans'>$34.00</h2>
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

export default ProductSevenSec
