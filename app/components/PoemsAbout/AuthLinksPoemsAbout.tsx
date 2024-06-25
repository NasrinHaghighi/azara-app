'use client'

import React from 'react'
import { useSession,signIn ,signOut} from 'next-auth/react'
import Link from 'next/link'



function AuthLinksPoemsAbout() {
    const { data, status } = useSession()
  return (
    <>
    {status === 'unauthenticated' ?
         (<Link href='/signin' className='text-center'>ورود</Link>)
         :
         (
             <div className='flex  justify-center items-center  md:gap-5 gap-2'>
                 {data?.user?.role === 'admin' ? <Link href='/dashboard/poems' className='text-green-500'> پنل مدیریت</Link> : null}
                 <span className='pl-3'></span>
                 <button className='text-center' onClick={() => signOut()}>
                     <span className='text-red-500' onClick={(event) => { event.preventDefault(); signOut(); }}>خروج</span>
                 </button>
             </div>
         )
     } 
 </>
  )
}

export default AuthLinksPoemsAbout