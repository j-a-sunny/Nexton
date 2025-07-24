// src/components/Reco.jsx

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router';
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

const Reco = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/smartphones?limit=8')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">
        <span className="text-gray-800 font-bold">Recommendations.</span>{' '}
        <span className="text-gray-500">Best matching products for you</span>
      </h2>

      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="px-2">
            <div className="bg-white rounded-xl shadow p-4 relative hover:shadow-lg transition h-full">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 w-full object-contain"
              />
              <FiShoppingBag className="absolute top-4 right-4 text-gray-400" />
              <div className="mt-4">
                <h3 className="font-semibold text-sm">{product.title}</h3>
                <p className="text-xs text-gray-500">Smartphones</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-semibold text-black">${product.price}</span>
                  <span className="line-through text-gray-400 text-sm">
                    ${(product.price + 30).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center text-sm text-yellow-500 mt-1">
                  <FaStar />
                  <span className="ml-1">{product.rating}</span>
                  <span className="ml-1 text-gray-500">(98)</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='mt-[50px]'>
         <Link className='m-auto w-[198px] h-[64px] rounded-[9999px] bg-second flex justify-center items-center text-[#fff] text-[16px] font-medium font-poppins mt-[24px]' to={'/shop'}>Show More  </Link>
      </div>
    </div>
  );
};

export default Reco;


