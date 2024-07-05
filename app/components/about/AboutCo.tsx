import React from 'react'
import Image from 'next/image'

import RenderDangerous from '../Poem/RenderDangerous'


/////
const getData = async ( ) => {
    const res = await fetch(`http://localhost:3000/api/about`
      , { cache: 'no-store' })
  
    if (!res.ok) throw new Error('fffffffffailed')
  
    return res.json()
  }




async function AboutCo() {
    const data = await getData()
    //console.log(data)
return (
<div className='relative  my-24 md:px-24 sm:px-12'>
<div className="grid grid-cols-2 grid-rows-1 gap-4 my-8 bg-input-bg rounded-lg shadow-lg mx-auto relative overflow-hidden  shadow-yellow-500/40 ">
<div className=''>
<Image src={data[0].img} alt="Description" className='w-full h-full ' objectFit='cover' width={200} height={200} />
</div>
<div>
{/* Other content */}
</div>
<div className='absolute top-1/3 right-2/4 md:text-5xl text-l md:pt-12 '>
<h1 className='mb-5'>{data[0].title} </h1>
<h5 className='text-orangecolor'>{data[0].subTitle}</h5>
</div>
</div>
<div className='w-full  bg-bg rounded-md aboslute z-0 -top-5 '>
<div className='bg-input-bg p-8 rounded-lg shadow-md text-2xl text-bgGolden leading-10 shadow-yellow-500/40'>
<div className=' ' dangerouslySetInnerHTML={{ __html:data[0].des }} />
       
        </div>
</div>
</div>

)
}

export default AboutCo