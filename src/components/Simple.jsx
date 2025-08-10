import React from 'react'
import CommonHead from './common/CommonHead'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import video from '../assets/images/video.png'

const Simple = () => {
  return (
    <>
    
    <section id='simple'>
        <div className="container">
            <div id='simple-row' className='flex justify-center items-center gap-[134px]' >

                {/* ------------ left-side */}
                <div>
                    <CommonHead comh2={'Simple & Easy to Use'} />
                    <div>



                        <div className='flex gap-[20px]  items-center pt-[32px] '>
                           <IoCheckmarkCircleOutline  className='text-[20px] text-[#585C7B]'/>
                            <p className='text-[16px] font-normal font-main text-primary'>Banking transactions are free for you</p>
                        </div>

                               <div className='flex gap-[20px]  items-center  pt-[15px]'>
                           <IoCheckmarkCircleOutline className='text-[20px] text-[#585C7B]' />
                            <p className='text-[16px] font-normal font-main text-primary'>No monthly cash commission</p>
                        </div>
                               <div className='flex gap-[20px]  items-center  pt-[15px]'>
                           <IoCheckmarkCircleOutline  className='text-[20px] text-[#585C7B]'/>
                            <p className='text-[16px] font-normal font-main text-primary'>Manage payments and transactions online</p>
                        </div>
                               <div className='flex gap-[20px]  items-center  pt-[15px]'>
                            <IoCheckmarkCircleOutline className='text-[20px] text-[#585C7B]' />
                            <p className='text-[16px] font-normal font-main text-primary'>Receive real-time alerts</p>
                        </div>
                               <div className='flex gap-[20px]  items-center pt-[15px] '>
                            <IoCheckmarkCircleOutline className='text-[20px] text-[#585C7B]' />
                            <p className='text-[16px] font-normal font-main text-primary'>Receive payment from international bank details</p>
                        </div>

                        <button className='w-[174px] bg-[#6366F1] rounded-[6px] mt-[40px] py-[11px] px-[28px] text-[14px] font-semibold font-main text-[#fff] flex gap-[20px] items-center'>Learn more <FaArrowRight /></button>
                    </div>
                </div>

                {/* ----------------- right-side */}
                <div>

                    <button><img src={video} alt="video" /></button>

                </div>

            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Simple