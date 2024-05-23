import React from 'react'
import PoemItem from './PoemItem'
import Pagination from './Pagination'


const getData = async ({page, cat}:any) => {
  const res = await fetch(`http://localhost:3000/api/post?page=${page}&cat=${cat}`, { cache: 'no-store' }, );
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
}




async function PoemList({ page, cat }: any) {
  const {posts, count} =await getData({ page, cat });
  const POST_PER_PAGE=3
  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1)+POST_PER_PAGE  < count
//console.log('data.posts', data.posts)
  return (
    <div>
          {posts.map((item:any)=>{
            return <PoemItem key={item} item={item} />
        })} 
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} cat={cat}/> 
    </div>
  )
}

export default PoemList