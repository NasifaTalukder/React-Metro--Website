import React from 'react'

const PriceSec = () => {
  return (
    <>
    <h1 className='text-xl font-semibold'>Price</h1>
              <div className='mt-5'>
                <span className='w-72 h-2 rounded bg-black block cursor-pointer'></span>
                <div className='flex flex-wrap mt-5 space-x-28'>
                  <p className='font-sans'>Price:$0-$860</p>
                  <button className='font-sans font-semibold pt-[6px] pb-[6px] pl-4 pr-4 bg-black text-white rounded-sm cursor-pointer'>Filter</button>
                </div>
              </div>
    </>
  )
}

export default PriceSec
