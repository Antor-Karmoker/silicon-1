import React from 'react'

const FeatureCommon = ({feah2 , feap , icon : Icon}) => {




  return (
    <div className='w-[345px] py-[48px] flex justify-center  gap-[24px]'>
        <div className='w-[60px] h-[60px] rounded-[8px] flex justify-center items-center bg-[#6365f129]'>  {Icon && <Icon className='text-red-300' size={24}  />}  </div>
        <div>
            <h2 className='text-[20px] font-extrabold font-main text-[#131022]'>{feah2}</h2>
            <div className='w-[261px] pt-[12px]'><p className='text-[16px] font-normal font-main text-primary'>{feap}</p></div>
        </div>







    </div>
  )
}

export default FeatureCommon