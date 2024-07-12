'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { ToastContainer, toast,Zoom, Bounce} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import {User} from '../../utils/types'



function RemoveUser({user}:{user:User}) {
    const router = useRouter();
    const handelRemove = async (email:string) => {
        try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: user.email}) 
            })
        if (res.ok) {
            toast.success('کاربر با موفقیت حذف شد.');
            router.push('/dashboard/poems');
            router.refresh();
        } else {
            toast.error('خطا در حذف کاربر.');
            throw new Error('Failed to delete post');
        }
        } catch (error) {
            console.log('متاسفانه خطایی رخ داده است')
        }
    }
  return (
    <>
    <ToastContainer  position="top-right"  autoClose={5000} />
    <div className='flex justify-end p-5'>
        <button className='bg-red-500 px-3 py-1 rounded-md cursor-pointer'  onClick={()=>handelRemove(user.email)} >حذف</button>
    </div>
    </>
  )
}
export default RemoveUser