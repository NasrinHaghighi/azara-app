'use client'

import React,{useEffect, useRef} from 'react'
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);




function Title() {
    const titleRef = useRef(null);
const sunTitleRef = useRef(null);
const poetryBtn = useRef(null);
const aboutBtn = useRef(null);


    useEffect(() => {
      const tl = gsap.timeline();
      tl.from(titleRef.current, {
        opacity: 0,
          y: 100,
       
    })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
    
       duration: 1,
        ease: "ease ",
       
        stagger:{
           each:0.1,
           from:"start"
        }
      
      
      });
    
      return () => {
        tl.kill(); 
      };
    }, []); 

    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(sunTitleRef.current, {
          opacity: 0,
          y: 20,
          scale:1.2
      })
        .to(sunTitleRef.current, {
       opacity:1,
       y:0,
       duration:1,
       scale:1


        
        });
      
        return () => {
          tl.kill(); 
        };
      }, []); 



      useEffect(() => {
        const tl = gsap.timeline();
        tl.from(poetryBtn.current, {
          opacity: 0,
      x:50,
          
      })
        .to(poetryBtn.current, {
       opacity:1,
       x:0,
       duration:1,
    ease:"easeOut"
    });
      
        return () => {
          tl.kill(); 
        };
      }, []); 

      useEffect(() => {
        const tl = gsap.timeline();
        tl.from(aboutBtn.current, {
          opacity: 0,
      x:-50,
          
      })
        .to(aboutBtn.current, {
       opacity:1,
       x:0,
       duration:1,
    ease:"easeOut"
    });
      
        return () => {
          tl.kill(); 
        };
      }, []); 
  return (
    <div className=' '> 
    <h1 className='text-[clamp(1rem,8vmin,5rem)] font-extrabold leading-none tracking-tighter ' ref={titleRef} >     <span> استاد حاج </span>
    <span>    حسن آذریان </span>
 
    </h1>
    <div className='p-5'></div>
    <div className='text-4xl font-blod track-[.2em] block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-transparent opacity-0 ' ref={sunTitleRef}>شاعر و مداح اهل بیت</div>
    
    <div className='flex justify-center my-10'>
        <button className=' border-2 border-red-200 rounded-md mx-8 px-5 py-3 w-36 h-16 ' ref={poetryBtn}>اشعار</button>
        <button className='border-2 border-red-200 rounded-md mx-8 px-5 py-3 w-36 h-16 ' ref={aboutBtn}>درباره ما</button>
    </div>
    </div>
  )
}

export default Title