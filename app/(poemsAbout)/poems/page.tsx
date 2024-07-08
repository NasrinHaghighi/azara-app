import Filters from '@/app/components/Poem/Filters'
import PoemList from '@/app/components/Poem/PoemList'
import React from 'react'

function PoemPage({params, searchParams}: any) {
  const page=parseInt(searchParams.page) || 1
  const cat =searchParams.cat || ''
    const search =searchParams.search || ''
    const sabk =searchParams.sabk || ''
    
    console.log('page', page, 'cat', cat,'search', search, 'sabk', sabk)
  return (
    <div className="flex flex-col min-h-screen">
    <div className=' my-14 flex-1 '>
 <h1 className='text-center text-4xl font-bold mb-5 text-bgGolden'>اشعار</h1>
<Filters cat={cat} search={search} sabk={sabk}/>
 <PoemList page={page} cat={cat} search={search} sabk={sabk}/>
      </div>
      {/* <div     className="h-96 w-full bg-yellow-400 flex justify-center items-center ">footer</div>  */}
      </div>
  )
}

export default PoemPage