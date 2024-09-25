import React from 'react'
import Chart3 from './Chart3'
import Chart4 from './Chart4'
import LegendItem from './LegendItem'

const ServiceOfferings = () => {
  return (
    <>
     <div className='Chart-outer mt-4'>
        <h3>Service offerings</h3>
        <div className='row'>
            <div className='col-md-4'>
                <Chart3 />
            </div>
            <div className='col-md-8'>
                <Chart4 />
            </div>
        </div>
        <div className='Legend'>
            <LegendItem name={'Number of active services '} color={'#3FE900'} />
            <LegendItem name={'New services added'} color={'#FFE603'} />
            <LegendItem name={'Services removed '} color={'#FF0000'} />
        </div>
        </div> 
    </>
  )
}

export default ServiceOfferings
