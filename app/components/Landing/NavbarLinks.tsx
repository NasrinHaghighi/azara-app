import React from 'react'
import Link from 'next/link'
import AuthLinks from './AuthLinks'



function NavbarLinks() {
  return (
    <>
    <div className='text-left  justify-start gap-5 items-center font-semibold text-lg md:flex'>
     <Link href='/'>خانه</Link>
     <Link href='/about'>درباره ما</Link>
     <Link href='/'>اشعار</Link>
     <AuthLinks />
    </div>
   
    </>
  )
}

export default NavbarLinks