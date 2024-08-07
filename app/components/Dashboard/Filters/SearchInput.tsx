'use client'

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, {useState} from 'react'


function SearchInput() {
const searchParams = useSearchParams();
const pathname = usePathname();
const router = useRouter();
const [searchQuery, setSearchQuery] = useState({ search: "" ,page: '1'});
//console.log('searchParams', searchQuery.search);
const handleInputChange = (event:any) => {
    const { name, value } = event.target;
    const updatedQuery = { ...searchQuery, [name]: value };
    setSearchQuery(updatedQuery);
    updateSearchQuery(updatedQuery);
  };
  const updateSearchQuery = (updatedQuery:any) => {
    const params = new URLSearchParams(searchParams);
    Object.keys(updatedQuery).forEach((key) => {
      if (updatedQuery[key]) {
        params.set(key, updatedQuery[key]);
      } else {
        params.delete(key);
      }
    });
    params.set('page', '1');
    const queryString = params.toString();
    const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
    //console.log(updatedPath);
    router.push(updatedPath);
  };
  return (
    <div className="group relative w-72 md:w-80 lg:w- ">
  
    <input  type="text" className=" h-10 w-full rounded-lg  px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out  focus:ring-2 " placeholder='جستجو...' 
   onChange={handleInputChange}
    value={searchQuery.search}
    id="search"
    name="search"
    />
    
  </div>
  )
}

export default SearchInput