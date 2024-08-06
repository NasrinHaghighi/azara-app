import React from 'react'
import Image from 'next/image'
import IMg from '../../../public/img/facegenerate5.png'



/////
const getData = async ( ) => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/about`
      , { cache: 'no-store' })
  
    if (!res.ok) throw new Error('fffffffffailed')
  
    return res.json()
  }




async function AboutCo() {
    const data = await getData()
    //console.log(data)
return (
<div className='relative   md:px-24 px-0  '>
<div className="grid grid-cols-6 grid-rows-2 gap-4 my-4  mx-auto   ">
<div className='w-[350px] h-[350px] col-span-3 row-span-2 m-auto  '>
<Image src={IMg} alt="Description" className='w-full h-full rounded-lg' objectFit='cover' width={200} height={200} />
</div>
<div className=' col-span-3 row-span-1    '></div>
<div className=' col-span-3 row-span-1   '>
 
<div className=' col-span-1 row-span-2'>
<h1 className='mb-5 md:text-6xl sm:text-4xl text-l'>{data[0].title} </h1>
  
  <h5 className='text-bgGolden md:text-2xl text-md'>{data[0].subTitle}</h5>
  </div>
</div>
</div>
<div className='w-full  bg-bg rounded-md aboslute z-0 -top-5 '>
<div className='bg-input-bg p-8 rounded-lg shadow-md text-2xl text-bgGolden leading-10 shadow-yellow-500/40 border-2 border-yellow-500/40'>
<div className='text-lg text-center ' dangerouslySetInnerHTML={{ __html:data[0].des }} />
       
        </div>
</div>
</div>

)
}

export default AboutCo



// className='absolute top-1/3 right-1/3  md:pt-12 pr-8 '