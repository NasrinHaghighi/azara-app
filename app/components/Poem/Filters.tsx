import React, { useEffect } from 'react'
import SearchInput from '../Dashboard/Filters/SearchInput'
import RemoveFilters from '../Dashboard/Filters/RemoveFilters'
import CatDropdown from '../Dashboard/Filters/CatDropdown'
import RemoveFlitersPoems from './RemoveFlitersPoems'
import SabkFilter from './SabkFilter'
import {convertSabkToTitle} from '../../utils/func'


function Filters({  cat, search, sabk }: any) {
  console.log('sabk...333',sabk)

  console.log('cat...333',cat)

  return (
    <>
    <div className='bg-gray-300 mb-5 rounded-md p-3'>
    <div className='flex flex-col lg:flex-row gap-y-5 justify-start items-center py-4 gap-x-36 md  '>
       <SearchInput/>
       <div className='flex gap-x-5'>
          <CatDropdown />
        
        </div>
     
        </div>
        <div>
          <SabkFilter />
        </div>
       <div className='  py-2'>
      {  search || cat || sabk? (
        <div className='flex justify-between items-center gap-5  p-3 rounded-md my-5 '>
          <div className='flex justify-start items-center font-semibold bg-red-100'>
            {sabk &&  
       
                  <span className='text-green-300 font-semibold mx-2'>{sabk }</span>
          
           }
          {search && <p>جستجو : <span className='text-blue-300 font- mx-2 '>{search}</span></p>}
          {cat && <p>دسته بندی : <span className='text-red-300 font-semibold mx-2'>{cat}</span></p>}
          </div>
        <RemoveFlitersPoems /> 
        </div>
      ) : <p className='my-5 font-semibold'>هیچ فیلتری انتخاب نشده است</p>}
      </div>
      </div>
      </>
  )
}

export default Filters