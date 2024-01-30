"use client"

import Header from '@/Components/Header'
import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from '@/Components/Cards';
import PlacesCard from '@/Components/PlacesCard';
import Footer from '@/Components/Footer';


const Page = () => {
  const images = [
    { id: 1, src: 'https://img.freepik.com/premium-photo/amazing-panorama-landscape-maldives-beach-tropical-beach-landscape-seascape-luxury-water-villa_398492-16337.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=ais_ai_generated', alt: 'Image 2' },
    { id: 2, src: 'https://img.freepik.com/premium-photo/amazing-panorama-landscape-maldives-beach-tropical-beach-landscape-seascape-luxury-water-villa_398492-16384.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=ais_ai_generated', alt: 'Image 3' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Header/>

    
      <div className=" mx-auto h-screen flex justify-center items-center">

        <Slider {...settings} className="w-full">
        
          {images.map(image => (
            <div key={image.id} className="h-screen w-full">
              
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover"  />
            </div>
          ))}
          
        </Slider>

        
      </div>

  <h1 className=' text-3xl ml-9 mt-6 font-semibold text-stone-700'>Explore Destinations</h1>    
<PlacesCard />
    
    <br/>
    <h1 className=' text-3xl ml-9 mt-5 font-semibold text-stone-700'>Travelers’ Choice: Top hotels
</h1>    

<Cards/>
<br/><br/><br/><br/>
     <Footer/>
    </>
  )
}

export default Page;
