import React from 'react'

const ContactFrom = () => {
  return ( 
    <>
      <div>
                <div className='bg-white h-[690px] rounded pl-14 pr-14'>
                    <h1 className='text-3xl font-semibold text-center pt-20'>Send Us a Message</h1>
                    <div className='flex space-x-7 mt-10'>
                        <input type="text" placeholder='Name *' className='pt-[6px] pb-[6px] pl-4 pr-[380px] outline-0 border border-slate-300 rounded font-sans text-slate-700'/>
                        <input type="text" placeholder='Email *' className='pt-[6px] pb-[6px] pl-4 pr-[380px]  outline-0 border border-slate-300 rounded font-sans text-slate-700'/>
                    </div>
                    <div className='flex space-x-7 mt-5'>
                        <input type="text" placeholder='Subject *' className='pt-[6px] pb-[6px] pl-4 pr-[380px] outline-0 border border-slate-300 rounded font-sans text-slate-700'/>
                        <input type="text" placeholder='Phone *' className='pt-[6px] pb-[6px] pl-4 pr-[380px]  outline-0 border border-slate-300 rounded font-sans text-slate-700'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Message *' className='pt-[6px] pb-56 pl-4 pr-[990px]  outline-0 border border-slate-300 rounded font-sans text-slate-700 mt-5' />
                    </div>
                    <div className='mt-10 text-center'>
                        <button type='submit' className='pt-3 pb-3 pl-7 pr-7 text-white bg-black font-sans font-semibold rounded '>Submit</button>
                    </div>
                </div>
                </div>
    </>
  )
}

export default ContactFrom
