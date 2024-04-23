import React from 'react'
import Image from 'next/image'
import Photo from '../../../public/img/ali.png'


function Banner() {
return (
<div className='grid grid-cols-12 grid-rows-1 gap-4 h-100 w-full h-full'>
<div className="col-span-3 text-right max-w-full [clip-path:polygon(16% 0, 100% 0, 83% 100%, 0 100%)] bg-gray-300"
style={{ 
  backgroundImage: `url(${Photo.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  clipPath: 'polygon(16% 0, 100% 0, 83% 100%, 0 100%)'
}}
>

</div>
<div className="col-span-9 text-right flex flex-row justify-center items-center h-full">
  <h1 className="text-4xl font-bold">Welcome to Azara</h1>
</div>
</div>
)
}

export default Banner

{/* <div className="max-w-screen-xl text-left sm:text-left mx-auto px-6 md:px-12 2xl:px-0 pb-24 sm:pb-0 grid gap10 sm:gap-0 justify-items-center items-center sm:grid-flow-col">
    <div className='order-1 sm:order-2 md:-translate-y-28 wrapper sm:drop-shadow-2xl sm:pb-14'>kk</div>
    <div className='order-2 sm:order-1 relative space-y-4 sm:space-y-8 text-center sm:text-left md:mb-32 z-10'>dd</div>
    </div> */}