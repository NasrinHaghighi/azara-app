import React from 'react'
import SortDropdown from './SortDropdown'
import CatDropdown from './CatDropdown'
import SearchInput from './SearchInput'
import RemoveFilters from './RemoveFilters'



function Filters({ sort, page, cat, search }: any) {
  // console.log(sort, page, cat, search)
  return (
    <>
    <div className='border-2 border-bgGolden rounded-md p-4 shadow-md shadow-bgGolden'>
      <div className='flex flex-col lg:flex-row gap-y-5 justify-start items-center py-4 gap-x-36 '>
        <SearchInput />
        <div className='flex gap-x-5'>
          <CatDropdown />
          <SortDropdown />
        </div>
      </div>
<div className=' py-2'>
      {sort || search || cat ? (
        <div className='flex justify-between items-center gap-5  p-3 rounded-md my-5 '>
          <div className='flex justify-start items-center font-semibold bg-bgGolden rounded-md px-3 py-2'>
          {sort && <p>مرتب سازی : <span className='text-green-700 font-semibold mx-2 bg-bgGolden rounded-md px-3 py-2'>{sort}</span></p>}
          {search && <p>جستجو : <span className='text-blue-700 font- mx-2 bg-bgGolden rounded-md px-3 py-2'>{search}</span></p>}
          {cat && <p>دسته بندی : <span className='text-red-700 font-semibold mx-2 bg-bgGolden rounded-md px-3 py-2'>{cat}</span></p>}
          </div>
        <RemoveFilters />
        </div>
      ) : <p className='my-5 font-semibold '>هیچ فیلتری انتخاب نشده است</p>}
      </div>
      </div>
    </>
  )
}


export default Filters