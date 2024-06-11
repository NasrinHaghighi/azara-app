import Filters from '@/app/components/Poem/Filters'
import PoemList from '@/app/components/Poem/PoemList'
import React from 'react'

function PoemPage({params, searchParams}: any) {
  const page=parseInt(searchParams.page) || 1
  const cat =searchParams.cat || ''
  return (
    <div className=' my-2
    '>
 <h1 className='text-center text-4xl font-bold'>اشعار</h1>
<Filters/>
 <PoemList page={page} cat={cat} />
      </div>
  )
}

export default PoemPage