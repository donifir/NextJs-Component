'use client'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './redux/app/hook';
import { DataSUplier, getSuplierList } from './redux/features/suplierSlice';

const page = () => {

  const getDataSuplier = useAppSelector(state => state.suplier.data)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSuplierList())
  }, [dispatch])
  
  return (
    <div className=''>
      {/* <p>{JSON.stringify(getDataSuplier)}</p>
       */}
       {getDataSuplier.map((suplier, index) => (
						<tr key={index}>
              <td>{index+1}</td>
              <td>{suplier.nama_suplier}</td>
              <td>{suplier.alamat_suplier}</td>
              <td>{suplier.telp_suplier}</td>
            </tr>
					))}
    </div>
  )
}

export default page