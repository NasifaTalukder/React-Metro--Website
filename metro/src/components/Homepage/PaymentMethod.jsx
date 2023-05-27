import React from 'react'
import VisaCard from "../../assets/payment1.png"
import MasterCard from "../../assets/payment2.png"
import Discover from "../../assets/payment3.png"
import AmericalExpress from "../../assets/payment4.png"

const PaymentMethod = () => {
  return (
    <>
       <div className='flex flex-wrap ml-[165px] space-x-3 '>
            <div>
              <img src={VisaCard} alt="" className='w-[60px] grayscale hover:grayscale-0 ' />
            </div>
            <div>
              <img src={MasterCard} alt="" className='w-[60px] grayscale hover:grayscale-0 ' />
            </div>
            <div>
              <img src={Discover} alt="" className='w-[60px] grayscale hover:grayscale-0'/>
            </div>
            <div>
              <img src={AmericalExpress} alt="" className='w-[60px] grayscale hover:grayscale-0 mt-1'/>
            </div>
          </div>
    </>
  )
}

export default PaymentMethod
