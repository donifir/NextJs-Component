import React from 'react'
import HeadlineComponent from './HeadlineComponent'
import CardComponent from './CardComponent'

function ProductComponent() {
  return (
    <div id='product' className='max-w-[1640px] mx-auto p-4 py-16 w-screen'>
      <HeadlineComponent title='Products'/>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-16'>
        <CardComponent image='./assets/pexels1.jpg' title='pexels1'/>
        <CardComponent image='./assets/pexels2.jpg' title='pexels1'/>
        <CardComponent image='./assets/pexels3.jpg' title='pexels1'/>
        <CardComponent image='./assets/pexels1.jpg' title='pexels1'/>
        <CardComponent image='./assets/pexels2.jpg' title='pexels1'/>
        <CardComponent image='./assets/pexels3.jpg' title='pexels1'/>
      </div>
    </div>
  )
}

export default ProductComponent