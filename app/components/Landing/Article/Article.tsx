import React from 'react'

import face from '../../../../public/img/face3.png'
import Image from 'next/image'
import PoemUniqe from './PoemUniqe'
import PoemItem from '../../Poem/PoemItem'

const getData = async ( ) => {
  const res = await fetch(`http://localhost:3000/api/post`
    , { cache: 'no-store' })

  if (!res.ok) throw new Error('fffffffffailed')

  return res.json()
}

async function Article() {
  const {selectedPosts}= await getData()
  //console.log(selectedPosts)
  return (
    <>
    <div className='lg:p-24 md:p-12 p-5 grid lg:grid-cols-2 grid-cols-1  relative gap-12  '>
  
 <div className='lg:order-2 order-2 px-5'>

 
   <PoemUniqe   selectedPosts={selectedPosts} />

      </div>  


      
        <div className=' text-center h-fit lg:sticky  top-10 lg:order-2 order-1 px-5 lg:mt-0 mt-24'> 
     
     <h2 className=' p-4 text-4xl text-bgGolden'>گزیده اشعار</h2> 
     {/* <p>لورم ایپسوم استفاده  روزنامه و مجله در ستون و سطرآنچنان که لازم است و </p> */}
<div className='   md:w-[500px] md:h-[350px] w-[250px] h-[300px]flex justify-center items-center  m-auto mb-14 '>
    <Image src={face} alt="face" layout='fit' objectFit='content' />
     </div>
    <p className='text-xl md:text-md'>شاعر اشعار خود را در قالبهای غزل ، مثنوی ، چهار پاره ، دوبیتی ، رباعی و شعر نو سروده است و بیشتر اشعار خود را در موضوع های عاشقانه ، عارفانه و اجتماعی سروده است </p>
        </div>
    </div>
    </>
  )
}

export default Article