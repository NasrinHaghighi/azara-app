'use client'
import React from 'react'
import { GoSignOut } from "react-icons/go";

import { useSession,signIn ,signOut} from 'next-auth/react'


function SignoutBtn() {
   
  return (
     <button  className='text-center flex justify-center items-center border border-gray-500 bg-red-500 rounded-md p-3' onClick={() => signOut({ callbackUrl: '/', redirect:true })}>

               خروج<span className='px-4'><GoSignOut /></span>
    </button>
   
  )
}

export default SignoutBtn