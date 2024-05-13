'use client'
import React,{useEffect, useRef, useState} from 'react'



function MovingText() {
  
  return (
    <>
<div className="realtive w-full overflow-hidden p-0 m-0">
  <div className="inline-block   overflow-x-hidden overflow-y-hidden whitespace-nowrap animate-marquee">
   
    </div>
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