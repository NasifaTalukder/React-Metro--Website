import React from 'react'

const RegisterSec = () => {
  return (
   <>
   <div>
                   <h1 className='text-3xl font-semibold'>Register</h1>
                   <div className='w-[620px] h-[420px] border-2 border-slate-200 p-5 rounded mt-7'>
                    <div>
                    <p className='text-base font-sans font-semibold text-slate-600'>Username *</p>
                    <input type="text" className='w-full p-3 outline-0 bg-slate-100 mt-3'/>
                    </div>
                    <div className='mt-5'>
                    <p className='text-base font-sans font-semibold text-slate-600'>Email address *</p>
                    <input type="email" className='w-full p-3 outline-0 bg-slate-100 mt-3'/>
                    </div>
                    <div className='mt-5'>
                    <p className='text-base font-sans font-semibold text-slate-600'>Password *</p>
                    <input type="password" className='w-full p-3 outline-0 bg-slate-100 mt-3'/>
                    </div>
                    
                    <div className='mt-6'>
                        <button className='font-sans text-white bg-black pl-12 pr-12 pt-3 pb-3 rounded font-semibold'>REGISTER</button>
                    </div>
                   </div>
                </div>
   </>
  )
}

export default RegisterSec
