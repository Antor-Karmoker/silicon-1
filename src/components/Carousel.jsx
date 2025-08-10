import React from 'react'
import carouselimg from '../assets/images/carousel.png'

const Carousel = () => {
  return (
    <>
    
    <section id='carousel' className='my-[112px] pt-[80px] pb-[96px] bg-[#F3F6FF]'>
        <div className="container">
            <div className="carousel-row">
                <div><img src={carouselimg} alt="carousel-img" /></div>

                <div className='pt-[40px]'>
                    <div className='flex justify-center'>
                    <h2 className='text-[24px] font-extrabold font-main text-[#131022]'>Step 2. Latest transaction history</h2>
                </div>


                    <div className='flex justify-center pt-[12px]'>

                    <div className='w-[636px] text-center '><p className='text-[16px] font-normal font-main text-primary'>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p></div>

                    </div>

                    </div>
            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Carousel