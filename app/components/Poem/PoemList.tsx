import React from 'react'
import PoemItem from './PoemItem'
import Pagination from './Pagination'
// import Poem1 from '../../../public/img/poem1.png'
// import Poem2 from '../../../public/img/poem2.png'
// import Poem3 from '../../../public/img/poem3.png'


//const arr = [Poem1, Poem2, Poem3]
const getData = async ({page, cat,search,sabk}:any) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/post?page=${page}&cat=${cat}&search=${search}&sabk=${sabk}`, { cache: 'no-store' }, );
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
}




async function PoemList({ page, cat ,search, sabk}: any) {
  //console.log('page', page, 'cat', cat,'search', search, 'sabk', sabk)


  const {posts, count} =await getData({ page, cat, search,sabk });
  
  const POST_PER_PAGE=5
  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1)+POST_PER_PAGE  < count
//console.log('data.posts', data.posts)
  return (
    <div>
          {posts.map((item:any, index:number) => {
            //const backgroundImage = arr[index % arr.length];
            return <PoemItem key={item} item={item}  />
        })} 
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} cat={cat}/> 
    </div>
  )
}

export default PoemList