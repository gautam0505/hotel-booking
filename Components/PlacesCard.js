"use client"
import React from 'react';

const PlacesCard = () => {
  const places = [
    { id: 1, name: 'Paris', image: 'https://img.freepik.com/free-photo/pattaya-chonburi-thailand-28-may-2019-beautiful-landscape-cityscape-pattaya-city-is-popular-destination-thailand-with-white-cloud-blue-sky_74190-8741.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=sph' },
    { id: 2, name: 'Tokyo', image: 'https://img.freepik.com/free-photo/aerial-drone-view-chisinau-downtown-panorama-view-multiple-buildings-roads_1268-18599.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=sph' },
    { id: 3, name: 'London', image: 'https://img.freepik.com/premium-photo/modern-city-architecture-landscape_1417-7870.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=sph' },
    { id: 4, name: 'Dubai', image: 'https://img.freepik.com/free-photo/skyscrapers-sunset_1112-1825.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=sph' },
    { id: 5, name: 'Sydney', image: 'https://img.freepik.com/free-photo/beautiful-view-city-twilight_1137-270.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=sph' },
    { id: 6, name: 'Istanbul', image: 'https://img.freepik.com/free-photo/empty-asphalt-road-through-modern-city-china_1127-3840.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=sph' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-9">
      {places.map(place => (
        <div key={place.id} className="relative group overflow-hidden rounded-md cursor-pointer">
          <div
            className="h-64 bg-cover bg-center transform transition-transform duration-300 scale-100 group-hover:scale-110"
            style={{ backgroundImage: `url('${place.image}')` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 group-hover:opacity-100">
            <h2 className="text-white text-2xl font-bold">{place.name}</h2>

            <h6></h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlacesCard;
