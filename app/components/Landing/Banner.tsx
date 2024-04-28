

import React,{useState, useEffect, useRef} from 'react'
import Image from 'next/image'

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Title from './Title';
import BannerPhoto from './BannerPhoto';
gsap.registerPlugin(TextPlugin);





function Banner() {

return (
<div className='grid grid-cols-12 grid-rows-1 gap-4 h-100 w-full h-full'>

<div className="relative col-span-4  text-right min-w-300 bg-gray-100 shadow-md "
style={{ 
  clipPath: 'polygon(16% 0, 100% 0, 83% 100%, 0 100%)'
}}
>
  <BannerPhoto />

   
 <div className='bg-purple absolute top-0 left-0  w-full h-full animate-progress opacity-0 z-1'></div> 
   <div className='bg-orangecolor absolute top-0 left-0  w-full h-full animate-progress2 opacity-0 z-2'></div>   
</div>
<div className="col-span-8 flex justify-start items-end pb-24 h-full">
<Title />
</div>
</div>
)
}

export default Banner

{/* <div className="max-w-screen-xl text-left sm:text-left mx-auto px-6 md:px-12 2xl:px-0 pb-24 sm:pb-0 grid gap10 sm:gap-0 justify-items-center items-center sm:grid-flow-col">
    <div className='order-1 sm:order-2 md:-translate-y-28 wrapper sm:drop-shadow-2xl sm:pb-14'>kk</div>
    <div className='order-2 sm:order-1 relative space-y-4 sm:space-y-8 text-center sm:text-left md:mb-32 z-10'>dd</div>
    </div> */}