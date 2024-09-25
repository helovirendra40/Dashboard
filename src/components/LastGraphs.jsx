import React from 'react'
import ApexChartOne from './ApexChartOne'
import ApexChartTwo from './ApexChartTwo'

const LastGraphs = () => {
  return (
    <>
     <div className=' mt-4'>
     <div className='row'>
        <div className='col-md-5  mb-3'>
          <div className='Chart-outer h-100'>
     <h3>Performance Metrics & Feedback</h3>

            <ApexChartOne />
          </div>
        </div>
        <div className='col-md-7 mb-3'>
          <div className='Chart-outer h-100'>
     <h3>Service Providers Report</h3>


            <ApexChartTwo />
          </div>
        </div>
     </div>
        </div> 
    </>
  )
}

export default LastGraphs
