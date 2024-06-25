import React, { useEffect } from 'react'
import SearchInput from '../Dashboard/Filters/SearchInput'
import RemoveFilters from '../Dashboard/Filters/RemoveFilters'

import RemoveFlitersPoems from './RemoveFlitersPoems'
import SabkFilter from './SabkFilter'
import {convertSabkToTitle} from '../../utils/func'
import CatDropdownPoemsPage from './CatDropdownPoemsPage'


function Filters({  cat, search, sabk }: any) {
  console.log('sabk...333',sabk)

  console.log('cat...333',cat)

  return (
    <>
    <div className='bg-gray-300 mb-5 rounded-md p-3'>
    <div className='flex flex-col lg:flex-row gap-y-5 justify-start items-center py-4 gap-x-36 '>
       <SearchInput/>
       <div className='flex gap-x-5 '>
          <CatDropdownPoemsPage />
        
        </div>
     
        </div>
        <div className='my-5 '>
          <SabkFilter />
        </div>
       <div className='  py-2 border-t-2 border-gray-500'>
      {  search || cat || sabk? (
        <div className='lg:flex lg:flex-col flex-row justify-between items-center gap-5  p-3 rounded-md my-5 '>
          <div className='flex justify-start items-center font-semibold  lg:mb-5 mb-5'>
            {sabk &&  
       
                  <span className='text-green-700 font-semibold mx-2'>{sabk }</span>
          
           } 
          {search && <p>جستجو : <span className='text-blue-700 font- mx-2 '>{search}</span></p>}
          {cat && <p>دسته بندی : <span className='text-red-700 font-semibold mx-2'>{cat}</span></p>}
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