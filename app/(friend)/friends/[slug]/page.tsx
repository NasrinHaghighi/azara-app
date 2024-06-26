import React from 'react'
import BG from '../../../../public/img/blue4.png'
import Image from 'next/image'
import { convertSabkToTitle } from '../../../utils/func';

/////
const getData = async ( slug : string) => {
  const res = await fetch(`http://localhost:3000/api/friends/${slug}`
    , { cache: 'no-store' })

  if (!res.ok) throw new Error('fffffffffailed')

  return res.json()
}


///

async function page({params}:any) {
  const {slug}=params
  const data = await getData( slug )
  const titles = convertSabkToTitle(data.sabk);
  //console.log(titles)
  return (
    <div className=' border-2  rounded-lg p-5 h-auto mb-24 shadow-lg ' style={{
      backgroundImage: `url(${BG.src} )`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
      }} >
<div>
<div className=' w-full lg:flex lg:flex-col lg:justify-start lg:items-center border-b-2 border-gray-200 p-5 shadow-lg text-center '>

<Image src={data?.img} alt='logo' width={250}  height={250} className='object-cover rounded-full h-[250px] w-[250px] shadow-lg m-auto '  />
<div className=''>
<h1 className='md:text-2xl sm:text-xl  text-md m-3'>{data.name}</h1>
<h1 className='md:text-2xl sm:text-xl text-md m-3'><span>سبکهای شعر: </span>
  {titles.map((item, index) => {
    return <span className='text-red-500'> {item}{index < titles.length - 1 && ' - '}</span>
  })}
</h1>
</div>
</div>
<div className='text-center my-5'>
  <h1 className='text-2xl p-5 text-green-500'>{data.title}</h1>
  <div
          className="leading-relaxed text-center text-lg"
          dangerouslySetInnerHTML={{ __html: data?.des|| '' }}
        />
</div>
    </div>
    </div>
  )
}

export default page