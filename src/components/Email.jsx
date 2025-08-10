import React from 'react'
import emaillogo from '../assets/images/notification.png'
import { GoMail } from "react-icons/go";

const Email = () => {
  return (
    <>
    
    <section id='Email' className=' pt-[96px]'>
        <div className="container">
            <div id='email-row' className='bg-[#F3F6FF] py-[72px] flex justify-center items-center gap-[78px]'>
{/* ------------------ lift-side */}
                <div className='flex gap-[32px] items-center'>


                <div><img src={emaillogo} alt="notify" /></div>
                <div className='w-[416px]'><h2 className='text-[24px] font-extrabold font-main text-[#131022]'>Subscribe to our newsletter to stay informed about latest updates</h2></div>

                </div>
                <div>
                    <div className='w-[472px] '>
         
                        <input  className='w-[330px] pl-[44px] border border-[#D4D7E5] outline-none text-[16px] font-normal font-main text-[#B4B7C9] py-[13px]' type="text" placeholder=' Your Email' />

                        <button className='w-[142px] rounded-r-[8px] text-[16px] font-semibold font-main text-[#fff] bg-[#6366F1] py-[13px] px-[32px]'>Subscribe</button>
                    </div>
                </div>

            </div>
        </div>
    </section>
    
    </>
  )
}

export default Email