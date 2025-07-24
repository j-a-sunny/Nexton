import React from 'react'
import { FaCcVisa } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa6";
import { FaCcStripe } from "react-icons/fa6";

export const Credit = () => {
  return (
    <>
    <section id='credit'>
        <div className='container'>
            <div className='row flex justify-between items-center'>
                <div><h2 className='font-normal text-[16px] font-poppins text-primary'>Nexton eCommerce. © 2024</h2></div>
                <div className='flex gap-[30px] text-[57px]'>
                    <FaCcVisa />
                    <FaCcPaypal />
                    <FaCcStripe />


                </div>
            </div>
        </div>
    </section>
    </>
  )
}
