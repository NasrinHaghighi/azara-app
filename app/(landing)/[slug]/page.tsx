import React from 'react'
import Image from 'next/image'
import Banner from '../../../public/img/leaf2.png'
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
    <div className='  lg:mx-48 my-48 border-2 border-gray-300 rounded-lg relative background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);'>
      
         <div className="grid grid-flow-col justify-around items-center lg:gap-10 p-5 ">
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
      <div className='text-center text-3xl leading-10' dangerouslySetInnerHTML={{ __html: data?.des || '' }} />  

      </div>
    {/* <div className='absolute bottom-0 left-0 right-0'>
     
        <Image src={Banner} alt='logo' width={300}  height={300} className='object-cover rounded-md h-[400px] w-[400px] m-auto'  />
      
    </div> */}
  </div>
  )
}

export default SinglePage