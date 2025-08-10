import React from 'react'
import bannerimg from '../assets/images/bannerimg.png'
import { Link } from 'react-router'
import applogo from '../assets/images/appstore.png'
import playlogo from '../assets/images/googleplay.png'
import { IoIosArrowDown } from "react-icons/io";

const Banner = () => {
  return (
    <>

    <section id='banner' className='pt-[148px] pb-[64px] overflow-hidden'>
        <div className="container">
            <div id='banner-row' className='flex justify-between items-center'>
                {/* --------------- left-side */}
                <div>

                {/* --------------- banner h2 */}
                <div className='w-[526px]'><h2 className='text-[56px] font-extrabold font-main text-[#131022]'>Manage All Your Money in One App</h2></div>
                {/* -------------- banner p */}
                <div className='w-[472px] pt-[24px] pb-[48px]'><p className='text-[18px] font-normal font-main text-[#585C7B]'>We offer you a new generation of the mobile banking.
                Save, spend & manage money in your pocket.</p></div>
               {/* --------------------- logo */}
                <div className='flex items-center gap-[24px]'>

                <Link ><img src={applogo} alt="logo" /></Link>
                <Link ><img src={playlogo} alt="logo" /></Link>
                </div>

                {/* --------------- more btn */}
                <div className='flex gap-[20px] items-center pt-[216px]'>
                <button className='w-[44px] h-[44px] flex justify-center items-center rounded-full hover:bg-[#000] hover:text-[#fff] duration-[.3s] bg-[#fff] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]'><IoIosArrowDown className='' /></button>
                <p className='text-[14px] font-normal font-main text-[#585C7B]'>Discover more</p>
                </div>
                </div>

                {/* ---------------- right-side */}

                <div><img src={bannerimg} alt="bannerimg" /></div>
                

            </div>
        </div>
    </section>
    

    
    
    </>
  )
}

export default Banner