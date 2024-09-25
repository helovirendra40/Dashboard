import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { assets } from '../assets/assets';
import CardReportApi from './cartReportApi';
import Chart1 from '../components/Chart1';
import ServiceProvider from '../components/ServiceProvider';
import ServiceProviderApi from './Api/TopServiceProviderApi';
import TopServiceProviderApi from './Api/TopServiceProviderApi';
import TopServiceCard from '../components/TopServiceCard';
import ServiceOfferings from '../components/ServiceOfferings';
import RightSide from '../components/RightSide';
import LastGraphs from '../components/LastGraphs';





const Dashboard = () => {
    console.log(CardReportApi);
  return (
    <>
      <div className='d-flex justify-content-between px-4 my-3'>
        <div className='d-flex gap-2 flexChange1'>
        <select className="form-select" style={{width:"151px"}} aria-label="Default select example">
                <option value={"this month"}>This Year</option>
                <option value="1">Last Month</option>
                <option value="2">Last 3 Months</option>
                <option value="3">Last 6 Moths</option>
            </select>
            <select className="form-select" aria-label="Default select example">
                <option value={"this month"}>Location</option>
                <option value="1">Location 1</option>
                <option value="2">Location 2</option>
                <option value="3">Location 3</option>
            </select>
            <select className="form-select" aria-label="Default select example">
                <option value={"this month"}>Status</option>
                <option value="1">Active</option>
                <option value="2">Expired</option>
                {/* <option value="3">Three</option> */}
            </select>
        </div>
        <div className='d-flex gap-3 btnRvrs'>
            <button className='btn btn-primary'>Assign  Order</button>
            <button className='btn btn-primary'> Add New Service Provider</button>
        </div>
      </div>
      <div className='container-fluid px-4'>

     
      <div className='row'>
        <div className='col-xl-8'>
            <div className='row card6Row'>
                    {
                        CardReportApi.map((curElem, index)=>{
                            return(
                                <div key={index} className='col-md-4 mb-4'>
                               <div className='card6-items'>
                        <div className='d-flex align-items-center gap-2'>
                            <div className='icon6-icon'>
                                <img src={curElem.img} alt="" />
                            </div>
                            <div>
                                <p className='mb-0' style={{lineHeight:"22px"}}>{curElem.title}</p>
                                
                                <h3  className='mb-0'style={{lineHeight:"25px"}}> {!curElem.heading == '' ? `${curElem.heading}` : 
                                    <>
                                    <img height={20} src={curElem.star} alt="" />
                                    <img height={20} src={curElem.star} alt="" />
                                    <img height={20} src={curElem.star} alt="" />
                                    <img height={20} src={curElem.star} alt="" />
                                    <img height={20} src={curElem.star} alt="" />
                                    </> }</h3>
                            </div>
                        </div>
                        <hr />
                        <div className='d-flex align-items-center gap-2'>
                            {
                                curElem.ratio ?  
                                    curElem.ratio >= 10 ? <div className='icon6-icon icon6-icon-bottom'>
                                    <img src={assets.green_line_graph} alt="" />
                                </div> : curElem.ratio < 0 ?  <div className='icon6-icon icon6-icon-bottom'>
                                    <img src={assets.red_line_graph} alt="" />
                                </div> : <div className='icon6-icon icon6-icon-bottom'>
                                <img src={assets.yellow_line_graph} alt="" />
                                </div>
                                 : <img src={curElem.userIcon} style={{"height": "40px", width:"40px"}} alt='user' />
                                
                            }
                        

{
                                curElem.ratio >= 10 ? 
                                <div>
                                <p className='mb-0'><span style={{color:"#18CE98"}}>{curElem.ratio}%</span> More </p>
                                <p  className='mb-0'>from last week</p>
                            </div> : curElem.ratio < 0 ?  <div>
                                <p className='mb-0'><span style={{color:"#EE5D50"}}>{curElem.ratio}%</span> More </p>
                                <p  className='mb-0'>from last week</p>
                            </div> : <div>{
                                curElem.ratio > 0 ? <> <p className='mb-0'><span style={{color:"#FBBC05"}}>{curElem.ratio}%</span> More </p><p  className='mb-0'>from last week</p></> : <><p className='mb-0'>{curElem.name}</p>
                                <p className='mb-0'>
                                    <img style={{height:"15px"}} src={curElem.star} alt="star" />
                                    <img style={{height:"15px"}}  src={curElem.star} alt="star" />
                                    <img style={{height:"15px"}}  src={curElem.star} alt="star" />
                                    <img style={{height:"15px"}}  src={curElem.star} alt="star" />
                                    <img style={{height:"15px"}} src={curElem.blankStar} alt="star" /> <span style={{fontSize:"12px"}}>{curElem.rate}</span>
                                </p></>
                                }
                              
                            </div>
                            }
                            
                            
                        </div>
                                </div>
                                </div>
                            )
                        })
                    }
                    
            </div>
            <div className='Chart-outer'>
                <Chart1 />        
            </div>
            <div className='Chart-outer mt-4'>
                <ServiceProvider />
                        
            </div>
            <div className='Chart-outer mt-4'>
                <TopServiceCard />
            </div>
            <ServiceOfferings />

            <LastGraphs />
        </div>
        <div className='col-xl-4'>
            <div  className='RightSideSection p-3'>
                
            <RightSide />
            </div>
        </div>
      </div>

      
      </div>
    </>
  )
}

export default Dashboard
