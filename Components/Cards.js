"use client"
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const hotels = [
  { id: 1, name: 'Burj Al Arab', imageUrl: 'https://img.freepik.com/premium-photo/luxury-resort-traveling_48159-5283.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=ais_ai_generated' },
  { id: 2, name: 'The Ritz Paris', imageUrl: 'https://img.freepik.com/premium-photo/modern-bedroom-interior-design-apartment-house-with-furniture-luxury-bedroom-scandinavian_326694-11608.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=ais_ai_generated' },
  { id: 3, name: 'The Savoy', imageUrl: 'https://img.freepik.com/free-photo/room-interior-hotel-bedroom_23-2150683427.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=ais_ai_generated' },
  { id: 4, name: 'The Peninsula -', imageUrl: 'https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683483.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=ais_ai_generated' },
  { id: 5, name: 'Raffles Hotel', imageUrl: 'https://img.freepik.com/free-photo/indoor-design-luxury-resort_23-2150497259.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=ais_ai_generated' },
  { id: 6, name: 'The St. Regis ', imageUrl: 'https://img.freepik.com/free-photo/indoor-design-luxury-resort_23-2150497281.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=ais_ai_generated' },
  { id: 7, name: 'The Ritz-Carlton', imageUrl: 'https://img.freepik.com/free-photo/indoor-design-luxury-resort_23-2150497257.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=ais_ai_generated' }
];

const Cards = () => {
  const [likedHotels, setLikedHotels] = useState([]);

  const toggleLike = (hotelId) => {
    if (likedHotels.includes(hotelId)) {
      setLikedHotels(likedHotels.filter(id => id !== hotelId));
    } else {
      setLikedHotels([...likedHotels, hotelId]);
    }
  };

  const isLiked = (hotelId) => likedHotels.includes(hotelId);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {hotels.map(hotel => (
        <div key={hotel.id} className="p-9">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-40 object-cover" />
            <div className="p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold mb-2">{hotel.name}</h3>
              <button onClick={() => toggleLike(hotel.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                className={`h-6 w-6 ${isLiked(hotel.id) ? 'text-red-500' : 'text-gray-500'}`} 
                viewBox="0 0 20 20" 
                fill="currentColor">
                  <path 
                  fillRule="evenodd" 
                  d="M10 18l-1.45-1.36C4.21 12.91 1 10.25 1 6.5 1 3.46 3.46 1 6.5 1c1.74 0 3.41.86 4.5 2.14C12.09 1.86 13.76 1 15.5 1 18.54 1 21 3.46 21 6.5c0 3.75-3.21 6.41-8.55 10.14L10 18z" 
                  clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Cards;
