import React from 'react'
import Link from 'next/link'
import ActionPostItem from './ActionPostItem'
import NumberOfLikes from './NumberOfLikes'
import {convertTag} from '@/app/utils/func'


function DashboardPostitem({post}:any) {
//console.log('post',post.id)
  
  return (
    <div className='gird grid-cols-1 md:grid-cols-3 gap-5 my-5'>
      <div className='bg-gray-200 p-5 rounded-lg shadow-md '>
        <div className='text-blue-400 hover:underline mb-4'></div>
        <div className='flex flex-col lg:flex-row justify-between text-lg mb-8 gap-y-3 '> 
            <div className='text-gary-500'>ایجاد شده در تاریخ:   <span className='text-green-500 font-semibold'> {post.createdAt.substring(0,10)}</span>
             </div> 
            <div >توسط:<span className='px-1 text-lime-500 font-semibold text-lg'>{post.userEmail}</span> </div> 
            <div >سبک:<span className='px-1 text-yellow-600 font-semibold text-lg'>{post.sabk}</span> </div> 
            <div> دسته بندی: <span className='text-red-500'>{post.catSlug}</span> </div> 
            <div> تگ ها: 
    {post.tags.map((item:string,index:number) => {
      return <span className='text-red-500'>{convertTag(item)} {index < post.tags.length-1 ? <span >و</span> : ''}</span>
    })}
               </div> 
        </div>
          <div className='mb-8 md:text-3xl  '>عنوان:<span className='px-1'></span><span>{post.title}</span></div>
<div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3'>
  <div className='text-sm flex justify-start'>تعداد لایک  :  <span className='px-1 text-red-500'>
  <NumberOfLikes postId={post.id}/>  
     </span></div> 


  <div><ActionPostItem post={post} /></div>
  
  </div>
      </div>
    </div>
  )
}

export default DashboardPostitem


{/* <span className={`${bgCat(post.catSlug)} rounded-lg px-3 py-1`}>{post.catSlug}</span> */}
{/* <Link href={`/${post.slug}`}>#{post.id}</Link> */}