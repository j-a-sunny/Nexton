import React from 'react'

export const Shop = () => {
  return (
    <>
    <section id='shop' className='pt-[40px]'>
        <div className='container'>
            <div className='row'>
                <div className='category'>
                    <h2 className='text-[18px] font-poppins font-semibold text-second mb-[8px]'>Categories</h2>
                    <div>
                    <input className='w-[20px] mr-[9px] mb-[11px]' type="checkbox" />
                    <label  className='text-[14px] font-poppins font-normal text-primary '>Men’s fashion</label>
                    <br />
                   <input className='w-[20px] mr-[9px] mb-[11px]' type="checkbox" />
                    <label  className='text-[14px] font-poppins font-normal text-primary '>Women’s fashion</label>
                    <br />
                    <input className='w-[20px] mr-[9px] mb-[11px]' type="checkbox" />
                    <label  className='text-[14px] font-poppins font-normal text-primary '>Kids & Toys</label>
                    <br />
                    <input className='w-[20px] mr-[9px] mb-[11px]' type="checkbox" />
                    <label  className='text-[14px] font-poppins font-normal text-primary '>Accessories</label>
                    <br />
                    <input className='w-[20px] mr-[9px] mb-[11px]' type="checkbox" />
                    <label  className='text-[14px] font-poppins font-normal text-primary '>Cosmetics</label>
                    <br />
                    <input className='w-[20px] mr-[9px] mb-[11px]' type="checkbox" />
                    <label  className='text-[14px] font-poppins font-normal text-primary '>Shoes</label>
                    <br />
                    <input className='w-[20px] mr-[9px] mb-[11px]' type="checkbox" />
                    <label  className='text-[14px] font-poppins font-normal text-primary '>Sports</label>
                    <span className='flex border border-[#E5E7EB] w-[285px] mt-[40px] mb-[32px]'></span>
                    </div>
                    <div>
                        <h2 className='text-[18px] text-primary font-poppins font-semibold'>Price range</h2>
                        <input type="range" className='w-[285px] mt-[24px] mb-[20px]' />
                    </div>
                    <div>
                        <div className='flex gap-[25px]'>
                        <div>
                            <p className='font-normal text-primary text-[14px] font-poppins mb-[4px]'>Price range</p>
                        <div className='w-[130px] h-[36px] border border-[#E5E7EB] rounded-[9999px] flex justify-between items-center px-[20px]'>
                            <p className='font-poppins font-medium text-primary text-[14px]'>100</p>
                            <p className='font-poppins font-medium text-primary text-[14px]'>$</p>
                        </div>
                        </div>
                        <div>
                            <p className='font-normal text-primary text-[14px] font-poppins mb-[4px]'>Max price</p>
                         <div className='w-[130px] h-[36px] border border-[#E5E7EB] rounded-[9999px] flex justify-between items-center px-[20px]'>
                            <p className='font-poppins font-medium text-primary text-[14px]'>500</p>
                            <p className='font-poppins font-medium text-primary text-[14px]'>$</p>
                        </div>
                        </div>
                        </div>
                        <span className='flex border border-[#E5E7EB] w-[285px] mt-[40px] mb-[32px]'></span>
                    </div>
                    <div>
                        <h2 className='text-[18px] font-poppins font-semibold text-second mb-[8px]'>Sort order</h2>
                        <input className='w-[20px] mr-[9px] mb-[11px]' type="radio" />
                    <label  className='text-[14px] font-poppins font-normal text-primary '>Most Popular</label>
                    <br />
                    <input className='w-[20px] mr-[9px] mb-[11px]' type="radio" />
                    <label  className='text-[14px] font-poppins font-normal text-primary '>Best Rating</label>
                    <br />
                    <input className='w-[20px] mr-[9px] mb-[11px]' type="radio" />
                    <label  className='text-[14px] font-poppins font-normal text-primary '>Newest</label>
                    <br />
                    <input className='w-[20px] mr-[9px] mb-[11px]' type="radio" />
                    <label  className='text-[14px] font-poppins font-normal text-primary '>Shoes</label>
                    <br />
                    <input className='w-[20px] mr-[9px] mb-[11px]' type="radio" />
                    <label  className='text-[14px] font-poppins font-normal text-primary '>Shoes</label>
                    <br />
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    </>
  )
}
