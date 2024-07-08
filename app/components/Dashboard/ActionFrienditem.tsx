'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

function ActionFrienditem({friend}:any) {
    const router = useRouter();
    const removeHandle = async (post:any) => {
      
       const {id,slug} = post;
    //  console.log(id,slug)
           try {
               // Call API to remove post  
               const res = await fetch(`/api/friends`,
                   {
                       method: 'DELETE',
                       headers: {
                           'Content-Type': 'application/json'
                       },
                       body: JSON.stringify({ id ,slug})
   
                   });
   
               if (!res.ok) {
                   throw new Error('Failed to remove post');
               }
               router.push('/dashboard');
               router.refresh()
               // Handle successful response
               console.log('Post removed successfully');
           } catch (error) {
               // Handle error
               console.error('Error removing post:', error);
           }
       };
  return (
    <div className="flex justify-end items-center gap-x-3">
    <div className='bg-red-500 px-3 py-1 rounded-md cursor-pointer' onClick={() => removeHandle(friend)} >حذف</div>
    <div className='bg-green-500 px-3 py-1 rounded-md cursor-pointer' >
        <Link href={`/dashboard/friends/${friend.id}`}>ویرایش</Link>
    </div>
   
</div>
  )
}

export default ActionFrienditem