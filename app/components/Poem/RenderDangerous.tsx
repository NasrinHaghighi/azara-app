'use client'
import { useState, useEffect } from 'react';
//import Loading from '../Loading';

function RenderDangerous({post}:any) {
    const [render, setRender] = useState(false);
   
    useEffect(() => {
       setRender(true);
    }, []);
 
    
  return (
    <>
    <div >
    {render ?
<div className='text-right ' dangerouslySetInnerHTML={{ __html:render && post?.des.substring(0, 850) + '...' }} />
        : <p>loading</p>}
        </div>
     </>
  )
}

export default RenderDangerous