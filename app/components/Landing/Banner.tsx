

import React,{useState, useEffect, useRef} from 'react'
import Image from 'next/image'

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Title from './Title';
import BannerPhoto from './BannerPhoto';
import Photo from '../../../public/img/baba1.png'






function Banner() {

return (
<div className='grid grid-cols-11 place-center  lg:grid-cols-12 lg:grid-rows-1 gap-0 lg:gap-4  h-100 w-full h-full lg:mb-14 mb-64 lg:mr-24 mr-0  
'>

 <div className="lg:block hidden relative col-span-4  text-right min-w-300 bg-gray-100 shadow-md "
style={{
 clipPath: 'polygon(16% 0, 100% 0, 83% 100%, 0 100%)'
}}
>
<BannerPhoto />


<div className='bg-purple absolute top-0 left-0  w-full h-full animate-progress opacity-0 z-1'></div>
<div className='bg-orangecolor absolute top-0 left-0  w-full h-full animate-progress2 opacity-0 z-2'></div>
</div> 
{/* RESPONSIV */}
 <div className=' lg:hidden col-span-12 h-96  w-[350px] lg:w-[550px] flex justify-center items-center  m-auto' style={{
backgroundImage: `url(${Photo.src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
}}>
</div>  

<div className="lg:col-span-8 col-span-12 flex lg:justify-start  items-center mt-24 h-full lg:-mr-8 m-auto">
<Title />
</div>
</div>
)
}








export default Banner

{/* <div className=' lg:hidden  my-24 flex justify-center items-center  '>
   <Image src={Photo.src}  objectFit="cover" alt='img' layout='fill'/> 
</div> */}