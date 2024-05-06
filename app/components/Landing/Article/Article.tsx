import React from 'react'

import face from '../../../../public/img/face3.png'
import Image from 'next/image'
import PoemUniqe from './PoemUniqe'

const arr =[1, 2, 3, 4]
function Article() {
  return (
    <div className='lg:p-24 md:p-12 p-5 grid lg:grid-cols-2 grid-cols-1  relative gap-12'>
  
    
      <div className='lg:order-2 order-2'>
  <PoemUniqe />
      </div>


      
        <div className=' text-center h-fit lg:sticky  top-10 lg:order-2 order-1'> 
     
     <h2 className=' p-4 text-2xl '>گزیده اشعار</h2> 
     <p>لورم ایپسوم استفاده  روزنامه و مجله در ستون و سطرآنچنان که لازم است و </p>
<div className='   md:w-[500px] md:h-[350px] w-[250px] h-[300px]flex justify-center items-center  m-auto'>
    <Image src={face} alt="face" layout='fit' objectFit='content' />
     </div>
     <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفا لکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و </p>
        </div>
    </div>
  )
}

export default Article