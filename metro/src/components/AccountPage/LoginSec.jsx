import React from 'react'

const LoginSec = () => {
  return (
    <>
    <div>
                   <h1 className='text-3xl font-semibold'>Login</h1>
                   <div className='w-[620px] h-[420px] border-2 border-slate-200 p-5 rounded mt-7'>
                    <div>
                    <p className='text-base font-sans font-semibold text-slate-600'>Username or email address *</p>
                    <input type="email" className='w-full p-3 outline-0 bg-slate-100 mt-3'/>
                    </div>
                    <div className='mt-5'>
                    <p className='text-base font-sans font-semibold text-slate-600'>Password *</p>
                    <input type="password" className='w-full p-3 outline-0 bg-slate-100 mt-3'/>
                    </div>
                    <div className='mt-5 flex flex-wrap space-x-1'>
                        <input type="checkbox" name="" id="" />
                       <label htmlFor="" className='text-base font-sans font-semibold text-slate-600'>Remember me</label> 
                    </div>
                    <div className='mt-6'>
                        <button className='font-sans text-white bg-black pl-10 pr-10 pt-3 pb-3 rounded font-semibold'>LOG IN</button>
                    </div>
                    <div className='mt-5'>
                        <p className='text-lg font-sans text-slate-600'>Lost your password?</p>
                    </div>
                   </div>
                </div>
    </>
  )
}

export default LoginSec
