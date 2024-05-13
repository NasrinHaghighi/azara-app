'use client'
import React,{useRef ,useEffect,useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const arr =[0,1,2,3,4,5]
function Friends() {


 const settings = {
  centerMode:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
   
  ]
};

  return (
    <div className='mx-12 my-12 relative '>
    <Slider  {...settings}>
       {arr.map((item, index) => (
          <div key={item}  >
            <h3>Slide {item} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat deserunt earum sint qui cupiditate aut ullam maxime ipsam praesentium, ducimus adipisci illum? Quidem sit odio dolorum ut sint officia temporibus dolore. Perspiciatis ad sit aliquid impedit eligendi voluptas ipsum consequatur accusamus enim, explicabo totam praesentium harum illo alias, debitis laudantium nihil nam nesciunt. Doloribus cumque error minima magni molestias accusantium reprehenderit, eius accusamus obcaecati unde officia provident in repellendus fuga impedit at ipsum placeat .</h3>
          </div>
        ))}
      </Slider>

 
  </div>
  )
}

export default Friends



{/* <section className='outer overflow-hidden'>
<div ref={triggerRef}>
<div className='inner h-screen w-screen flex flex-row gap-10 justify-center relative  bg-yellow-300 ' ref={sectionRef}>
     <div className='h-full w-2/3 flex justify-center items-center bg-red absolute'><h3>section1</h3></div>
     <div className='h-full w-2/3 flex justify-center items-center absolute bg-blue-200'><h3>section2</h3></div>
     <div className='h-full w-2/3  flex justify-center items-center absolute bg-blue-500'><h3>section3</h3></div>
     <div className='h-full w-2/3 flex justify-center items-center absolute bg-blue-600'><h3>section4</h3></div>
     <div className='h-full w-2/3 flex justify-center items-center absolute bg-blue-200'><h3>section5</h3></div>
</div>
</div>
</section> */}
// const sectionRef =useRef(null)
// const triggerRef =useRef(null)
// gsap.registerPlugin(ScrollTrigger);


// useEffect(() => {
//   const pin = gsap.fromTo(
//     sectionRef.current,
//     {
//       translateX: 0,
//     },
//     {
//       translateX: "-300vw",
//       ease: "none",
//       duration: 1,
//       scrollTrigger: {
//         trigger: triggerRef.current,
//         start: 'top top',
//         end: '+=100',
//       markers: true,
//         scrub: 0.6,
//         pin: true,
//       },
//     }
//   );
//   return () => {
  
//     pin.kill();
//   };
// }, [sectionRef, triggerRef]);
