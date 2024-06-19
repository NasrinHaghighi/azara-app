'use client'
import React,{useEffect, useRef, useState} from 'react'



function MovingText() {
  
  return (
    <>
    <div className="relative flex overflow-x-hidden  font-bold bg-gray-300 " dir="rtl">
      <div className='absolute left-0 lg:w-48 md:w-24 w-14 bg-gradient-to-r from-gray-300 to-transparent z-10 h-full'></div>
  <div className="py-12 animate-marquee whitespace-nowrap ">
 
        <span className="mx-4 text-4xl gradiant-text text-transparent animate-gradiant drop-shadow-2xl" >غزل ،</span>
        <span className="mx-4 text-4xl gradiant-text2 text-transparent animate-gradiant2 drop-shadow-2xl">دو بیتی  ،</span>
          <span className="mx-4 text-4xl gradiant-text3 text-transparent animate-gradiant3"> شعر نو ،</span>
        <span className="mx-4 text-4xl gradiant-text text-transparent animate-gradiant"> مثنوی ،</span>
        <span className="mx-4 text-4xl gradiant-text2 text-transparent animate-gradiant2"> رباعی  ، </span>
        <span className="mx-4 text-4xl gradiant-text3 text-transparent animate-gradiant3"> چهار پاره ،  </span>
        <span className="mx-4 text-4xl gradiant-text text-transparent animate-gradiant" >قصیده ،</span>
        <span className="mx-4 text-4xl gradiant-text text-transparent animate-gradiant"> مثنوی ،</span>
        <span className="mx-4 text-4xl gradiant-text3 text-transparent animate-gradiant3"> چهار پاره ،  </span>
        <span className="mx-4 text-4xl gradiant-text2 text-transparent animate-gradiant2"> رباعی  ، </span>
  </div>

  <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
  <span className="mx-4 text-4xl gradiant-text text-transparent animate-gradiant3" >غزل ،</span>
        <span className="mx-4 text-4xl gradiant-text2 text-transparent animate-gradiant2">دو بیتی  ،</span>
          <span className="mx-4 text-4xl gradiant-text3 text-transparent animate-gradiant"> شعر نو ،</span>
        <span className="mx-4 text-4xl gradiant-text text-transparent animate-gradiant3"> مثنوی ،</span>
        <span className="mx-4 text-4xl gradiant-text2 text-transparent animate-gradiant2"> رباعی  ، </span>
        <span className="mx-4 text-4xl gradiant-text3 text-transparent animate-gradiant"> چهار پاره ،  </span>
        <span className="mx-4 text-4xl gradiant-text text-transparent animate-gradiant3" >قصیده ،</span>
        <span className="mx-4 text-4xl gradiant-text text-transparent animate-gradiant"> مثنوی ،</span>
        <span className="mx-4 text-4xl gradiant-text3 text-transparent animate-gradiant3"> چهار پاره ،  </span>
        <span className="mx-4 text-4xl gradiant-text2 text-transparent animate-gradiant2"> رباعی  ، </span>
  </div>
  <div className='absolute rigth-0 lg:w-48 md:w-24 w-14 bg-gradient-to-l from-gray-300 to-transparent z-10 h-full'></div>
</div>
</>
  )  
}

export default MovingText


// const firstText=useRef(null)
// const secondText =useRef(null)

// let xPercent =0
// let direction =-1

// useEffect(() => {
//  requestAnimationFrame(animation)
// },[])
// const animation = () => {
// if(xPercent <= -100){
//   xPercent=0
// }
// if(xPercent > 100){
//   xPercent=-100
  
// }
// gsap.set(firstText.current, { xPercent: xPercent });
// gsap.set(secondText.current, { xPercent: xPercent });
// xPercent += 0.25 * direction;
// requestAnimationFrame(animation)}