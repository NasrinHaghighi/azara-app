import AboutCo from '@/app/components/about/AboutCo'
import React from 'react'

function AboutPage() {
  return (
    <div className='relative h-screen lg:mx-24 my-48'>
      <h1 className='mb-5 text-5xl text-center'>درباه من</h1>
      <AboutCo />
      <div className="h-96  flex justify-center items-center  w-full bg-yellow-200">footer</div>
    </div>
  )
}

export default AboutPage