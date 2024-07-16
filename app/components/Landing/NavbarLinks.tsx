import React from 'react'
import Link from 'next/link'
import AuthLinks from './AuthLinks'



function NavbarLinks() {
  return (
    <>
    <div className='text-left  justify-start gap-5 items-center font-semibold text-md md:flex'>
     <Link href='/'>خانه</Link>
   
     <Link href='/poems'>اشعار</Link>
     <Link href='/friends'> دوستان</Link>
     <Link href='/about'>درباره ما</Link>
     <AuthLinks />
    </div>
   
    </>
  )
}

export default NavbarLinks