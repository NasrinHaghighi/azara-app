import React from 'react'
//import IMg from '../../../public/img/ashoora.jpg'
import Image from 'next/image'
import RenderDangerous from './RenderDangerous'



function PoemItem({item}:any) {
 
  return (
    <div className="lg:p-4 p-1 bg-slate-200 border border-gray-300 rounded-md shadow-md hover:scale-105 transition duration-300 ease-out mb-10">
    <div className="grid lg:grid-cols-12 lg:grid-rows-1 grid-cols-1 grid-rows-2 lg:gap-5 gap-0">
      <div className="lg:col-span-5  row-span-5">
       <Image src={item.img} alt="logo" width={300} height={300} className="object-cover rounded-md w-[300px] h-[200px] m-auto" />
      </div>
      <div className="lg:col-span-7 lg:pt-12 pl-8 pt-0 flex flex-col">
        <div className="text-2xl mb-3">
          <span>عنوان: </span>
          <span className="text-green-500">{item.title}</span>
        </div>
        <div className="flex lg:justify-start items-center gap-9 justify-center">
          <div className="text-md mb-5">
            <span>دسته بندی: </span>
            <span className="text-red-400">{item.catSlug}</span>
          </div>
          <div className="text-md mb-5">
            <span>سبک شعر : </span>
            <span className="text-orange-400">{item.sabk}</span>
          </div>
        </div>
        <div className="text-lg">
          <RenderDangerous post={item} />
        </div>
        <div className="text-left ml-14 mt-8 text-red-500">ادامه مطلب</div>
      </div>
    </div>
  </div>
    
  )
}

export default PoemItem