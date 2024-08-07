import React from 'react'
import Link from 'next/link'
import BackTopTop from './BacktoTop'

function Footer() {
  return (
   <>
   <div className='rounded-md text-bg bg-bgGolden h-96 md:flex flex-col justify-center gap-5 items-center md:px-3 py-5'>
      <div className='   font-semibold text-lg flex md:flex-row flex-col justify-center gap-5 items-center'>
     <Link  href='/'>خانه</Link>
   
     <Link href='/poems'>اشعار</Link>
     <Link href='/friends'> دوستان</Link>
     <Link href='/about'>درباره من</Link>
 
    </div>
    <div className='my-5'>
    <BackTopTop/>
    </div>
    </div> 
 
    </>
  )
}

export default Footer