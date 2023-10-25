import HeaderContentHome from '@/components/HeaderContentHome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  CChart,
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea,
} from '@coreui/react-chartjs'

function index() {


  return (
    <div>
      <HeaderContentHome label='Grafik Piutang Ranap' create='no' />
      <div className='bg-white bg-opacity-70  mt-5 m-3 rounded-md shadow-xl py-2'>
        <div className="overflow-x-auto">
          <div className='w-[70%] mx-auto'>
            <CChart
              type='line'
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Data Piutang Ranap',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    // tooltipLabelColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                  },
                  // {
                  //   label: '2020',
                  //   backgroundColor: 'rgba(255,99,132,0.2)',
                  //   borderColor: 'rgba(255,99,132,1)',
                  //   pointBackgroundColor: 'rgba(255,99,132,1)',
                  //   pointBorderColor: '#fff',
                  //   pointHoverBackgroundColor: '#fff',
                  //   pointHoverBorderColor: 'rgba(255,99,132,1)',
                  //   // tooltipLabelColor: 'rgba(255,99,132,1)',
                  //   data: [28, 48, 40, 19, 96, 27, 100]
                  // }
                ],
              }}
              options={{
                aspectRatio: 1.5,
                // tooltips: {
                //   enabled: true
                // }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index