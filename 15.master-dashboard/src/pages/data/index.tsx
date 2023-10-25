import HeaderContentHome from '@/components/HeaderContentHome'
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function index() {

  return (
    <div>
      <HeaderContentHome label='Data Piutang Ranap' create='no'/>
      <div className='bg-white bg-opacity-70  mt-5 m-3 rounded-md shadow-xl py-2'>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>nama</th>
                <th>NO RM</th>
                <th>poliklinik</th>
                <th>keluhan</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Nama</td>
                  <td>Nama</td>
                  <td>Nama</td>
                  <td>Nama</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default index