// "use client"
// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation} from 'swiper';
// import pexels1 from '../../public/assets/pexels1.jpg'
// import pexels2 from '../../public/assets/pexels2.jpg'
// import Image from 'next/image';
// import ButtonComponent from './ButtonComponent';

// const categories=[
//   {
//     name:'pexels1',
//     description:"",
//     image:pexels1,
//     btnText:'Expplore',
//   },
//   {
//     name:'pexels2',
//     description:"",
//     image:pexels2,
//     btnText:'Expplore',
//   }
// ]

// function CategorySlider() {
//   return (
//     <Swiper
//       // install Swiper modules
//       slidesPerView={1}
//       spaceBetween={30}
//       navigation={true}
//       modules={[Navigation]}
//       breakpoints={{
//         700:{
//           slidesPerView:1
//         }
//       }}
//       className='categorieSlider min-h-[660px]'
//       {
//         categories.map((categorie,index)=>{
//           return(
//             <>
//             <SwiperSlide className='bg-slate-300 shadow-md min-h-[480px] rounded-md py-16 px-8 mt-10' key={index}>
//               <div className='flex flc gap-y-5 md:flex-row md:gap-x-16'>
//                 <Image src={categorie.image} height={900} width={1300} alt='img'/>
//                 <div className='flex flex-col gap-y-5'>
//                   <div className='text-2xl font-medium flex gap-x-2 items-center'>
//                     {categorie.name}
//                     <div className='h-[3px] w-[40px] bg-green-600 rounded'></div>
//                     <div className='text-[20px] text-gray-600'>{categorie.description}</div>
//                     <div>
//                       <ButtonComponent link='/' text={categorie.btnText}/>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             </>
//           )
//         })
//       }
//     >
//        {/* <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide> */}
//     </Swiper>
//   )
// }

// export default CategorySlider

import React from 'react'

function CategorySlider() {
  return (
    <div>CategorySlider</div>
  )
}

export default CategorySlider