'use client'

import { useParams, useRouter } from 'next/navigation';
import React,{useEffect, useState} from 'react'
import Upload from '@/app/components/Dashboard/Upload';
import Image from 'next/image';
//import {modules , formats} from '../../../../utils/func'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import Quill from 'quill';
import { sabks } from '@/app/utils/data';
import { ToastContainer, toast,Zoom, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
Quill.register('modules/imageResize', ImageResize);
import {Friend, UpdatedData} from '../../../../utils/types'
import WriteModal from '@/app/components/Dashboard/WriteModal';


function DashboardSingleFriend() {
    const router = useRouter();
    const params = useParams();
    const { id } = params;
    const [openModal, setOpenModal] = useState(false);
    const [postData, setPostData] = useState<Friend | null>(null);
    const [file, setFile] = useState<string | File | null>(null);
    const [content, setContent] = useState(postData?.des);
    const [initialSabks, setInitialSabks] = useState<string []>([]);
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
     /***************************** */
     useEffect(() => {
        if (postData) {
            setContent(postData.des);
           setInitialSabks(postData?.sabk);
           setTitle(postData.title);
           setName(postData.name);
          // setFile(postData.img)
            }
    }, [postData]);
   //console.log(content, initialSabks, title, name, file)
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`/api/dashboard/friends/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch post data');
            }
            // console.log(response)
            const data = await response.json();
            setPostData(data); // Assuming your API returns post data in JSON format
        } catch (error) {
            console.error('Error fetching post data:', error);
        }
    };

    fetchData();
}, [id]);
/************* */
const updatedData: UpdatedData = {
    title: title,
    des: content,
    sabk: initialSabks,
    name:name,
    img: file || postData?.img,
    
}
 // change the conetnet of reacr quill by on cahnge   
 const handelValue = (value:string) => {
  setContent(value);
};
const handelSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
   // console.log(updatedData)
    for (const key in updatedData) {
        if (!updatedData[key as keyof UpdatedData]) {
          toast.error(`لطفا فیلد ${key} را پر کنید.`);
          //router.push('/dashboard/write');
          return;
        }
      }
      const response = await fetch(`/api/dashboard/friends/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });   
      if (response.ok) {
        toast.success('پست دوستان با موفقیت ویرایش شد.');
        setTimeout(() => {
          router.push('/dashboard/friends');
          router.refresh();
        }, 3000);
      } else {
        toast.error('خطا در ویرایش پست.');
        throw new Error('Failed to update post');
      }
}

const handleSabkChange = (sabkSlug: string) => {
    if (initialSabks) {
        if (initialSabks.includes(sabkSlug)) {
            setInitialSabks(initialSabks.filter(t => t !== sabkSlug));
        } else {
            setInitialSabks([...initialSabks, sabkSlug]);
        }
    } else {
        setInitialSabks([sabkSlug]);
    }
    
};
//console.log('id in front',id)
//console.log(initialSabks)
  return (
    <>
       <ToastContainer  position="top-right"  autoClose={5000} />
    <div className='container pb-12 '>
            <h1 className='text-4xl font-bold p-8 text-center text-bgGolden'> ویرایش متن<span className='underline '></span></h1>
            <div className='flex justify-center gap-10'>

            </div>
            <div className='flex justify-center gap-10'>
      <button className="bg-rose-500 text-white w-36 rounded-md px-4 py-2 hover:bg-rose-700 transition" onClick={() => setOpenModal(true)}>
      مشاهده متن
      </button>
    
     </div>
            <br />
            <br />

          <WriteModal openModal={openModal} setOpenModal={setOpenModal} values={updatedData} />  

            <form onSubmit={handelSubmit}>
            <div className='mb-8'>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-textColor">ویرایش نام شاعر</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="عنوان" required
                         onChange={(e)=>setName(e.target.value)}
                        value={name}
                    />

                </div>
                <div className='mb-8'>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor">ویرایش عنوان پست</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="عنوان" required
                        onChange={(e)=>setTitle(e.target.value)}
                        value={title}
                    />

                </div>
                {/* sabks */}
                <div className="mb-8 ">
          <label className="block mb-2 text-sm font-medium text-textColor">
           سبک شعر <span className='text-xs text-red-500'>(ضروری)</span>
          </label>
          <div id="tags" className='flex flex-wrap gap-2 bg-gray-200 p-2 rounded-md'>
          {sabks.map((sabk) => (
            <div key={sabk.id} className="mb-4  ">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="sabk"
                  //value={sabk.slug}
                checked={initialSabks.includes(sabk.slug)}
                onChange={()=>handleSabkChange(sabk.slug)}
                  className="form-radio" 
                />
                <span className="ml-2 text-black">{sabk.title}</span>
              </label>
            </div>
          ))}
          </div>
        </div>

        {/* *************** */}
                    {/* cover image */}
                    <div className='mb-8'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor"> اضافه کردن تصویر</label>

                        <div className=' rounded-md flex md:flex-row flex-col  justify-start items-center gap-5 border bg-gray-200 p-4 border-spacing-1 border-1'  >
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
                        </div> 

                    
                    </div>
    {/* DESCRIPTION onChange={handelValue}*/}
 <ReactQuill theme="snow" value={content}   modules={modules} formats={formats}  bounds={'#root'}  placeholder='****' onChange={handelValue}/>  
        <br />

        <button className='bg-green-500  text-white w-36  rounded-md px-4 py-2 hover:bg-green-700 transition' type='submit' > ارسال</button>  

            </form>
        </div>
        </>
    )


  
}

export default DashboardSingleFriend



const modules = {
    toolbar: [
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      ['blockquote', 'code-block'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' }
      ],
      ['link', 'image', 'video'],
      ['clean'],
       [{ 'color': ['red', 'pink', 'orange', 'yellow', 'green', 'blue', 'brown'] }, { 'background': [] }],          // dropdown with defaults from theme
     
      [{ 'align': [] }],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    },
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize']
    }
  }
  
  
  
  
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    "code-block", // Include "code-block" format here
    "bulleted-list",
    "numbered-list",
    "width" ,
    
  ];