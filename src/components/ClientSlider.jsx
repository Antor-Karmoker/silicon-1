import React from 'react'
import CommonHead from './common/CommonHead'
import ClientCommon from './common/ClientCommon'

const ClientSlider = () => {
  return (
    <>
    
    <section id='Client-Slider' className='py-[112px]'>
            <div id='Client-row'>
                <div className='flex justify-center'><CommonHead comh2={'Clients are Loving Our App'} /></div>
                {/* -------------- slider div */}
                <div className='flex gap-[24px]'>

                <ClientCommon clientHeadp={'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.'} clientimg={'#'} clienth2={'Fannie Summers'} clientp={'Designer'} />
                <ClientCommon clientHeadp={'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.'} clientimg={'#'} clienth2={'Fannie Summers'} clientp={'Designer'} />
                <ClientCommon clientHeadp={'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.'} clientimg={'#'} clienth2={'Fannie Summers'} clientp={'Designer'} />
                <ClientCommon clientHeadp={'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.'} clientimg={'#'} clienth2={'Fannie Summers'} clientp={'Designer'} />
                <ClientCommon clientHeadp={'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.'} clientimg={'#'} clienth2={'Fannie Summers'} clientp={'Designer'} />
                <ClientCommon clientHeadp={'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.'} clientimg={'#'} clienth2={'Fannie Summers'} clientp={'Designer'} />

                </div>
            </div>

    </section>
    
    
    </>
  )
}

export default ClientSlider