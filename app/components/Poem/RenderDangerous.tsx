'use client'
import { useState, useEffect } from 'react';
//import Loading from '../Loading';

function RenderDangerous({post,num}:any) {
    const [render, setRender] = useState(false);
   
    useEffect(() => {
       setRender(true);
    }, []);
 
    
  return (
    <>
    <div >
    {render ?
<div className=' ' dangerouslySetInnerHTML={{ __html:render && post?.des.substring(0, num) + '...' }} />
        : <p>loading</p>}
        </div>
     </>
  )
}

export default RenderDangerous