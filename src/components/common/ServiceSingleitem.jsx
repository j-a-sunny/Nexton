import React from 'react'


export const ServiceSingleitem = ({serviceT,serviceI,serviceP}) => {
  return (
    <>
    <div className='flex items-center gap-[10px]'>
        {serviceI}
        <div>
            <h2 className='font-semibold font-poppins text-[18px] text-second'>{serviceT}</h2>
            <p className='font-poppins font-normal text-[14px] text-primary'>{serviceP}</p>
        </div>
    </div>
    
    </>
  )
}
