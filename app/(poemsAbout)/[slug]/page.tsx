import React from 'react'
import Image from 'next/image'
import Yellow from '../../../public/img/yellow.jpg'
import Mainpoem from '../../../public/img/mainpoem.png'
import LikePostco from '@/app/components/Poem/LikePostco'
import Comments from '@/app/components/Poem/Comments'
import moment from 'moment-jalaali';
import { englishToPersianDigits } from '../../utils/func';
/////
const getData = async ( slug : string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/post/${slug}`
    , { cache: 'no-store' })

  if (!res.ok) throw new Error('fffffffffailed')

  return res.json()
}


///
 async function SinglePage({params}:any) {
  const {slug}=params
  const data = await getData( slug )
 
 console.log( moment(data.createdAt).format('jYYYY/jM/jD'));

  return (
    <div className=' border-2   rounded-lg relative my-24  p-5 text-black'    style={{
      backgroundImage: `url(${Yellow.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat:'no-repeat'
    }}>
      
         <div className="grid grid-flow-col justify-around items-center lg:gap-10 border-b-2 border-gray-200 p-5 shadow-lg mb-5 ">
        <div className="col-span-4 lg:block hidden  ">
        <Image src={data?.img} alt='logo' width={200}  height={200} className='object-cover rounded-md h-[300px] w-[300px] m-auto'  />
    </div> 

       <div className="lg:col-span-8  col-span-12 text-center lg:text-right">  
       {/* <span className='pl-5'>عنوان شعر:</span> */}
       <h2 className='sm:text-3xl text-lg  font-bold  mb-10 leading-10 '> {data?.title}</h2>

       <div className='text-center lg:text-right'>
        <div><span className='sm:text-l text-lg font-semibold'><span>توسط : </span> <span className='text-green-500'>{data?.userName ? data?.userName : ''}</span>   </span>
        
  
        </div>
        <div className='mb-10'>
          <span className='sm:text-l text-lg font-semibold'>تاریخ انتشار  : </span><span className='text-orange-500'>{englishToPersianDigits(moment(data?.createdAt).format('jYYYY/jM/jD'))}</span>
          
 
        </div>
        <div className="col-span-4 lg:hidden block  ">
        <Image src={data?.img} alt='logo' width={200}  height={200} className='object-cover rounded-md sm:h-[400px] sm:w-[400px] w-[250px]  h-[250px]  m-auto'  />
    </div> 
          </div>
           </div>
      </div>
      <div className='m-auto'>
      <div className='text-center md:text-xl text-l leading-10' dangerouslySetInnerHTML={{ __html: data?.des || '' }} />  

      </div>
    {/* <div className='absolute bottom-0 left-0 right-0'>
     
        <Image src={Banner} alt='logo' width={300}  height={300} className='object-cover rounded-md h-[400px] w-[400px] m-auto'  />
      
    </div> */}
      <div>
      <LikePostco postId={data?.id} />
       <Comments postSlug={data?.slug} />
    </div>
  </div>
  )
}

export default SinglePage