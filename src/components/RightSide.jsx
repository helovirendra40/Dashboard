import React from 'react'
import RightTitle from './RightTitle'
import { MdSupportAgent } from "react-icons/md";
import RightInfoCardOne from './RightInfoCardOne';

const RightSide = () => {
  return (
    <>
        <div className='d-flex align-items-center gap-2'>
            <MdSupportAgent />
            <h2>Support & Compliance</h2>
        </div>
        <RightTitle name={'Support tickets'} /> 
        <RightInfoCardOne ticket={'019273645'} status={'Open'} raiser={'Name of the Raiser'} btn1={'Technical Error'} btn2={'Healthcare'} msg={'I am facing Technical Issue during the Signup process'} />
        <RightInfoCardOne ticket={'019273645'} status={'Escalated'} raiser={'Name of the Raiser'} btn1={'Technical Error'} btn2={'Healthcare'} msg={'I am facing Technical Issue during the Signup process'} />
        

        <RightTitle name={'Open tickets '} /> 
        <RightInfoCardOne ticket={'019273645'} status={'Open'} raiser={'Name of the Raiser'} btn1={'Payment'} btn2={'Healthcare'} msg={'I am facing Technical Issue during the Signup process'} />
        <RightInfoCardOne ticket={'019273645'} status={'Escalated'} raiser={'Name of the Raiser'} btn1={'Technical Error'} btn2={'Healthcare'} msg={'I am facing Technical Issue during the Signup process'} />
        
        <RightTitle name={'In Progress'} /> 
        <RightInfoCardOne ticket={'019273645'} status={'Pending'} raiser={'Mr. Verendra'} btn1={'Payment'} btn2={'Healthcare'} msg={''} />
        <RightInfoCardOne ticket={'019273645'} status={'Pending'} raiser={'Mr. Verendra'} btn1={'Technical Error'} btn2={'Healthcare'} msg={''} />
        

        <RightTitle name={'Solved'} /> 
        <RightInfoCardOne ticket={'019273645'} status={'Resolved'} raiser={'Mr. Verendra'} btn1={'Payment'} btn2={'Healthcare'} msg={'I am facing Technical Issue during the Signup process'} />
        <RightInfoCardOne ticket={'019273645'} status={'Resolved'} raiser={'Mr. Verendra'} btn1={'Technical Error'} btn2={'Healthcare'} msg={'I am facing Technical Issue during the Signup process'} />
        
        <RightTitle name={'Compliance Status'} /> 
        <RightInfoCardOne ticket={'019273645'} status={'Pending'} raiser={'Mr. Verendra'} btn1={'Payment'} btn2={'Healthcare'} msg={''} />
        <RightInfoCardOne ticket={'019273645'} status={'Pending'} raiser={'Mr. Verendra'} btn1={'Technical Error'} btn2={'Healthcare'} msg={''} />
        
        <button className='btn btn-primary'>Raise a Ticket</button>
    </>
  )
}

export default RightSide
