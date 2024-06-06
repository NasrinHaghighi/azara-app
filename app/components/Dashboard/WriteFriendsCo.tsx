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
import { title } from 'process';
interface Friend{
  id:number,
  createdAt:string,
  img:string,
  slug:string,
  name:string,des:string,poem:string
  sabk:string[],
}

const sabks=[{id:1,title:'غزل', slug:'ghazal'},{id:2,title:'دوبیتی',slug:'dobaiti'},{id:3,title:'شعر نو',slug:'shoar-no'},{id:4,title:'شعر جوان',slug:'shoar-jahan'},{id:5,title:'مثنوی',slug:'masnavi'},{id:6,title:'قصیده',slug:'ghaside'}, {id:7, title:'ترکیب بند', slug:'tarkibband'}]
function WriteFriendsCo() {
    const router = useRouter();
    const session = useSession();
    const [open, setOpen] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [value, setValue] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const [sabk, setSabk] = useState<string []>([]);
    const slugify = (text: string) => {
        text= text.toLowerCase().trim().replace(/\s+/g, '-')
         return text;
       }
       
    const handleSabkChange = (sabkSlug: any) => {
        setSabk((prevSabk) => {
            if (prevSabk) {
                if (prevSabk.includes(sabkSlug)) {
                    return prevSabk.filter((item) => item !== sabkSlug);
                } else {
                    return [...prevSabk, sabkSlug];
                }
            } else {
                return [sabkSlug];
            }
        });
    }

    const handelSubmit = async(values:any) => {
        console.log(values)
        console.log(sabk)
        const res = await fetch('http://localhost:3000/api/friends', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         
         body: JSON.stringify({
           slug: slugify(values.name),
           name:values.name,
            sabk:sabk,
           img:values.file,
           title: values.title,
           des:values.value,
  
         }),
       })
       console.log('res', res)
      console.log('values', values)
     }
    const formik = useFormik({
        initialValues: {
          name: '',
          sabk:sabk,
          file: file,
          title: '',
          value: value,
        
         
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
    return (
        <div className='container pb-12 '>
            <h1 className='text-4xl font-bold p-8 text-center'>ایجاد متن جدید<span className='underline '></span></h1>

            <div className='flex justify-center gap-10'>
                <button className="bg-rose-500 text-white w-36 rounded-md px-4 py-2 hover:bg-rose-700 transition" onClick={() => setOpenModal(true)} >
                    مشاهده متن
                </button>
            </div>
            <br />
            <br />
            <form onSubmit={formik.handleSubmit}>
                {/* مدال */}
            <WriteModal openModal={openModal} setOpenModal={setOpenModal} values={formik.values} />
{/* نام شاعر */}
                <div className='mb-8'>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-textColor">نام شاعر<span className='text-xs text-red-500'>(شناسایی پست های شما از طریق عنوان انجام می شود، عنوان نمی تواند تکراری باشد.)</span></label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نام شاعر" required
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>

           
{/* سبک های شعر*/}
                <div className="mb-8 ">
                    <label className="block mb-2 text-sm font-medium text-textColor">
                        سبک شعر
                    </label>
                    <div id="sabks" className='flex flex-wrap gap-2'>
                        {sabks.map((sabk) => (
                            <div key={sabk.id} className="mb-4 ">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="sabk"
                                        value={sabk.slug}
                                        className="form-radio"
                                        onChange={()=>handleSabkChange(sabk.slug)}
                                        
                                    />
                                    <span className="ml-2">{sabk.title}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
{/* تصویر شاعر */}
                <div className=' mb-8'>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-textColor"> اضافه کردن تصویر</label>
                    <div className=' flex felx-row justify-start items-center gap-5'  >
                        <div onClick={() => setOpen(!open)}><CiCirclePlus className='text-green-800 text-5xl font-extrabold' /></div>
                        {open &&
                            <div className='md:flex:row jutify-center items-center gap-5 flex-col'>
                                <Upload setFile={setFile} />
                                <div>
                                    {file instanceof File && (
                                        <Image src={URL.createObjectURL(file)} alt='preview' className='h-40 w-40 object-cover rounded-lg' width={40} height={40} />
                                    )}
                                    {typeof file === 'string' && <Image src={file} alt='preview' width={40} height={40} className='h-40 w-40 object-cover rounded-lg' />}
                                </div>
                            </div>
                        }
                    </div>
                </div>
{/* نام شعر */}

<div className='mb-8'>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-textColor">نام شعر </label>
                    <input
                        id="name"
                        name="title"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="نام شاعر" required
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                </div>

{/* متن شعر */}
                <ReactQuillBox value={value} setValue={setValue} />

                <div className='flex justify-center items-center my-5'>
                    <button className='bg-green-500  text-white w-36  rounded-md px-4 py-2 hover:bg-green-700 transition' type='submit' > ارسال</button>
                </div>
            </form>
        </div>
    )
}

export default WriteFriendsCo