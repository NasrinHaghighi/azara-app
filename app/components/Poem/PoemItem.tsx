import React from 'react'
//import IMg from '../../../public/img/ashoora.jpg'
import Image from 'next/image'
import RenderDangerous from './RenderDangerous'
import Link from 'next/link'



function PoemItem({item, backgroungImage}:any) {
 
  return (
    <div className="  border  rounded-md shadow-md  mb-10 pb-5" 
    style={{
      backgroundImage: `url(${backgroungImage.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    >
    <div className="grid lg:grid-cols-12 lg:grid-rows-1 grid-cols-1 grid-rows-2 lg:gap-5 gap-0 ">
      <div className="lg:col-span-5  row-span-5 pt-14">
       <Image src={item.img} alt="logo" width={300} height={300} className="object-cover rounded-md w-[300px] h-[200px] m-auto" />
      </div>
      <div className="lg:col-span-7 lg:pt-8 pl-8 pt-5 flex flex-col text-center lg:text-right ">
        <div className="md:text-2xl text-xl mb-3">
          <span>عنوان: </span>
          <span className="text-green-500">{item.title}</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-start items-center lg:gap-9 gap-0 justify-center">
          <div className="text-md lg:mb-5 mb-2">
            <span>دسته بندی: </span>
            <span className="text-red-400">{item.catSlug}</span>
          </div>
          <div className="text-md lg:mb-5 mb-5">
            <span>سبک شعر : </span>
            <span className="text-orange-400">{item.sabk}</span>
          </div>
        </div>
        <div className="text-lg ">
          <RenderDangerous post={item} />
        </div>
        <div className='text-sm flex justify-end xxs:justify-center items-center font-semibold '>
          <Link href={item.slug} className='text-center text-red-700  font-semibold mt-3' >ادامه مطلب ...</Link>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default PoemItem