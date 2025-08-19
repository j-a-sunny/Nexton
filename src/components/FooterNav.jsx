import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export const FooterNav = () => {
  return (
    <>
      <section id='footer' className=' md:p-[60px] p-6 border border-[#E5E7EB]'>
        <div className='container row flex md:flex-row md:gap-5 gap-y-[60px] flex-col justify-between py-6 md:text-[16px] text-[14px] text-primary'>


          <div className='flex flex-col md:gap-y-4 gap-y-3'>

            <Link to={'/'}>
              <img src={logo} alt="logo" />
            </Link>

            <Link className='flex items-center gap-[9px]'>
              <FaFacebook className='text-blue-600 text-[20px]' />
              <h2 className='  font-normal font-poppins'>Facebook</h2>
            </Link>

            <Link className='flex items-center gap-[9px]'>
              <IoLogoYoutube className='text-red-500 text-[20px]' />
              <h2 className=' font-normal font-poppins'>Youtube</h2>
            </Link>

            <Link className='flex items-center gap-[9px]'>
              <FaTelegram className='text-[#38B0E3] text-[20px]' />
              <h2 className=' font-normal font-poppins'>Telegram</h2>
            </Link>

            <Link className='flex items-center gap-[9px]'>
              <FaTwitter className='text-[#1D93D2] text-[20px]' />
              <h2 className=' font-normal font-poppins'>Twitter</h2>
            </Link>


          </div>





          <div className='community flex flex-col gap-y-5'>
            <h2 className='text-second font-poppins font-semibold '>Getting started</h2>
            <div className='flex flex-col md:gap-y-4 gap-y-3'>
              <Link className='font-normal font-poppins ' to={'#'}>Release Notes</Link>
              <Link className='font-normal font-poppins ' to={'#'}>Upgrade Guide</Link>
              <Link className='font-normal font-poppins ' to={'#'}>Browser Support</Link>
              <Link className='font-normal font-poppins ' to={'#'}>Dark Mode</Link>
            </div>
          </div>

          <div className='community flex flex-col gap-y-5'>
            <h2 className=' text-second font-poppins font-semibold'>Explore</h2>
            <div className='flex flex-col md:gap-y-4 gap-y-3'>
              <Link className='font-normal font-poppins ' to={'#'}>Prototyping</Link>
              <Link className='font-normal font-poppins ' to={'#'}>Design systems</Link>
              <Link className='font-normal font-poppins ' to={'#'}>Pricing</Link>
              <Link className='font-normal font-poppins ' to={'#'}>Security</Link>
            </div>
          </div>

          <div className='community flex flex-col gap-y-5'>
            <h2 className=' text-second font-poppins font-semibold'>Community</h2>
            <div className='flex flex-col md:gap-y-4 gap-y-3'>
              <Link className='font-normal font-poppins ' to={'#'}>Discussion Forums</Link>
              <Link className='font-normal font-poppins ' to={'#'}>Code of Conduct</Link>
              <Link className='font-normal font-poppins ' to={'#'}>Contributing</Link>
              <Link className='font-normal font-poppins ' to={'#'}>API Reference</Link>
            </div>
          </div>


        </div>
      </section>


    </>
  )
}
