import React from 'react'
import HeadlineComponent from './HeadlineComponent'
import CategorySlider from './CategorySlider'

function CategoryComponent() {
  return (
    <section id='category' className='bg-slate-200 min-h-[680] py-16 w-screen'>
      <div className='container mx-auto h-[680px]'>
        <HeadlineComponent title='category'/>
        <CategorySlider/>
      </div>
    </section >
  )
}

export default CategoryComponent