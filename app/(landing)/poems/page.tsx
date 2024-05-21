import Filters from '@/app/components/Poem/Filters'
import PoemList from '@/app/components/Poem/PoemList'
import React from 'react'

function PoemPage() {
  return (
    <div className='py-36 px-24
    '>
 <h1 className='text-center text-4xl font-bold'>اشعار</h1>
<Filters/>
 <PoemList/>
      </div>
  )
}

export default PoemPage