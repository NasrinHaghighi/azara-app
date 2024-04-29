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
    
       duration: 2,
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
       duration:2,
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
      x:150,
          
      })
        .to(poetryBtn.current, {
       opacity:1,
       x:0,
       duration:2,
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
      x:-150,
          
      })
        .to(aboutBtn.current, {
       opacity:1,
       x:0,
       duration:2,
    ease:"easeOut"
    });
      
        return () => {
          tl.kill(); 
        };
      }, []); 
  return (
    <div className=' '> 
    <h1 className='xl:text-7xl md:text-5xl text-3xl font-extrabold leading-none tracking-tighter ' ref={titleRef} >     <span> استاد حاج </span>
    <span>    حسن آذریان </span>
 
    </h1>
    <div className='p-5'></div>
    <div className='md:text-4xl text-2xl font-extrabold track-[.2em] block bg-gradient-to-tr from-orange-700 via-orange-300 to-orange-600 bg-clip-text text-transparent opacity-0 ' ref={sunTitleRef}>شاعر و مداح اهل بیت</div>
    
    <div className='flex lg:flex-row  flex-col justify-center items-center my-10 gap-12 '>
        <button className=' bg-text text-white rounded-md mx-8 px-5 py-3 w-36 h-16 hover:shadow-2xl' ref={poetryBtn}>اشعار</button>
        <button className='bg-ligthText text-white rounded-md mx-8 px-5 py-3 w-36 h-16  hover:shadow-2xl ' ref={aboutBtn}>درباره ما</button>
    </div>
    </div>
  )
}

export default Title