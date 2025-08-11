import React from 'react'
import emaillogo from '../assets/images/notification.png'
import { GoMail } from "react-icons/go";
import { CiMail } from 'react-icons/ci';


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

{/* ------------------ right-side */}

               {/* -------------- email part */}
               <div className='flex justify-center'>
                <div className='w-[500px] bg-[#fff] rounded-[8px] mt-[40px] mb-[16px] flex justify-between items-center'>
                  <div className=' w-[60%]  flex items-center pl-[16px]'>
                    <CiMail />

                <input className='pl-[8px] text-[16px] outline-none font-normal font-main text-[#B4B7C9] ' type="text" placeholder='Your Email' />
                  </div>
                <button className='w-[142px] py-[13px] px-[32px] bg-[#6366F1] rounded-r-[8px] text-[16px] font-semibold font-main text-[#fff]'>Subscribe</button>
                </div>
               </div>

            </div>
        </div>
    </section>
    
    </>
  )
}

export default Email