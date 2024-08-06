'use client'
import React from 'react'
import Photo1 from '../../../../public/img/face3.png'
import Photo2 from '../../../../public/img/gall1.png'
import Photo3 from '../../../../public/img/baba1.png'
import Image from 'next/image'

function Gallery() {

  return (
     <div className='my-8   rounded-lg overflow-hidden '>
      <div className='relative max-w-full h-[700px] grid grid-cols-4 grid-rows-4 gap-8'>
     {/* <div className='absolute top-1/3 left-2/4 w-24 h-24 bg-bgGolden rounded-full mix-blend-color-burnhard-light filter blur-md opacity-50 animate-blob'></div> 

     <div className='absolute top-1/2 right-3/4 w-96 h-96 bg-bgGolden rounded-full mix-blend-hard-light filter blur-xl opacity-50 animate-blob '></div> 
     <div className='absolute top-3/4 right-2/4 w-96 h-96 bg-bgGolden rounded-full mix-blend-hard-light filter blur-xl opacity-50 animate-blob animation-delay-2'></div>   */}
 <div className='absolute top-1/3 left-1/3 w-full h-96 bg-bgGolden rounded-full mix-blend-color-burnhard-light filter blur-3xl -z-10 animate-blob '></div>
     {/* /*******  ******** */ }
      <div className='col-span-2 row-span-4 rounded-md bg-gray-100' style={{backgroundImage: `url(${Photo3.src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

      </div>
     <div className='col-span-2 row-span-2 rounded-md bg-gray-100' style={{backgroundImage: `url(${Photo1.src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
     
     </div>
    <div className='col-span-1 row-span-2 rounded-md bg-gray-100' style={{backgroundImage: `url(${Photo3.src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div> 
    <div className='col-span-1 row-span-2 rounded-md bg-gray-100' style={{backgroundImage: `url(${Photo1.src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>cc</div> 
     </div>
     </div>
  )
}

export default Gallery