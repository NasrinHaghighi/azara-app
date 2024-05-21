import React from 'react'
import PoemItem from './PoemItem'
import Pagination from './Pagination'


const arr=[1,2,3,4,5,6,7,8,9,10]
function PoemList() {
  return (
    <div>
        {arr.map((item)=>{
            return <PoemItem key={item} />
        })}
        <Pagination />
    </div>
  )
}

export default PoemList