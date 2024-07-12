'use client'

import React ,{useMemo,useRef}from 'react'
import dynamic from "next/dynamic";
import ImageResize from 'quill-image-resize-module-react';
import Quill from 'quill';

import 'react-quill/dist/quill.snow.css';
Quill.register('modules/imageResize', ImageResize);

import QuillBetterTable from 'quill-better-table'
import 'quill-better-table/dist/quill-better-table.css';



/********* */
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
  'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent', 'link', 'image', 'video', 'color', 'align', 'background',
  'code-block', 'table', 'table-cell-line', 'table-header-cell-line', 'table-body-cell-line',
];
/********** */
Quill.register('modules/better-table', QuillBetterTable);
Quill.register('modules/imageResize', ImageResize);
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function ReactQuillBox({ value, setValue }: any) {
  
  

  return (<>
    {(typeof window !== 'undefined') ?
      <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} formats={formats} bounds={'#root'} placeholder='****' className='bg-white text-textColor'  />
      : <div>loading....</div>
    }
  </>
  )
}

export default ReactQuillBox
