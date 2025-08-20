import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import favicon from '../assets/images/favicon.svg'
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router';

import Cart from './Cart';




export const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const [cart, setCart] = useState(true);
    console.log(showNav);
    return (
        <>
            <nav id='mainNav'>
                <div className='menuRow container md:h-25 h-16 px-4 gap-9 flex justify-between items-center '>
                    <Link to={'/'} className='logo'>
                        <img className='hidden md:block' src={logo} alt="logo" />
                        <img className='md:hidden' src={favicon} alt="logo" />
                    </Link>

                    {/* Searchbar start */}
                    <div className='menuSrc md:w-[400px] w-fit md:h-[52px] h-[36px] bg-[#F8F8F8] rounded-[100px] md:px-6 px-4 md:gap-[10px] gap-[6px] items-center flex'>
                        <CiSearch className='md:text-[20px] text-[14px] text-[#4B5563]' />

                        <input
                            className='w-full outline-none border-none font-poppins md:text-[14px] text-[12px] font-normal text-primary'
                            type="text"
                            placeholder='Search in products...' />

                    </div>
                    {/* Searchbar end */}

                    {/* Menu buttons start */}
                    <div className='menuButtons flex justify-center items-center gap-4 md:gap-6'>
                        {/* user buttton */}
                        <button className='hidden md:block'><FaRegUser className='text-primary text-[24px]' /></button>
                        {/* cart button */}
                        <button className='relative hidden md:block'><BsCart3 className='text-primary text-[24px]' />
                            <span className='w-[20px] h-[20px] bg-[#0EA5E9] rounded-full flex justify-center items-center text-[12px] text-[#fff] font-poppins font-medium absolute top-[-8px] left-[12px]'>3</span>
                        </button>

                        {/* Hamburger menu */}
                        <button onClick={() => setShowNav(!showNav)} className='relative  md:hidden'>
                            <div className='relative w-6 h-9 scale-70 flex flex-col justify-center items-center'>
                                <span className={`h-1 bg-primary absolute rounded-full  duration-400 ease-in-out ${showNav ? 'rotate-45 w-5/4 top-4' : 'w-full top-2'}`}></span>
                                <span className={` h-1 bg-primary absolute rounded-full  duration-400 ease-in-out ${showNav ? 'w-0' : 'w-full'}`}></span>
                                <span className={`h-1 bg-primary absolute rounded-full  duration-400 ease-in-out ${showNav ? '-rotate-45 w-5/4 bottom-4' : 'w-full bottom-2'}`}></span>
                            </div>


                            <span className={`w-[15px] h-[15px] bg-[#0EA5E9] rounded-full flex justify-center items-center text-[12px] text-[#fff] font-poppins font-medium absolute top-1 left-[12px] ${!showNav || 'hidden'}`}>3</span>
                        </button>
                        {/* <Cart /> */}
                        <div className={`container duration-400 ease-in-out p-3 bg-second text-white rounded-2xl absolute z-99 left-1/2 -translate-x-1/2 flex ${showNav ? 'top-16 md:-top-full' : '-top-full'}`}>
                            <ul>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/'}>Shopping</Link></li>
                                <li><Link to={'/'}>About Us</Link></li>
                            </ul>

                        </div>



                    </div>
                </div>
            </nav>
        </>

    )
}
