'use client'
import React,{useState,useEffect} from 'react'
import { useParams } from 'next/navigation'
import Upload from '../../../../components/Dashboard/Upload';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import Quill from 'quill';
import WriteModal from '../../../../components/Dashboard/WriteModal';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { sabks } from '@/app/utils/data';
import { tags } from '@/app/utils/data';
import { ToastContainer, toast,Zoom, Bounce} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {Cate,Post,UpdatedPost} from '../../../../utils/types'

Quill.register('modules/imageResize', ImageResize);




function SiglePostDashboard() {
    const router = useRouter();
    const params = useParams();
    const { id } = params;
    const [openModal, setOpenModal] = useState(false);
    const [postData, setPostData] = useState<Post | null>(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [sabk, setSabk] = useState('');
    const [file, setFile] = useState<string | File | null>(null);
    const [content, setContent] = useState(postData?.des);
    const [updatedPost, setUpdatedPost] = useState<UpdatedPost | null>(null);
    const[categoryData,setCategoryData] = useState<Cate[] | null>(null)
  const [tag, setTag] = useState<string[] | null>(null);
  
    /*set initail sabk*/
    useEffect(() => {
        if (postData && postData.sabk) {
          setSabk(postData.sabk);
        }
      }, [postData]);
     /*initial value of tages*////
     useEffect(() => {
        if (postData && postData.tags) {
            setTag(postData.tags);
        }
      }, [postData]);
      const handleCheckboxChange = (tagSlug: string) => {
        if (tag) {
          if (tag.includes(tagSlug)) {
            setTag(tag.filter(t => t !== tagSlug));
          } else {
            setTag([...tag, tagSlug]);
          }
        } else {
          setTag([tagSlug]);
        }
      };

  /***************************** */
    useEffect(() => {
        if (postData) {
            setContent(postData.des);
            setCategory(postData.catSlug);
            setTitle(postData.title);
        }
    }, [postData]);
    // GET THE POST FROM API BY CHANGE THE URL
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/dashboard/post/${id}`);
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
    useEffect(() => {
        if (openModal) {
            const updatePostForModal: any = {
                slug: slugify(title),
                title: title,
                value: content,
                file: file || postData?.img,
                catSlug: category,
                des: content,
                sabk: sabk,
                img: file || postData?.img,
                tags: tag,
            };
            setUpdatedPost(updatePostForModal);
        }
    }, [content,file,title,openModal, category, postData?.img ]);
//console.log(postData)
    
const getcategpry =async()=>{
    const res = await fetch('/api/categories');
    const data = await res.json();
    setCategoryData(data);
   }
   useEffect(() => {
     getcategpry();
   }, []);
  // console.log(categoryData)
    const slugify = (text: string) => {
        text= text.toLowerCase().trim().replace(/\s+/g, '-')
         return text;
       }
    // change the conetnet of reacr quill by on cahnge   
    const handelValue = (value:string) => {
        setContent(value);
    };
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatePost: UpdatedPost = {
      slug: slugify(title),
      title: title,
      des: content,
      sabk: sabk,
      img: file || postData?.img,
      catSlug: category,
      tags: tag,
    };

      // Validate fields
      for (const key in updatePost) {
        if (!updatePost[key as keyof UpdatedPost]) {
          toast.error(`لطفا فیلد ${key} را پر کنید.`);
          return;
        }
      }
  

    const response = await fetch(`/api/dashboard/post/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatePost),
    });

    if (response.ok) {
      toast.success('پست با موفقیت ویرایش شد.');
      setTimeout(() => {
        router.push('/dashboard/poems');
        router.refresh();
      }, 3000);
    } else {
      toast.error('خطا در ویرایش پست.');
      throw new Error('Failed to update post');
    }
}// WHEN NEW DATA IS CREATED NOW WE NEED TO SEND TO THE API
    
    if (!postData) {
        return <div>Loading...</div>;
    }



    return (
        <>
        <ToastContainer  position="top-right"  autoClose={5000} />
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

         <WriteModal openModal={openModal} setOpenModal={setOpenModal} values={updatedPost} />  

            <form onSubmit={handleSubmit}>
                <div className='mb-8'>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor">ویرایش عنوان پست <span className='text-xs text-red-500'> ( ضروری )</span></label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="عنوان" required
                         onChange={(e)=>setTitle(e.target.value)}
                        value={title}
                    />

                </div>
                {/* category */}
                <div className=' mb-8'>
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-textColor">دسته بندی <span className='text-xs text-red-500'> ( ضروری )</span></label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full p-2 "
           onChange={(e)=>setCategory(e.target.value)}
           value={category}
         //onChange={formik.handleChange}
          name="category" required
          >
              <option value="">لطفاً یک دسته بندی انتخاب کنید</option>
  {categoryData?.map((cat:Cate) => (
    <option className='rounded-md font-semibold w-48' key={cat.id} value={cat.slug}><span className='py-8 rounded-md mx-5 bg-red-500'
    
    
    >{cat.title}</span></option>
  ))} 
 
  </select>
  </div>
              {/* SABKS */}
              <div className=' mb-8'>
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-textColor">سبک شعر <span className='text-xs text-red-500'> ( ضروری )</span></label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full p-2 "
          
           value={sabk}
           onChange={(e)=>setSabk(e.target.value)}
            name="sabk" required
          >
              <option value="">لطفاً یک  سبک انتخاب کنید</option>
   {sabks?.map((sabk:{ id: number; title: string; slug: string; }) => (
    <option className='rounded-md font-semibold w-48' key={sabk.id}><span className='py-8 rounded-md mx-5 bg-red-500'>{sabk.title}</span></option>
  ))} 
 
  </select>
  </div>
             {/* TAGS************** */}  
             <div className=' mb-8 '>
            <label htmlFor="tags" className="block mb-2 text-sm font-medium text-textColor">تگ‌ها <span className='text-xs text-red-500'> ( ضروری )</span></label> 
            <div id="tags" className='flex flex-wrap gap-2 bg-gray-200 p-2 rounded-md'>
            {tags.map((tagoption: any) => (
                <label key={tagoption.id} className='flex items-center'>
                  <span className='ml-2 text-black'>{tagoption.title}</span>
                  <input
                    type="checkbox"
                    name="tags"
                    value={tagoption.id}
                    checked={tag ? tag.includes(tagoption.tagSlug) : false}
                   onChange={() => handleCheckboxChange(tagoption.tagSlug)} 
                  />
                 
                 
                </label>
              ))}
             
            </div>
          </div>
                    {/* cover image */}
                    <div className='mb-8'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor"> اضافه کردن تصویر <span className='text-xs text-red-500'> ( ضروری )</span></label>

                        <div className=' rounded-md flex md:flex-row flex-col  justify-start items-center gap-5 border border-gray-200 p-4 border-spacing-1 border-1 bg-white'  >
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
    {/* DESCRIPTION */}
    <ReactQuill theme="snow" value={content} onChange={handelValue} modules={modules} formats={formats}  bounds={'#root'} placeholder='****'/>
        <br />

        <button className='bg-green-500  text-white w-36  rounded-md px-4 py-2 hover:bg-green-700 transition' type='submit' > ارسال</button>  

            </form>
        </div>
        </>
    )
   

}




export default SiglePostDashboard





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
    