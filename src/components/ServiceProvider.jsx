import React from 'react'
import Chart1 from './Chart1'
import Chart2 from './Chart2'
import IndiaMap from './IndiaMap'

const ServiceProvider = () => {
  return (
    <>
     <div className='row'>
                    <div className='col-md-6'>
                        <div className='Chart-outer shadow-map height'>
                            <Chart2 /> 
                            
                        </div>
                        {/* <ServiceProvider /> */}
                    </div>
                    <div className='col-md-6'>
                        <div className='Chart-outer shadow-map'>
                            <IndiaMap /> 
                        </div>
                    {/* <ServiceProvider /> */}
                    </div>
                </div> 
    </>
  )
}

export default ServiceProvider
