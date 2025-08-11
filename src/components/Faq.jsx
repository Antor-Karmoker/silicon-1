import React from 'react'
import CommonHead from './common/CommonHead'
import { IoIosArrowDown } from "react-icons/io";

import { IoIosArrowUp } from "react-icons/io";

const Faq = () => {
  return (
    <>
    
    
    <section id='faq'>
        <div className="container">
            <div  id='faq-row' className='flex justify-around '>
             {/* ------------ lift-side */}
             <div>
            <div className='w-[415px]'><CommonHead comh2={'Any questions?Check out the FAQs'} /> </div>

              {/* ---------------- details p */}
                <div className='w-[416px] py-[32px]'><p className='text-[18px] font-main font-normal text-primary'>Still have unanswered questions and need to get in touch?</p></div>

                {/* ----------- button */}
                <button className='bg-[#6366F1] py-[11px] px-[28px] text-[14px] font-semibold font-main text-[#fff] rounded-[6px]'>Contact us now</button>
             </div>

                {/* ----------------- right-side */}
                <div className='w-[746px] h-[616px]  border border-[#E2E5F1] rounded-[8px]'>
                    <div className='px-[24px]'>

                    <div className='flex justify-between items-center border-b border-[#E2E5F1] py-[16px]' >
                        <h2 className='text-[16px] font-main font-semibold text-main'>Is any of my personal information stored in the App?</h2>
                        <button className='w-[36px] h-[36px] rounded-full flex justify-center items-center hover:text-[#fff] hover:bg-[#6366F1]  bg-[#F3F6FF] '><IoIosArrowDown /></button>
                    </div>
                                   <div className='flex justify-between border-b py-[16px] border-[#E2E5F1] items-center'>
                        <h2 className='text-[16px] font-main font-semibold text-main'>Is any of my personal information stored in the App?</h2>
                         <button className='w-[36px] h-[36px] rounded-full flex justify-center items-center hover:text-[#fff] hover:bg-[#6366F1]  bg-[#F3F6FF] '><IoIosArrowDown /></button>
                    </div>
                                   <div className='flex justify-between border-b py-[16px] border-[#E2E5F1] items-center'>
                        <h2 className='text-[16px] font-main font-semibold text-main'>Is any of my personal information stored in the App?</h2>
                         <button className='w-[36px] h-[36px] rounded-full  flex justify-center items-center hover:text-[#fff] hover:bg-[#6366F1] bg-[#F3F6FF] '><IoIosArrowDown /></button>
                    </div>
                                   <div className='flex justify-between border-b py-[16px] border-[#E2E5F1] items-center'>
                        <h2 className='text-[16px] font-main font-semibold text-main'>Is any of my personal information stored in the App?</h2>
                         <button className='w-[36px] h-[36px] rounded-full flex justify-center items-center hover:text-[#fff] hover:bg-[#6366F1]  bg-[#F3F6FF] '><IoIosArrowDown /></button>
                    </div>


                                  <div className='flex  justify-between border-b py-[16px] border-[#E2E5F1] items-center'>
                        <h2 className='text-[16px] font-main font-semibold text-main'>Is any of my personal information stored in the App?</h2>
                         <button className='w-[36px] h-[36px] rounded-full flex justify-center items-center hover:text-[#fff] hover:bg-[#6366F1]  bg-[#F3F6FF] '><IoIosArrowUp /></button>
                    </div>
                         <div className='w-[698px] flex justify-center border-b py-[16px] border-[#E2E5F1] pl-[50px] flex-col  '><p className='text-[14px] font-normal font-main text-primary'>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
</p>
                            <p className='text-[14px] font-normal font-main text-primary'>
Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
</div>

              <div className='flex  justify-between py-[16px]   items-center'>
                        <h2 className='text-[16px] font-main font-semibold text-main'>Is any of my personal information stored in the App?</h2>
                         <button className='w-[36px] h-[36px] rounded-full flex justify-center items-center hover:text-[#fff] hover:bg-[#6366F1]  bg-[#F3F6FF] '><IoIosArrowDown /></button>
                    </div>

                    <div>

                    </div>







                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Faq