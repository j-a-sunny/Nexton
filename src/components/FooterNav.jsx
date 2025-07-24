import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/logo.png'
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export const FooterNav = () => {
  return (
    <>
    <section id='footer' className='py-[60px] border border-[#E5E7EB] mb-[30px]'>
      <div className='container'>
        <div className='row flex justify-between'>
          <div className='logo'>
            <Link to={'/'}>
            <img src={logo} alt="logo" />
            </Link>
            <div className='fb  mt-[20px] mb-[13px] '>
              <Link className='flex items-center gap-[9px]'><FaFacebook className='text-blue-600 text-[20px]'/><h2 className='text-[16px] text-primary font-normal font-poppins'>facebook</h2></Link>
              
            </div>
            <div className='youtube flex items-center gap-[9px]  mb-[13px]'>
              <Link className='flex items-center gap-[9px]'><IoLogoYoutube className='text-red-500 text-[20px]'/><h2 className='text-[16px] text-primary font-normal font-poppins'>youtube</h2></Link>
            </div>
            <div className='telegram flex items-center gap-[9px]  mb-[13px]'>
              <Link className='flex items-center gap-[9px]'><FaTelegram className='text-[#38B0E3] text-[20px]'/><h2 className='text-[16px] text-primary font-normal font-poppins'>telegram</h2></Link>
            </div>
            <div className='twitter flex items-center gap-[9px]  mb-[13px]'>
              <Link className='flex items-center gap-[9px]'><FaTwitter className='text-[#1D93D2] text-[20px]'/><h2 className='text-[16px] text-primary font-normal font-poppins'>twitter</h2></Link>
            </div>
          </div>
          <div className='start flex flex-col'>
            <h2 className='text-[16px] text-second font-poppins font-semibold mb-[20px]'>Getting started</h2>
            <Link className='font-normal font-poppins text-primary text-[16px] mb-[16px]' to={'#'}>Release Notes</Link>
            <Link className='font-normal font-poppins text-primary text-[16px] mb-[16px]' to={'#'}>Upgrade Guide</Link>
            <Link className='font-normal font-poppins text-primary text-[16px] mb-[16px]' to={'#'}>Browser Support</Link>
            <Link className='font-normal font-poppins text-primary text-[16px]' to={'#'}>Dark Mode</Link>
          </div>
          <div className='explore flex flex-col'>
            <h2 className='text-[16px] text-second font-poppins font-semibold mb-[20px]'>Explore</h2>
            <Link className='font-normal font-poppins text-primary text-[16px] mb-[16px]' to={'#'}>Prototyping</Link>
            <Link className='font-normal font-poppins text-primary text-[16px] mb-[16px]' to={'#'}>Design systems</Link>
            <Link className='font-normal font-poppins text-primary text-[16px] mb-[16px]' to={'#'}>Pricing</Link>
            <Link className='font-normal font-poppins text-primary text-[16px]' to={'#'}>Security</Link>
          </div>
           <div className='community flex flex-col'>
            <h2 className='text-[16px] text-second font-poppins font-semibold mb-[20px]'>Community</h2>
            <Link className='font-normal font-poppins text-primary text-[16px] mb-[16px]' to={'#'}>Discussion Forums</Link>
            <Link className='font-normal font-poppins text-primary text-[16px] mb-[16px]' to={'#'}>Code of Conduct</Link>
            <Link className='font-normal font-poppins text-primary text-[16px] mb-[16px]' to={'#'}>Contributing</Link>
            <Link className='font-normal font-poppins text-primary text-[16px]' to={'#'}>API Reference</Link>
          </div>
        </div>
      </div>
    </section>


    </>
  )
}
