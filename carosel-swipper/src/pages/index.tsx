import React from 'react'
import Swipper1 from './component/swipper1'
import Swipper2 from './component/swipper2'
import Swipper3 from './component/swipper3'

const index = () => {
  return (
    <div>
      <div className='py-10'>
        <Swipper1 />
      </div>
      <div className='py-10'>
        <Swipper2 />
      </div>
      <div className='py-10'>
        <Swipper3 />
      </div>
    </div>
  )
}

export default index