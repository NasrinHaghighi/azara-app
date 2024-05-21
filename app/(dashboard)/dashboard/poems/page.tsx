import DashboardPostitem from '@/app/components/Dashboard/DashboardPostItem'
import Filters from '../../../components/Dashboard/Filters/Filters'
import React from 'react'


const arr = [1,2,3,4,5,6,7,8,9,10]

function PoemsDadshboardPage() {
  return (
    <>
<Filters/>
    
    {arr.map((post:any)=>{
return <DashboardPostitem key={post.id} post={post}/>
})} 
</>
  )
}

export default PoemsDadshboardPage