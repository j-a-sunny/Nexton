import React from 'react'
import { FaCcVisa } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa6";
import { FaCcStripe } from "react-icons/fa6";

export const Credit = () => {
  return (
    <>
      <section id='credit'>
          <div className='container row flex max-md:flex-col justify-between items-center py-6'>

            <h2 className='font-normal md:text-[16px] text-sm font-poppins text-primary'>Nexton eCommerce. © 2024</h2>

            <span className='flex gap-[30px] text-[40px]'>
              <FaCcVisa />
              <FaCcPaypal />
              <FaCcStripe />
            </span>

          </div>
        
      </section>
    </>
  )
}
