'use client'
import React ,{useRef}from 'react'


function Gallery() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className='  my-8 '>
    <div className=" md:h-[500px] sm:h-[300px] xs:h-[200px] relative m-auto flex justify-center items-center border-2 border-white after:bg-[radial-gradient(red)]"  >
{/* <Image src={Gall} alt="gall"  objectFit='cover' width={700} height={400} /> */}
    </div>

  </div>
  )
}

export default Gallery