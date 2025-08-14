import React from 'react'
import CommonHead from './common/CommonHead'
import ClientCommon from './common/ClientCommon'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const ClientSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3
  };


  return (
    <>
    
    <section id='Client-Slider' className='py-[112px]'>
            <div id='Client-row'>
                <div className='flex justify-center'><CommonHead comh2={'Clients are Loving Our App'} /></div>
                {/* -------------- slider div */}

 
      
                                     <div className="slider-container">
      <Slider {...settings}>
        <div>
                <ClientCommon clientHeadp={'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.'} clientimg={'#'} clienth2={'Fannie Summers'} clientp={'Designer'} />
          
        </div>
        <div>
                       <ClientCommon clientHeadp={'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.'} clientimg={'#'} clienth2={'Fannie Summers'} clientp={'Designer'} />

        </div>
        <div>
                <ClientCommon clientHeadp={'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.'} clientimg={'#'} clienth2={'Fannie Summers'} clientp={'Designer'} />

        </div>
        <div>
                       <ClientCommon clientHeadp={'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.'} clientimg={'#'} clienth2={'Fannie Summers'} clientp={'Designer'} />

        </div>
               <div>
                       <ClientCommon clientHeadp={'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.'} clientimg={'#'} clienth2={'Fannie Summers'} clientp={'Designer'} />

        </div>

       <div>
                       <ClientCommon clientHeadp={'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.'} clientimg={'#'} clienth2={'Fannie Summers'} clientp={'Designer'} />

        </div>

       <div>
                       <ClientCommon clientHeadp={'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.'} clientimg={'#'} clienth2={'Fannie Summers'} clientp={'Designer'} />

        </div>

       <div>
                       <ClientCommon clientHeadp={'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.'} clientimg={'#'} clienth2={'Fannie Summers'} clientp={'Designer'} />

        </div>


      </Slider>
    </div>


               
            </div>

    </section>
    
    
    </>
  )
}

export default ClientSlider