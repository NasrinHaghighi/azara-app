'use client'

import { useParams, useRouter } from 'next/navigation';
import React,{useEffect, useState} from 'react'
interface Friend {
    createdAt: string;
    des: string;
    id: string;
    img: string;
    slug: string;
    title: string;
  sabk:string[];
  }
function DashboardSingleFriend() {
    const router = useRouter();
    const params = useParams();
    const { slug } = params;
    const [openModal, setOpenModal] = useState(false);
    const [postData, setPostData] = useState<Friend | null>(null);
//console.log(slug)
  return (
    <div className='container pb-12 '>
            <h1 className='text-4xl font-bold p-8 text-center'> ویرایش متن<span className='underline '></span></h1>
            <div className='flex justify-center gap-10'>

            </div>
            <div className='flex justify-center gap-10'>
      <button className="bg-rose-500 text-white w-36 rounded-md px-4 py-2 hover:bg-rose-700 transition" onClick={() => setOpenModal(true)}>
      مشاهده متن
      </button>
    
     </div>
            <br />
            <br />

         {/* <WriteModal openModal={openModal} setOpenModal={setOpenModal} values={updatedPost} />   */}

            <form >
                <div className='mb-8'>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor">ویرایش عنوان پست</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="عنوان" required
                         //onChange={(e)=>setTitle(e.target.value)}
                        //value={title}
                    />

                </div>
                {/* category */}
                <div className='mb-8'>
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-textColor">دسته بندی</label>
                    <input
                        id="category"
                        name="category"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="دسته بندی" required
                        //onChange={(e)=>setCategory(e.target.value)}
                        //value={category}
                    />
                    <br />
                    <br />
                    </div>
                    {/* cover image */}
                    <div className='mb-8'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor"> اضافه کردن تصویر</label>

                        {/* <div className=' rounded-md flex md:flex-row flex-col  justify-start items-center gap-5 border border-gray-200 p-4 border-spacing-1 border-1'  >
                             <div>
                           <span>تصویر قبلی</span>
                            <img src={postData?.img} alt={postData?.title} className='h-40 w-40 object-cover rounded-lg' /></div>

                            <div className=''> <Upload setFile={setFile} /> </div>
                            <div>مشاهده تصویر جدید:
                               
                             {file instanceof File && (
  <Image src={URL.createObjectURL(file)} alt='preview' className='h-40 w-40 object-cover rounded-lg' />
)}
{typeof file === 'string' && <img src={file} alt='preview' className='h-40 w-40 object-cover rounded-lg' />}
                            </div>
                        </div> */}

                    
                    </div>
    {/* DESCRIPTION */}
    {/* <ReactQuill theme="snow" value={content} onChange={handelValue} modules={modules} formats={formats}  bounds={'#root'} placeholder='****'/> */}
        <br />

        <button className='bg-green-500  text-white w-36  rounded-md px-4 py-2 hover:bg-green-700 transition' type='submit' > ارسال</button>  

            </form>
        </div>

    )


  
}

export default DashboardSingleFriend