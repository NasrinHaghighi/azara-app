import Footer from '@/app/components/Landing/Footer'
import AboutCo from '@/app/components/about/AboutCo'
import React from 'react'

function AboutPage() {
  return (
    <div className='relative h-screen my-24'>
      <div className='lg:mx-24'>
      <h1 className='mb-5 text-5xl  text-center text-bgGolden'>درباه من</h1>
      <AboutCo />
      </div>
     <Footer />
    </div>
  )
}

export default AboutPage