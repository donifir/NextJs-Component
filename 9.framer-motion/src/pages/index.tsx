import React from 'react'
import { motion } from "framer-motion"

const index = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 py-10'>
      <motion.div
        animate={{ x: 100 }}
        className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: 100 }}
        className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ x: -100 }}
        transition={{ delay: 2 }}

        className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ rotate: 20 }}
        className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default index