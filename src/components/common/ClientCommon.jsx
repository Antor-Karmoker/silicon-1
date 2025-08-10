import React from 'react'
import { FaStar } from "react-icons/fa";
import logo from '../../assets/images/quotes.png'

const ClientCommon = ({clienth2 , clientHeadp ,  clientp , clientimg}) => {
  return (
    <div>

        <div className='w-[306px] h-[350px] relative pt-[64px]'>
            <div className=' absolute top-[40px] left-0'><img src={logo} alt="logo" /></div>
            <div className='w-full h-[258px] shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)] rounded-[8px] px-[24px]'>

                <div className='w-[258px] pt-[48px] pb-[16px]'><p className='text-[16px] font-normal font-main text-primary'>{clientHeadp}</p></div>

                <div className='flex gap-[5px] items-center'>
                    <FaStar className='text-[#FFBA08]' />
                    <FaStar className='text-[#FFBA08]'  />
                    <FaStar className='text-[#FFBA08]' />
                    <FaStar className='text-[#FFBA08]' />
                    <FaStar className='text-[#FFBA08]' />
                </div>

            </div>
            <div className='flex items-center gap-[16px] pt-[27px]'>
                <div><img src={clientimg} alt="img" /></div>
                <div>
                    <h2 className='text-[14px font-bold font-main text-[#131022]] '>{clienth2}</h2>
                    <p className='text-[12px] font-normal font-main text-primary '>{clientp}</p>
                </div>
            </div>
        </div>




    </div>
  )
}

export default ClientCommon