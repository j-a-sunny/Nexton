import React, { useState } from 'react'
import product1 from '../assets/images/product- 1.png'
import product2 from '../assets/images/product-2 .png'
import product3 from '../assets/images/product-3 .png'
import product4 from '../assets/images/product-4.png'
import product from '../assets/images/image-showing.png'
import { FaStar } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";


export const ProductImg = () => {
    const [selectedSize, setSelectedSize] = useState("S");
    const [value , setvalue] = useState(1);
    const rmvBtn =()=>{
        if(value > 1){
            setvalue (value-1)
        }
    }

    const addBtn = ()=>{
        setvalue (value+1)
    }
  return (
    <>
    <section id='productImg'>
        <div className='container'>
            <div className='row flex justify-between'>
                <div className='productImgCol'>
                    <img className='mb-[15px]' src={product1} alt="" />
                    <img className='mb-[15px]' src={product2} alt="" />
                    <img className='mb-[15px]' src={product3} alt="" />
                    <img src={product4} alt="" />
                </div>
                <div className='product'>
                    <img src={product} alt="" />
                </div>
                <div className='productCart pt-[33px] pb-[10px] border border-[#E5E7EB] w-[460px] px-[33px] rounded-[17px]'>
                    <div className='flex items-center gap-[11px] justify-between'> <div className='flex items-center gap-[7px]'><FaStar className='text-[#FBBF24] text-[17px]' /><h2 className='font-poppins text-primary text-[16px] font-semibold'>4.9 .</h2> <h3 className='underline-offset-2font-poppins text-primary text-[16px] font-medium'>142 reviews</h3></div>
                    <div className='text-end'>
                    <h2 className='font-semibold text-[24px] text-second font-poppins'>$169.99</h2>
                    <h2 className='font-medium font-poppins text-primary text-[14px] line-through'>$199.99</h2>
                    </div>
                    </div>

                <div className="space-y-3 mt-[33px] mb-[33px]">
  <p className="font-semibold text-gray-900">
    Size: {selectedSize}
  </p>
  <div className="flex gap-3">
    {["S", "M", "L", "XL", "2XL"].map((size) => (
      <button
        key={size}
        onClick={() => setSelectedSize(size)}
        className={`w-14 h-10 rounded-lg border text-sm font-medium transition-all duration-150
          ${
            selectedSize === size
              ? "bg-sky-500 text-white border-sky-500"
              : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
          }
        `}
      >
        {size}
      </button>
    ))}
  </div>
                </div>

                <div className='flex justify-between'>
                    <div className='w-[110px] h-[40px] bg-[#F8F8F8] rounded-[9999px] flex items-center justify-around'>
                        <button onClick={rmvBtn} className='w-[24px] h-[24px] border border-[#E5E7EB] bg-[#fff] rounded-[9999px] flex justify-center items-center text-[21px]'>-</button>
                        <h2>{value}</h2>
                        <button onClick={addBtn} className='w-[24px] h-[24px] border border-[#E5E7EB] bg-[#fff] rounded-[9999px] flex justify-center items-center text-[21px]'>+</button>
                    </div>
                    <div className='w-[178px] h-[52px] bg-second flex justify-center items-center rounded-[9999px] text-[#fff]'>
                        <button className='flex items-center'><LuShoppingBag className='mr-[9px]' />Add to cart</button>
                    </div>
                </div>
                <div className='mt-[33px]'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-[16px] font-poppins font-normal text-primary'>$169.99 x 1</h2>
                        <h2 className='text-[16px] font-poppins font-normal text-primary'>$169.99</h2>
                    </div>
                    <div className='flex justify-between items-center mt-[11px]'>
                        <h2 className='text-[16px] font-poppins font-normal text-primary'>Tax estimate</h2>
                        <h2 className='text-[16px] font-poppins font-normal text-primary'>$0</h2>
                    </div>
                    <span className='w-full border border-[#E5E7EB] inline-block my-[17px]'></span>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-poppins text-[16px] text-second font-semibold'>Total</h2>
                        <h2 className='font-poppins text-[16px] text-second font-semibold'>$169.99</h2>
                    </div>

                </div>


                </div>
            </div>
            <span className='inline-block w-[804px] border border-[#E5E7EB] my-[53px]'></span>
        </div>
    </section>
    

    </>
  )
}
