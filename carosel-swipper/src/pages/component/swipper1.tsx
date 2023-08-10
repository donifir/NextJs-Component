import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay, } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
      
      >
        <SwiperSlide><div className='h-52'>1</div></SwiperSlide>
        <SwiperSlide><div className='h-52'>1</div></SwiperSlide>
        <SwiperSlide><div className='h-52'>1</div></SwiperSlide>
        <SwiperSlide><div className='h-52'>1</div></SwiperSlide>
        <SwiperSlide><div className='h-52'>1</div></SwiperSlide>
        <SwiperSlide><div className='h-52'>1</div></SwiperSlide>
        <SwiperSlide><div className='h-52'>1</div></SwiperSlide>
        <SwiperSlide><div className='h-52'>1</div></SwiperSlide>
        <SwiperSlide><div className='h-52'>1</div></SwiperSlide>
      </Swiper>
    </>
  );
}
