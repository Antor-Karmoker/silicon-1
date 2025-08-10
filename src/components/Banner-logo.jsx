import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/logo.png'
import logo1 from '../assets/images/logo2.png'
import logo2 from '../assets/images/logo3.png'
import logo3 from '../assets/images/logo4.png'
import logo4 from '../assets/images/logo5.png'
import logo5 from '../assets/images/logo6.png'

const Bannerlogo = () => {
  return (
    <>
    
    <section id='banner-logo' className='pt-[96px] pb-[112px]'>
        <div className="container">
            <div id='banner-logo_row' className='flex items-center justify-center gap-[24px]'>
                <Link ><img src={logo} alt="banner-img_logo" /></Link>
                <Link ><img src={logo1} alt="banner-img_logo" /></Link>
                <Link ><img src={logo2} alt="banner-img_logo" /></Link>
                <Link ><img src={logo3} alt="banner-img_logo" /></Link>
                <Link ><img src={logo4} alt="banner-img_logo" /></Link>
                <Link ><img src={logo5} alt="banner-img_logo" /></Link>

            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Bannerlogo