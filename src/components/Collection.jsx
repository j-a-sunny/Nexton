import React from 'react'
import { Link } from 'react-router'
import banner2 from '../assets/images/banner2.png'

export const Collection = () => {
  return (
    <>
    <section id='collection_img' style={{background:`url(${banner2})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className='mt-[55px] py-[150px] mb-[52px]'>
        <div className='container'>
            <div className='row'>
                <div className='bannerText'>
                    <h3 className='text[20px] font-medium font-poppins text-primary mb-[14px]'>100% Original Products</h3>
                    <h2 className='text-[37px] font-poppins font-semibold text-second w-[370px] leading-[40px]'>The All New Fashion
                       Collection Items</h2>
                    <h3 className='text[20px] font-medium font-poppins text-primary mt-[24px]'>Starting from: $59.99</h3>
                    <Link className='w-[145px] h-[55px] bg-second rounded-[9999px] flex justify-center items-center text-[#fff] text-[16px] font-poppins font-medium mt-[39px]' to={'#'}>Shop now</Link>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}
