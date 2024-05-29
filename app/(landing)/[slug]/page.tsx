import React from 'react'
import Image from 'next/image'
import Banner from '../../../public/img/culture.png'
//import Sidebar from '@/components/Landing/Sidebar'
//import Comments from '@/components/Landing/Comments'
//import LikePostco from '@/components/Landing/LikePostco'

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
 
 

  return (
    <div className=' bg-slate-200 lg:mx-24 my-48 '>
      
         <div className="grid grid-flow-col justify-around items-center lg:gap-10 py-10 ">
        <div className="col-span-4 lg:block hidden  ">
        <Image src={data?.img} alt='logo' width={200}  height={200} className='object-cover rounded-md h-[400px] w-[400px] m-auto'  />
    </div> 

       <div className="lg:col-span-8  col-span-12 text-center lg:text-right">  
       
       <h2 className='sm:text-3xl text-lg  font-bold  mb-10 leading-10 '> <span className='pl-5'>عنوان شعر:</span>{data?.title}</h2>

       <div className='text-center lg:text-right'>
        <div><span className='sm:text-3xl text-lg font-semibold'><span>توسط : </span> <span className='text-green-500'>{data?.userName ? data?.userName : ''}</span>   </span>
        
  
        </div>
        <div className='mb-10'>
          <span className='sm:text-3xl text-lg font-semibold'>تاریخ انتشار  : </span><span className='text-orange-500'>{data?.createdAt.substring(0, 10)}</span>
          
 
        </div>
        <div className="col-span-4 lg:hidden block  ">
        <Image src={data?.img} alt='logo' width={200}  height={200} className='object-cover rounded-md sm:h-[400px] sm:w-[400px] w-[250px]  h-[250px]  m-auto'  />
    </div> 
          </div>
           </div>
      </div>
      <div>
      <div className='leading-relaxed text-center' dangerouslySetInnerHTML={{ __html: data?.des || '' }} />  

      </div>
      {/* <div className="grid lg:grid-flow-col grid-flow-row gap-8 p-4 mt-8">
   
   <div className="lg:col-span-4 col-span-12 order-2 lg:order-1 ">
   <Sidebar/> 
   </div>
   <div className="lg:col-span-8 col-span-12 order-1 lg:order-2">
   
     <div className='leading-relaxed' dangerouslySetInnerHTML={{ __html: data?.des || '' }} />  
    <div>
      <LikePostco postId={data?.id} />
      <Comments postSlug={data?.slug} /> 
    </div>
   </div> 
  </div> */}
  </div>
  )
}

export default SinglePage