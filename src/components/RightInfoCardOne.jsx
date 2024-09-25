import React from 'react'
import { assets } from '../assets/assets'

const RightInfoCardOne = ({ticket, status, raiser, btn1, btn2,msg}) => {
  return (
    <div className='cardCustom'>
      <div className='TopnOne'>
        <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex gap-2 align-items-center'>

                <img src={assets.user} alt="" />
                <div>
                    <h4 className='mb-0'>{ticket}</h4>
                    <p className='mb-0'>{raiser}</p>
                </div>
            </div>
            <div className='d-flex gap-2 justify-content-between'>
                <button className='Rightbtn1 px-2'>{btn1}</button>
                <button className='Rightbtn2 px-2'>{btn2}</button>
            </div>
        </div>
      </div>
      <hr />
      <div className='BottomTwo'>
        <p className='mb-0'>{msg}</p>
        {
            console.log(typeof status)
        }
        {status === 'Open' ? <span className='statusOpen d-inline-block px-2'>Status :   {`${status}`}</span> : status === 'Resolved' ? <span className='statusResolved d-inline-block px-2'>Status :   {`${status}`}</span> : status === 'Pending' ? <div>
            <b>Status</b>
            <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-warning" style={{"width": "75%"}}></div>
            </div>
        </div> : <span className='statusEscalated d-inline-block px-2'>Status :  {`${status}`}</span>}
        
        
      </div>
    </div>
  )
}

export default RightInfoCardOne
