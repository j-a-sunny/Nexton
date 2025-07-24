import React from 'react'
import { ServiceSingleitem } from './common/ServiceSingleitem'
import { CiDeliveryTruck } from "react-icons/ci";
import { TbExchange } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";




const Delivery = () => {
  return (
    <>
    <section id='delivery' className='pt-[52px]'>
        <div className='container'>
            <div className='row border py-[24px] px-[40px] rounded-[16px] border-[#E5E7EB] flex justify-between'>
                <ServiceSingleitem serviceT={'Free shipping'} serviceP={'On orders over $50.00'} serviceI={<CiDeliveryTruck className='text-[24px] text-second' />}/>
                <span className='flex h-[50px] w-[1px] border border-[#E5E7EB]'></span>
                <ServiceSingleitem serviceT={'Very easy to return'} serviceP={'Just phone number'} serviceI={<TbExchange className='text-[24px] text-second' />}/>
                <span className='flex h-[50px] w-[1px] border border-[#E5E7EB]'></span>
                <ServiceSingleitem serviceT={'Worldwide delivery'} serviceP={'Fast delivery worldwide'} serviceI={<TbWorld  className='text-[24px] text-second'/>}/>
                <span className='flex h-[50px] w-[1px] border border-[#E5E7EB]'></span>
                <ServiceSingleitem serviceT={'Refunds policy'} serviceP={'60 days return for any reason'} serviceI={<RiRefund2Fill className='text-[24px] text-second' />}/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Delivery