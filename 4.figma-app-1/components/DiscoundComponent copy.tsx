import Image from 'next/image'
import React from 'react'

const DiscoundComponent = () => {
  return (
    <section className="container mx-auto w-full px-2 py-2 mt-16 md:grid grid-cols-2">
      <div className='h-80'>
        <Image src={'/../public/assets/discount.jpg'} alt='img' width={600} height={600}/>
      </div>
      <div className='h-[376px] w-full bg-red-300' >
        <div className='bg-red-500 h-[75%] w-full flex justify-center items-center'>
          <div className='h-[183px] w-[183px] bg-pink-50 rounded-full flex justify-center items-center flex-col'>
            <div className='bg-blue-200 w-[300px] flex justify-center items-center flex-col'>
              <span>DISCOUNT</span>
              <h1 className='text-[60px] font-cookie'>Summer 2019</h1>
              <p><span>SALE </span><span>50%</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscoundComponent