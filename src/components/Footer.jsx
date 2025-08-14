import React from 'react'
import footerlogo from '../assets/images/solid.svg'
import { Link } from 'react-router'
import applogo from '../assets/images/googleplay.png'
import goologo from '../assets/images/appstore.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    
    
    <footer id='footer' className=''>
        <div className="container">
            <div id='footer-row' className='text-center flex flex-col justify-center'>
                <Link to={'#'} className='pt-[64px] flex justify-center'><img src={footerlogo} alt="footer-logo" /></Link>
                {/* ------------ footer-items */}
            <div className='pt-[48px] pb-[64px] flex justify-center'>
           <ul className='flex gap-[56px] items-center'>
            <li><Link className='text-[16px] font-semibold font-main text-[#3E4265]'>Home</Link></li>
            <li><Link className='text-[16px] font-semibold font-main text-[#3E4265]'>Features</Link></li>
            <li><Link className='text-[16px] font-semibold font-main text-[#3E4265]'>Overview</Link></li>
            <li><Link className='text-[16px] font-semibold font-main text-[#3E4265]'>Blog</Link></li>
            <li><Link className='text-[16px] font-semibold font-main text-[#3E4265]'>Contact</Link></li>      
            <li><Link className='text-[16px] font-semibold font-main text-[#3E4265]'>Account</Link></li>      
            </ul> 
            </div > 
{/* ----------------------- app link */}
            <div className='flex justify-center'>
            <div className='flex gap-[24px] text-center justify-center\'>
            <Link ><img src={goologo} alt="footer-link-logo" /></Link>
            <Link ><img src={applogo} alt="footer-link-logo" /></Link>
            </div>
            </div>
            {/* --------------- footer-icons */}
            <div className=' flex gap-[16px] pt-[56px] pb-[72px] justify-center items-center'>
               
                <div className='w-[44px] h-[44px] bg-[#EFF2FC] rounded-[6px] flex justify-center items-center'> <Link  ><FaFacebookSquare /></Link>  </div>
                <div className='w-[44px] h-[44px] bg-[#EFF2FC] rounded-[6px] flex justify-center items-center'> <Link  ><FaTwitter  /></Link>  </div>
                <div className='w-[44px] h-[44px] bg-[#EFF2FC] rounded-[6px] flex justify-center items-center'> <Link  ><PiInstagramLogoFill /></Link>  </div>
                <div className='w-[44px] h-[44px] bg-[#EFF2FC] rounded-[6px] flex justify-center items-center'> <Link  ><FaYoutube  /></Link>  </div>

            </div>

            </div>
        </div>
    </footer>
    
    
    </>
  )
}

export default Footer