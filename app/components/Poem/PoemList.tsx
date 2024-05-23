import React from 'react'
import PoemItem from './PoemItem'
import Pagination from './Pagination'


const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/post`, { cache: 'no-store' }, );
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
}




async function PoemList() {
  const data =await getData()
//console.log('data.posts', data.posts)
  return (
    <div>
          {data?.posts.map((item:any)=>{
            return <PoemItem key={item} item={item} />
        })} 
        <Pagination /> 
    </div>
  )
}

export default PoemList