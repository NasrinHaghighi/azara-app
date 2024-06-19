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
    <div className=' my-14'>
 <h1 className='text-center text-4xl font-bold mb-5'>اشعار</h1>
<Filters cat={cat} search={search} sabk={sabk}/>
 <PoemList page={page} cat={cat} search={search} sabk={sabk}/>
      </div>
  )
}

export default PoemPage