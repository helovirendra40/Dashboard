import React from 'react'
import { assets } from '../assets/assets'
import TopServiceProviderApi from '../pages/Api/TopServiceProviderApi'

const TopServiceCard = () => {
  return (
    <>
      <h3>Top Service Providers</h3>
                <div className='row'>
                    {
                        TopServiceProviderApi.map((curElem, index)=>{
                            return(
                                    <div key={index} className='col-md-3'>
                        <div className='topServeiCard p-2'>
                            <img src={curElem.image} alt="" />
                            <h3 className='py-2 mb-0'>{curElem.title}</h3>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='smallUserIcon'>
                                    <img src={curElem.useIcon1} alt="" />
                                    <img src={curElem.useIcon1} alt="" />
                                    <img src={curElem.useIcon1} alt="" />
                                    <span className='d-inline-block px-2 rounded-4'>+{curElem.num}</span>
                                </div>
                                <div>
                                    <span className='cardGreenPercent d-inline-block px-2 rounded-2'>{curElem.per}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                            )
                        })
                    }
                    
                </div>
    </>
  )
}

export default TopServiceCard
