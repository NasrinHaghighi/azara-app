import Image from 'next/image'
import React from 'react'
import Face from '../../../../public/img/face3.png'
import Link from 'next/link';
import bg1 from '../../../../public/img/bluebg.png'
import bg2 from '../../../../public/img/bgblue2.png'
import bg3 from '../../../../public/img/bluebg3.png'
import bg4 from '../../../../public/img/bgblue4.png'



interface Props {
  _id:number, createdAt: string;
  slug: string;
  name: string;
  des: string;
  img: string;
  sabk: string[];
  title:string
}
const arr=[bg1,bg2,bg3,bg4]
function FriendsCard({item, index}:{item:Props, index:number}) {
  const backgroundImage = arr[index % arr.length].src;
  return (
    <>
    
   <div className=' h-[600px]  mx-3 rounded-lg md:p-8 px-1 py-3 flex flex-col shadow-lg' style={{
    backgroundImage: `url(${backgroundImage} )`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
    }}>
    <div className='lg:flex lg:justify-end lg:items-center pb-3 border-b border-gray-200 flex flex-col justify-center items-center'>
    <h1 className='text-ligthText md:text-lg  text-md text-center font-semibold'>{item.name}</h1>
   <Image src={item?.img} alt="face" width={120} height={120} className="rounded-full ml-5 my-3"/>

    </div>
  
<div className='m-3'>
{/* <h1 className='text-md '>{item.title}</h1> */}
<div className='text-center md:text-lg  text-sm my-5' dangerouslySetInnerHTML={{ __html: item?.des.substring(0,280) || '' }} />  
<div className='mt-5 text-center'>
  <Link href={`/friends/${item.slug}`} className='text-red-500' >... ادامه مطلب</Link>
</div>
</div>
</div>
</> 
  )
}

export default FriendsCard