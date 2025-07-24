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
    
    
    <section id='banner' style={{background:`url(${banner})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}} className='py-[170px]'>
      <Slider {...settings}>
        <div>
        <div className='container'>
           <div className='row'>
           <div className='bannerText'>
          <h2 className='text-2xl font-medium font-poppins text-primary mb-6'>Starting from: $49.99</h2>
          <h1 className='text-6xl font-semibold text-second font-poppins w-158'>Exclusive collection for everyone</h1>
          <Link className='w-[198px] h-[64px] rounded-[9999px] bg-second flex justify-center items-center text-[#fff] text-[16px] font-medium font-poppins mt-[24px]' to={'#'}>Explore now <CiSearch className='text-[20px] text-[#F8FAFC] ml-[10px]' /> </Link>
          </div>
          </div>
       </div>
        </div>
      
      <div>
        <div className='container'>
          <div className='row'>
          <div className='bannerText'>
          <h2 className='text-[20px] font-medium font-poppins text-primary mb-[24px]'>New Arrival: $59.99</h2>
          <h1 className='text-[64px] font-semibold text-second font-poppins w-[632px]'>Fresh styles for your comfort</h1>
          <Link className='w-[198px] h-[64px] rounded-[9999px] bg-second flex justify-center items-center text-[#fff] text-[16px] font-medium font-poppins mt-[24px]' to={'#'}>Explore now <CiSearch className='text-[20px] text-[#F8FAFC] ml-[10px]' /> </Link>
          </div>
          </div>
        </div>

      </div>
      </Slider>
    </section>
  )
}
