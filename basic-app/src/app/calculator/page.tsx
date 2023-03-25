'use client'
import React, { useState } from 'react'

export default function Calculator() {
  const [form1, setForm1] = useState<number>(0)
  const [form2, setForm2] = useState<number>(0)
  const [hasil, setHasil] = useState<number>(0)

  const handleSubmit=(e:any)=>{
    e.preventDefault();
    setHasil(form1+form2)
  }
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input placeholder='angka 1'  onChange={(e)=>setForm1(Number(e.target.value))}/>
        <input placeholder='angka 2'  onChange={(e)=>setForm2(Number(e.target.value))}/>
        <button>hitung</button>
      </form>
      <p>hasil : {hasil}</p>
    </div>
  )
}
