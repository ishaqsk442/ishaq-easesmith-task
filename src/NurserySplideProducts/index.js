import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './index.css'; // Optional: add your custom styles

import plant1 from '../Assets/plant1.png'
import plant2 from '../Assets/plant2.png'
import plant3 from '../Assets/plant3.png'
import plant4 from '../Assets/plant4.png'
import plant5 from '../Assets/plant5.png'
import plant6 from '../Assets/plant6.png'
import plant7 from '../Assets/plant7.png'
import plant8 from '../Assets/plant8.png'
import plant9 from '../Assets/plant9.png'
import plant10 from '../Assets/plant10.png'
const Nursery = () => {
  // Sample data for the Splide items
  const nurseryItems = [
    { id: 1, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: plant1 },
    { id: 2, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: plant2 },
    { id: 3, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: plant3 },
    { id: 4, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: plant4 },
    { id: 5, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: plant5},
    { id: 6, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: plant6},
    { id: 7, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: plant7 },
    { id: 8, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: plant8 },
    { id: 9, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: plant9 },
    { id: 10, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: plant10 },
  ];

  return (
    <div className="nursery-container">
      <Splide
        options={{
          type: 'loop',
          perPage: 6,
          autoplay: true,
          gap: '1rem',
          pagination: false,
          breakpoints: {
            768: {
              perPage: 2, // 2 items per page for screens smaller than 768px (mobile)
            },
          },
        }}
      >
        {nurseryItems.map((item) => (
          <SplideSlide key={item.id}>
            <div className="nursery-item">
              <img src={item.image} alt={item.name} className="nursery-image" />
              <p>{item.name}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Nursery;
