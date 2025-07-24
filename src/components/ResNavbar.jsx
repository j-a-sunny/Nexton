import React from 'react'
import { Link } from 'react-router'
import ResLogo from '../assets/images/favicon.png'
import { CiSearch } from 'react-icons/ci'
import { FaBars } from "react-icons/fa";

export const ResNavbar = () => {
  return (
   <>
   <nav id='resNav' className='lg:hidden px-[24px] py-[20px]'>
    <div className='container'>
        <div className='Resrow flex justify-between items-center'>
            <Link className='Reslogo w-[24px]'><img src={ResLogo} alt="logo" /></Link>
             <div className='resSrc w-[200px] h-[36px] bg-[#F8F8F8] rounded-[100px] py-[10px] pl-[16px] flex gap-[5px]'>
                           <CiSearch className='text-[15px] text-[#4B5563]' /> 
                           <input className='w-full outline-none border-none font-poppins text-[12px] font-normal text-primary' type="text"  placeholder='Search in products...'/>
                        </div>
             <div className='resButtons'>
                            <button><FaBars /></button>
                        </div>
        </div>
    </div>
   </nav>
   
   </>
  )
}
