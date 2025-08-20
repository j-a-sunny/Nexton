import React from 'react'
import banner from '../assets/images/banner.png'
import { Link } from 'react-router'
import { CiSearch } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // চাইলে true করে দিতে পারো
  };
  return (


    <section id='banner' style={{ background: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className='
    px-6 py-40 md:py-40'>
      <Slider {...settings}>
        <div>
          <div className='container'>
            <div className='row'>
              <div className='bannerText'>
                <h2 className='text-sm md:text-2xl font-medium font-poppins text-primary md:mb-6 mb-2'>Stharting from: $49.99</h2>
                <h1 className='text-3xl md:text-6xl font-semibold text-second font-poppins '>Exclusive collection <br /> for everyone</h1>
                <Link className='w-39 md:w-[198px] h-11 md:h-[64px] rounded-[9999px] bg-second flex justify-center items-center text-[#fff] text-[14px] md:text-[16px] font-medium font-poppins my-10 md:my-6 ' to={'#'}>Explore now <CiSearch className='text-[16px] md:text-xl text-[#F8FAFC] ml-[10px]' /> </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='container'>
            <div className='row'>
              <div className='bannerText'>
                <h2 className='text-[20px] font-medium font-poppins text-primary mb-[24px]'>New Arrival: $59.99</h2>
                <h1 className='text-3xl md:text-6xl font-semibold text-second font-poppins '>Fresh styles <br /> for your comfort</h1>
                <Link className='w-39 md:w-[198px] h-11 md:h-[64px] rounded-[9999px] bg-second flex justify-center items-center text-[#fff] text-[14px] md:text-[16px] font-medium font-poppins my-10 md:my-6' to={'#'}>Explore now <CiSearch className='text-[16px] md:text-xl text-[#F8FAFC] ml-[10px]' /> </Link>
              </div>
            </div>
          </div>

        </div>
      </Slider>
    </section>
  )
}
