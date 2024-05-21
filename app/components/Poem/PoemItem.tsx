import React from 'react'
import IMg from '../../../public/img/ashoora.jpg'
import Image from 'next/image'



function PoemItem() {
  return (
    <div className=' p-4 border border-gray-300 rounded-md my-8 grid grid-cols-12 grid-rows-1 gap-0 shadow-md  hover:scale-105 transition duration-300 ease-out'>
<div className='w-full  col-span-5 flex justify-center items-center ' >
    <Image className='rounded-md' src={IMg.src} width={400} height={200} alt='img' />
</div>
<div className='col-span-7 pt-12 pl-8 '>
   <div className='text-2xl mb-3'><span>عنوان: </span> <span className='text-green-500'>حضرت رقیه</span></div>
   <div className='flex justify-start items-center gap-9'>
   <div className='text-md mb-5'><span>دسته بندی: </span> <span className='text-red-400'>عاشورایی</span></div>
   <div className='text-md mb-5'><span>سبک شعر : </span> <span className='text-orange-400'>دو بیتی</span></div>
   </div>
   <div className='text-lg '>
  <p>       نشسته در خرابه دختر تو       <span className='mx-3'></span>      شده مهمان من بابا سرتو </p>
  <p>     اگر رفتي سفر ترك سفر كن          <span className='mx-3'></span>      بيا اينجا دمي بر ما نظر كن </p>
  <p> از اين ويرانه ها دفع خطر كن       <span className='mx-3'></span> كجا افتاده بابا پيكر تو   </p>
  <p> كجا بودي به بيني حال زارم         <span className='mx-3'></span> دو پاي كوچك بنشسته خارم      </p>
  <p> تو ميداني دگر طاقت ندارم           <span className='mx-3'></span> منم نازك بدن نيلوفر تو </p>
  </div>
  <div className='text-left ml-14 mt-8 text-red-500'>ادامه مطلب</div>
</div>
    </div>

    
  )
}

export default PoemItem