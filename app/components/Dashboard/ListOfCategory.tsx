import React from 'react'
import CategoryItem from './CategoryItem';

import { Category } from '../../utils/types';

const getData = async () => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, { cache: 'no-store' }, );
  
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  
    return res.json();
  }

async function ListOfCategory() {
    const data = await getData();
//console.log('data, ', data)
    return (
        <div>
            {data.length < 1 ? (
                <p>دسته بندی ثبت نشده است .</p>
            ) : (
                <div>
                    <h1 className='text-2xl mb-8'>لیست دسته بندی ها :</h1>
                     {data.map((item: Category) => {
                        return <CategoryItem key={item.id} item={item} />;
                    })} 
                </div>
            )}
        </div>
    );
}



export default ListOfCategory