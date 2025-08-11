import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/solid.svg'
import { IoIosArrowDown } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { IoToggleSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
    
    
    
    <nav id='navbar'>
        <div className="container">
            <div id='navbar-row' className='flex justify-between items-center py-[16px]'>
                {/* ---------------- logo */}
            <Link to={'/'} ><img src={logo} alt="nav-logo" /></Link>
            {/* ----------------- nav-items */}
            <div >
           <ul className='flex gap-[24px] items-center'>
            <li><Link to={'/'} className='text-[16px] font-semibold font-main text-[#3E4265]'>Features</Link></li>
            <li><Link to={'/'} className='text-[16px] font-semibold font-main text-[#3E4265]'>Overview</Link></li>
            <li><Link to={'/'} className='text-[16px] font-semibold font-main text-[#3E4265] flex gap-[10px] items-center'>Store <IoIosArrowDown /></Link></li>
            <li><Link to={'/'} className='text-[16px] font-semibold font-main text-[#3E4265]'>Blog</Link></li>
            <li><Link to={'/'} className='text-[16px] font-semibold font-main text-[#3E4265]'>Contact</Link></li>      
            </ul> 
            </div>
            {/* ----------------- toggle btn */}

            <div className='flex gap-[16px] items-center'>
                <h2 className='text-[16px] font-semibold font-main text-primary'>Light</h2>
                <button><IoToggleSharp className='text-[#6366F1] text-[46px]' /></button>
                <h2 className='text-[16px] font-semibold font-main text-primary'>Dark</h2>
            </div>

            {/* -------------- regi button */}
            <Link to={'/'} className='w-[142px] bg-[#6366F1] py-[9px] px-[20px] rounded-[4px] text-[14px] font-semibold font-main hover:bg-[#fff] hover:text-[#6366F1] text-[#fff] flex gap-[10px] items-center'  ><LuUser className='text-[18px]' /> Sign in / up</Link>
            
         </div>
        </div>
    </nav>
    
    
    
    
    </>
  )
}

export default Navbar