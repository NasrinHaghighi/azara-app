import React from 'react'
import RemoveCategory from './RemoveCategory';
import { Category } from '../../utils/types';


const getData = async (slug:string) => {
   
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/post?cat=${slug}`, { cache: 'no-store' }, );
  
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  
    return res.json();
  }
async function CategoryItem({ item }: { item: Category }) {
    const {slug} = item;
 const data = await getData(slug);
//console.log('data, ', data.posts.length)
    return (
        <div className='gird grid-cols-1 md:grid-cols-3 gap-5 mb-5'>
            <div className='bg-slate-200 p-5 rounded-lg shadow-md first-line: '>
                <div className='text-gary-500 mb-3'>
                    ایجاد شده در تاریخ:
                    <span className='text-green-500 font-semibold mr-3'>
                        {item.createdAt ? item.createdAt.substring(0, 10) : ''}
                    </span>
                </div>
                <div className='mb-3 '>
                    نام دسته بندی:
                    <span className='text-blue-400 font-semibold text-lg mr-3'>
                        {item.title}
                    </span>
                </div>
                <div className='mb-3 flex justify-between items-center'>
                    <div>
                    <span> تعداد پست : </span>
                    <span className='text-orange-400 font-semibold text-lg mr-2'>{data.posts.length}</span>
                    </div>
                
               </div>
               <div >
                 <RemoveCategory item={item} />
                 </div>
            </div>
        </div>
    )
}


export default CategoryItem