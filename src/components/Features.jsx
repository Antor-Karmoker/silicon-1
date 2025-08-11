import React from 'react'
import featureimg from '../assets/images/featureimage.png'
import CommonHead from './common/CommonHead'
import FeatureCommon from './common/FeatureCommon'
import { FaRegSmileBeam } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { PiRanking } from "react-icons/pi";
import { IoWalletSharp } from "react-icons/io5";

const Features = () => {
  return (
    <>
    
    <section id='feature' >
        <div className="container">
            <div id='feature_row' className='flex justify-between '>
                {/* ------------ images */}
                <div><img src={featureimg} alt="feature-img" /></div>
                {/* -------------- right-side */}
                <div>

                <div><CommonHead comh2={'App Features'} /></div>
                <div className='w-[746px] pt-[24px] pb-[56px]'><p className='text-[18px] font-normal font-main text-[#9397AD]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p></div>

                <div className='flex gap-[56px]'>

{/* ------------------ feature */}
                <div className=''>
                    <FeatureCommon icon={MdOutlinePayment} feah2={'Easy Payments'} feap={'Id mollis consectetur congue egestas egestas suspendisse blandit justo.'} />
                    <FeatureCommon icon={PiRanking}  feah2={'Cost Statistics'} feap={'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.'} />
                    <FeatureCommon icon={IoWalletSharp}  feah2={'Regular Cashback'} feap={'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.'} />
                </div>
                <div>
                    <FeatureCommon icon={''}  feah2={'Data Security'} feap={'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. '} />
                    <FeatureCommon icon={''}  feah2={'Support 24/7'} feap={'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.'} />
                    <FeatureCommon icon={FaRegSmileBeam } feah2={'Top Standards'} feap={'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.'} />
                </div>
                


                </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Features