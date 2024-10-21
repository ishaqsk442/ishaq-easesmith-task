import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './index.css';

const Nursery = () => {
  // Sample data for the Splide items
  const nurseryItems = [
    { id: 1, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: 'https://res.cloudinary.com/dpetyh8cc/image/upload/v1729486056/plant1_aqosr0.png' },
    { id: 2, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: 'https://res.cloudinary.com/dpetyh8cc/image/upload/v1729486121/plant2_rum11o.png'},
    { id: 3, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: "https://res.cloudinary.com/dpetyh8cc/image/upload/v1729486132/plant3_h4fvxq.png" },
    { id: 4, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: 'https://res.cloudinary.com/dpetyh8cc/image/upload/v1729486153/plant4_nxcmup.png' },
    { id: 5, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: 'https://res.cloudinary.com/dpetyh8cc/image/upload/v1729486182/plant5_sifoiy.png'},
    { id: 6, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: 'https://res.cloudinary.com/dpetyh8cc/image/upload/v1729486183/plant6_jj1a7x.png'},
    { id: 7, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: 'https://res.cloudinary.com/dpetyh8cc/image/upload/v1729486188/plant7_xpvrl4.png' },
    { id: 8, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: 'https://res.cloudinary.com/dpetyh8cc/image/upload/v1729486238/plant8_zmixjm.png' },
    { id: 9, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: 'https://res.cloudinary.com/dpetyh8cc/image/upload/v1729486238/plant9_n3ywaq.png' },
    { id: 10, name: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum', image: 'https://res.cloudinary.com/dpetyh8cc/image/upload/v1729486238/plant10_iidks6.png' },
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
