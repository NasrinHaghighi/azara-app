'use client'
import React , { useState ,useEffect ,useMemo} from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
//import ReactQuill from 'react-quill';

import { CiCirclePlus } from "react-icons/ci";
import Upload from '../../components/Dashboard/Upload';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import WriteModal from '../../components/Dashboard/WriteModal';
import Image from 'next/image';

import ReactQuillBox from '../../components/Dashboard/ReactQuilBox';
interface Cate{
  id:number,
  createdAt:string,
  img:string,
  slug:string,
  title:string
}



const sabks=[{id:1,title:'غزل', slug:'ghazal'},{id:2,title:'دوبیتی',slug:'dobaiti'}]
const tags=[{id:1,title:'برگزیده', tagSlug:'selected'},{id:2,title:'طنز', tagSlug:'tanz'}]
function WritPageComponenet() {
    const router = useRouter();
    const session = useSession();
    const role = session.data?.user.role;
  
    useEffect(() => {
      // if (role !== 'user') {
      //   router.push('/')
      // }
    });
  
    const [open, setOpen] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [value, setValue] = useState('');
    const [file, setFile] = useState<File | null>(null);
  const [cate, setCate] = useState<Cate[] | null>(null);
  const [tag, setTag] = useState<string[] | null>(null);
  const [sabk, setSabk] = useState<string | null>(null);
    console.log(sabk)
  const slugify = (text: string) => {
   text= text.toLowerCase().trim().replace(/\s+/g, '-')
    return text;
  }
  
  const handleTagChange = (tagSlug: string) => {
    setTag((prevTag:string[] | null) => {
      if (prevTag) {
        if (prevTag.includes(tagSlug)) {
          return prevTag.filter((item) => item!== tagSlug);
        } else {
          return [...prevTag, tagSlug];
        }
      } else {
        return [tagSlug];
      }
    });

    }
  const handleSabkChange=(value:string) => {
    setSabk(value)
  }
    const handelSubmit = async(values:any) => {
       const res = await fetch('http://localhost:3000/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: slugify(values.title),
          title:values.title,
          des:values.value,
          img:values.file,
          catSlug: values.category,
          tags:tag,
          sabk:sabk
        }),
      })
      //console.log('res', res)
     // console.log('values', values)
    }
  
    //console.log(tag)
      const formik = useFormik({
          initialValues: {
            title: '',
            category: '',
            value: value,
            file: file,
            
          },
          //validationSchema: SignupSchema,
          onSubmit: values => {
           // console.log('Submitting: ', values);
            handelSubmit(values);
  router.push('/');
          },
        });
        useEffect(() => {
           formik.setValues({
              ...formik.values,
              value: value,
              file: file
              
          });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [value, file]);

     const getcategpry =async()=>{
      const res = await fetch('/api/categories');
      const data = await res.json();
     setCate(data);
     }
     useEffect(() => {
       getcategpry();
     }, []);
     
  return (
   <>
   
   <div className='container pb-12 '>
  <h1 className='text-4xl font-bold p-8 text-center'>ایجاد متن جدید<span className='underline '></span></h1>


<div className='flex justify-center gap-10'>
      <button className="bg-rose-500 text-white w-36 rounded-md px-4 py-2 hover:bg-rose-700 transition" onClick={() => setOpenModal(true)}>
      مشاهده متن
      </button>
      
      
     </div>
      <br />
      <br />
      <form onSubmit={formik.handleSubmit}>
       <WriteModal openModal={openModal} setOpenModal={setOpenModal} values={formik.values} />

    
        <div className='mb-8'>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor">عنوان پست جدید <span className='text-xs text-red-500'>(شناسایی پست های شما از طریق عنوان انجام می شود، عنوان نمی تواند تکراری باشد.)</span></label>
          <input
            id="title"
            name="title"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="عنوان" required
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="input feedback text-rose-600">{formik.errors.title}</div>
          ) : null}
        </div>

        <div className=' mb-8'>
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-textColor">دسته بندی</label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full p-2 "
         value={formik.values.category}
         onChange={formik.handleChange}
          name="category"
          >
              <option value="">لطفاً یک دسته بندی انتخاب کنید</option>
  {cate?.map((cat:Cate) => (
    <option className='rounded-md font-semibold w-48' key={cat.id} value={cat.slug}><span className='py-8 rounded-md mx-5 bg-red-500'
    
    
    >{cat.title}</span></option>
  ))}
 
  </select>
          {/* <input
            id="category"
            name="category"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="دسته بندی" required
            onChange={formik.handleChange}
            value={formik.values.category}
          /> */}
          {formik.touched.category && formik.errors.category ? (
            <div className="input feedback text-rose-600">{formik.errors.category}</div>
          ) : null}

        </div>
        <div className=' mb-8'>
            <label htmlFor="tags" className="block mb-2 text-sm font-medium text-textColor">تگ‌ها</label>
            <div id="tags" className='flex flex-wrap gap-2'>
            {tags.map((tag: any) => (
                <label key={tag.id} className='flex items-center'>
                  <span className='ml-2'>{tag.title}</span>
                  <input
                    type="checkbox"
                    name="tags"
                    value={tag.id}
                    //checked={setTag(tag.tagSlug)}
                    onChange={() => handleTagChange(tag.tagSlug)}
                  />
                 
                 
                </label>
              ))}
             
            </div>
          </div>
{/* ****************** */}
<div className="mb-8 ">
          <label className="block mb-2 text-sm font-medium text-textColor">
           سبک شعر
          </label>
          <div id="tags" className='flex flex-wrap gap-2'>
          {sabks.map((sabk) => (
            <div key={sabk.id} className="mb-4 ">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={sabk.slug}
                  // checked={selectedCategory === category.slug}
                   onChange={()=>handleSabkChange(sabk.title)}
                  className="form-radio"
                />
                <span className="ml-2">{sabk.title}</span>
              </label>
            </div>
          ))}
          </div>
        </div>

        {/* *************** */}
        <div className=' mb-8'>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor"> اضافه کردن تصویر</label>
          <div className=' flex felx-row justify-start items-center gap-5'  >
            <div onClick={() => setOpen(!open)}><CiCirclePlus className='text-green-800 text-5xl font-extrabold' /></div>
            {open &&
              <div className='md:flex:row jutify-center items-center gap-5 flex-col'>
                {/* UPLOAD COMPONENT */}
                <Upload setFile={setFile} />
                 {/* UPLOAD COMPONENT */}
<div>
                {file instanceof File && (
  <Image src={URL.createObjectURL(file)} alt='preview' className='h-40 w-40 object-cover rounded-lg' width={40} height={40}/>
)}
{typeof file === 'string' && <Image src={file} alt='preview' width={40} height={40}className='h-40 w-40 object-cover rounded-lg' />}</div>
              </div>
            }
          </div>

        </div>

<ReactQuillBox value={value} setValue={setValue} />
     
<div className='flex justify-center items-center my-5'>
<button className='bg-green-500  text-white w-36  rounded-md px-4 py-2 hover:bg-green-700 transition' type='submit' onSubmit={handelSubmit}> ارسال</button>
</div>
      </form>
    </div>

  
   
   
   </>
  )
}

export default WritPageComponenet