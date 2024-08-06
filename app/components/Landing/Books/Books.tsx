import Image from 'next/image'
import React from 'react'
import Book from '../../../../public/img/book1.png'

function Books() {
  return (
 
   <div className="relative  rounded-md border-2 border-bgGolden w-full h-auto my-48 grid grid-cols-12 lg:grid-rows-1 grid-rows-2  gap-4">

 <Image src={Book} width={500} height={500} alt='book' className="absolute -top-36 -right-16 rounded-md" />
 <div className='lg:col-span-4 col-span-12 order-1'></div>
<div className=' lg:col-span-8 col-span-12 order-2 p-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div>
</div>
    
  )
}

export default Books