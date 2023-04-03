import HeroComponent from '@/components/HeroComponent'
import NavbarComponent from '@/components/NavbarComponent'
import CarouselComponent from '@/components/CarouselComponent'
import ProductComponent from '@/components/ProductComponent'
import React from 'react'
import TrenComponent from '@/components/TrenComponent'
import DiscoundComponent from '@/components/DiscoundComponent'

const page = () => {
  return (
    <div>
      <HeroComponent/>
      <ProductComponent/>
      {/* <CarouselComponent/> */}
      {/* <TrenComponent/> */}
      <DiscoundComponent/>
    </div>
  )
}

export default page