import React from 'react'
import logo from '../assets/images/logo.png'
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router';




export const Navbar = () => {
  return (
   <>
   <nav id='mainNav' className='hidden lg:block'>
    <div className='container'>
        <div className='menuRow py-[27px] flex justify-between'>
            <Link to={'/'} className='logo'>
                <img src={logo} alt="logo" />
            </Link>
            <div className='menuSrc w-[400px] h-[52px] bg-[#F8F8F8] rounded-[100px] py-[16px] pl-[24px] flex gap-[10px]'>
               <CiSearch className='text-[20px] text-[#4B5563]' /> 
               <input className='w-full outline-none border-none font-poppins text-[14px] font-normal text-primary' type="text"  placeholder='Search in products...'/>
            </div>
            <div className='menuButtons'>
                <button><FaRegUser className='text-primary text-[24px] mr-[22px]' /></button>
                <button className='relative'><BsCart3  className='text-primary text-[24px]'/>
                <span className='w-[20px] h-[20px] bg-[#0EA5E9] rounded-full flex justify-center items-center text-[12px] text-[#fff] font-poppins font-medium absolute top-[-8px] left-[12px]'>3</span>
                </button>
            </div>
        </div>
    </div>
   </nav>
   </>
  )
}
