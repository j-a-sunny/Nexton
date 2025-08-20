import React from 'react'


export const ServiceSingleitem = ({ serviceT, serviceI, serviceP }) => {
  return (
    <div id='single' className='lg:flex max-sm:py-3 sm:p-6 lg:justify-around'>
      <div className='flex items-center px-1 gap-[10px]'>
        <div className='text-2xl text-second'>
          {serviceI}
        </div>
        <div>
          <h2 className='max:sm:regular sm:font-semibold font-poppins sm:text-[18px] text-second'>{serviceT}</h2>
          <p className='font-poppins max-sm:hidden font-normal text-[14px] text-primary'>{serviceP}</p>
        </div>
      </div>
    </div>


  )
}
