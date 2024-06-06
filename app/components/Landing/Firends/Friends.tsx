'use client'
import React,{useRef ,useEffect,useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FriendsCard from './FriendsCard';
import Image from 'next/image';



const arr=[1,2,3,4,5,6,7,8,9,10]
function Friends() {
  const [data, setData] = useState([])
  const getData = async () => {
    const res = await fetch('http://localhost:3000/api/friends')
    const data = await res.json()
    setData(data)
    return data
  }
  useEffect(() => {
    getData()
  }, [])
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "5px",
    slidesToShow: 3,
    slidesToscroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },]
  };

  return (
    <div className='mx-12 my-12 relative'>
      <Slider {...settings}>

        {data.map((item: any, index: number) => (
          
         <FriendsCard item={item} key={index} index={index}/>))}

      </Slider>
    </div>
  )
}

export default Friends

   