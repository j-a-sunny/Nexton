import React from 'react'
import { GiFallingStar } from "react-icons/gi";

export const ProductText = () => {
  return (
    <>
    <section id='productText'>
        <div className='container'>
            <div className='row'>
                <div>
                    <h1 className='text-[36px] text-second font-semibold font-poppins mb-[15px]'>Black Automatic Watch</h1>
                    <p className='w-[735px] mb-[60px] font-poppins font-normal text-primary text-[16px]'>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had
                    previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic
                    wooden canoes in Valley Park, Missouri ceased in 1978.</p>
                    <h2 className='text-[24px] text-second font-semibold font-poppins mb-[5px]'>Fabric + Care</h2>
                    <p className='font-poppins font-normal text-primary text-[16px]'>Material: Soft wool blend</p>
                    <p className='mb-[60px] font-poppins font-normal text-primary text-[16px]'>Color: Various</p>
                    <h2 className='text-[24px] text-second font-semibold font-poppins mb-[5px]'>Sale performance</h2>
                    <p className='font-poppins font-normal text-primary text-[16px]'>Sales: 0</p>
                    <p className='font-poppins font-normal text-primary text-[16px]'>Review Count: -</p>
                    <p className='font-poppins font-normal text-primary text-[16px] mb-[60px]'>Review Average: -</p>
                    <h2 className='text-[24px] text-second font-semibold font-poppins'>Keywords</h2>
                    <div className='flex items-center gap-[9px] mt-[9px]'>
                        <div className='flex items-center justify-center w-[127px] h-[32px] border border-[#E5E7EB] rounded-[9999px] gap-[7px]'>
                            <GiFallingStar className='text-[#4B5563] ' /><h2 className='font-normal font-poppins text-[12px] text-primary'>men's fashion</h2>
                        </div>
                        <div className='flex items-center justify-center w-[127px] h-[32px] border border-[#E5E7EB] rounded-[9999px]'>
                            <GiFallingStar className='text-[#4B5563] ' /><h2 className='font-normal font-poppins text-[12px] text-primary'>winter hat</h2>
                        </div>
                        <div className='flex items-center justify-center w-[157px] h-[32px] border border-[#E5E7EB] rounded-[9999px]'>
                            <GiFallingStar className='text-[#4B5563] ' /><h2 className='font-normal font-poppins text-[12px] text-primary'>colorful accessory</h2>
                        </div>
                        <div className='flex items-center justify-center w-[127px] h-[32px] border border-[#E5E7EB] rounded-[9999px]'>
                            <GiFallingStar className='text-[#4B5563] ' /><h2 className='font-normal font-poppins text-[12px] text-primary'>warm headwear</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
