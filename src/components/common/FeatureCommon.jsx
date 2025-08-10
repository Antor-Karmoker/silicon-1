import React from 'react'

const FeatureCommon = ({feah2 , feap , feaimg}) => {
  return (
    <div className='w-[345px] flex gap-[24px]'>
        <div><img src={feaimg} alt="featureCom-img" /></div>
        <div>
            <h2 className='text-[20px] font-extrabold font-main text-[#131022]'>{feah2}</h2>
            <div className='w-[261px] pt-[12px]'><p className='text-[16px] font-normal font-main text-primary'>{feap}</p></div>
        </div>







    </div>
  )
}

export default FeatureCommon