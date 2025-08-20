import { TbTruckDelivery } from "react-icons/tb"; 
import React from 'react'
import { ServiceSingleitem } from './common/ServiceSingleitem'
import { CiDeliveryTruck } from "react-icons/ci";
import { TbExchange } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";




const Service = () => {
  return (

<section id="service" className="pt-10 container">
  <div className="mx-6">
    <h2 className='sm:hidden font-poppins  py-3 font-semibold text-[16px]'>Nexton® always with you</h2>
    <div className="grid xs:grid-cols-2 lg:grid-cols-4 sm:border rounded-2xl border-[#E5E7EB]">
      <div className="sm:border-r border-[#E5E7EB]">
        <ServiceSingleitem
          serviceT="Free shipping"
          serviceP="On orders over $50.00"
          serviceI={<TbTruckDelivery className="text-[24px] text-second" />}
        />
      </div>

      <div className=" border-[#E5E7EB] lg:border-r">
        <ServiceSingleitem
          serviceT="Very easy to return"
          serviceP="Just phone number"
          serviceI={<TbExchange className="text-[24px] text-second" />}
        />
      </div>

      <div className="sm:border-t lg:border-t-0 sm:border-r border-[#E5E7EB]">
        <ServiceSingleitem
          serviceT="Worldwide delivery"
          serviceP="Fast delivery worldwide"
          serviceI={<TbWorld className="text-[24px] font-thin text-second" />}
        />
      </div>

      <div className="sm:border-t border-[#E5E7EB] lg:border-l lg:border-t-0">
        <ServiceSingleitem
          serviceT="Refunds policy"
          serviceP="60 days return for any reason"
          serviceI={<RiRefund2Fill className="text-[24px] text-second" />}
        />
      </div>
    </div>
  </div>
</section>



  )
}

export default Service