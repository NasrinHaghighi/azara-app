import DashboardPostitem from '@/app/components/Dashboard/DashboardPostItem'
import Filters from '../../../components/Dashboard/Filters/Filters'
import React from 'react'
import Pagination from '@/app/components/Poem/Pagination';



const getData = async ({sort, page ,cat,search}:any) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/post?&search=${search}&sort=${sort}&page=${page}&cat=${cat}`, { cache: 'no-store' }, );
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
const POST_PER_PAGE=5
  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1)+POST_PER_PAGE  < count
console.log('posts',posts)
  return (
    <>
<Filters sort={sort} page={page} cat={cat} search={search}/>
    
    {posts.map((post:any)=>{
return <DashboardPostitem key={post.id} post={post}/>
})} 
 <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} cat={''}/> 
</>
  )
}

export default PoemsDadshboardPage