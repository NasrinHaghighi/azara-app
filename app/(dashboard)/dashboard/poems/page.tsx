import DashboardPostitem from '@/app/components/Dashboard/DashboardPostItem'
import Filters from '../../../components/Dashboard/Filters/Filters'
import React from 'react'
import Pagination from '@/app/components/Poem/Pagination';



const getData = async ({sort, page ,cat,search}:any) => {
  const res = await fetch(`http://localhost:3000/api/post?&search=${search}&sort=${sort}&page=${page}&cat=${cat}`, { cache: 'no-store' }, );
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
}

async function PoemsDadshboardPage({searchParams}: any) {

  const page = parseInt(searchParams.page) || 1;
  const sort =searchParams.sort || ''
  const cat =searchParams.cat || ''
  const search =searchParams.search || ''
  console.log(page,'searchParams', searchParams)
const { posts, count } = await getData({ sort, page, cat, search });

 // console.log('posts',posts)
  return (
    <>
<Filters sort={sort} page={page} cat={cat} search={search}/>
    
    {posts.map((post:any)=>{
return <DashboardPostitem key={post.id} post={post}/>
})} 
{/* <Pagination page={1} hasPrev={false} hasNext={false} cat={''}/> */}
</>
  )
}

export default PoemsDadshboardPage