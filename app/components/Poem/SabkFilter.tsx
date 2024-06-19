'use client'

import React, { useEffect } from 'react'

import { useRouter } from 'next/navigation'

const sabks=[{id:1,title:'غزل', slug:'ghazal'},{id:2,title:'دوبیتی',slug:'dobaiti'},{id:3, title:'مثنوی', slug:'masnavi' },{id:4,title:' چهارپاره',slug:'chaharpare'},{id:5,title:'رباعی',slug:'robaie'}, {id:6, title:'شعرنو',slug:'shareno'}]



function SabkFilter() {
    const [sabk, setSabk] = React.useState<string[] >();
    const router = useRouter();
    const handleTagChange =(slug:string) => {
    
        setSabk((prevSabk) => {
            if (prevSabk) {
              if (prevSabk.includes(slug)) {
                return prevSabk.filter((item) => item!== slug);
              } else {
                return [...prevSabk, slug];
              }
            } else {
              return [slug];
            }
          });

    }
    console.log(sabk)
    //const sabkString = JSON.stringify(sabk);
    useEffect(() => {
      const sabkParams = sabk && sabk.length > 0 ? sabk.join(',') : '';
      router.push(`/poems${sabkParams ? `?sabk=${sabkParams}` : ''}`);
    }, [sabk]);
   
  return (
    <div className=''>
    
    <div className=' mb-8'>
            <label htmlFor="tags" className="block mb-2 text-sm font-medium text-textColor">سبک های شعری :</label>
            <div id="tags" className='flex flex-wrap gap-2'>
          {sabks.map((sabk: any) => (

            <label key={sabk.id} className='flex items-center'>

              <span className='ml-2'>{sabk.title}</span>

              <input
                type="checkbox"
                name="tags"
                value={sabk.id}
                //checked={sabk?.includes(sabk.title)}
                onChange={() => handleTagChange(sabk.title)}
              />


            </label>

          ))}

             
            </div>
          </div>
    </div>
  )
}

export default SabkFilter