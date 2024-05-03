'use client'
import React,{useEffect, useRef, useState} from 'react'



function MovingText() {
  
  return (
    <div className='animate-moveText overflow-hidden'>
   
       
       
       
    </div>
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