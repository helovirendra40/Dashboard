import React from 'react'
import { assets } from '../assets/assets';
import { MdOutlineHome } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io"

const Navbar = () => {
  return (
    <>
      <div className='leftMenu h-100'>
        <div className='d-flex position-relative flex-column'>
            <div  className='nav1'> <img src={assets.menuToggle} alt="" /> </div>
            <div  className='nav2'>
                <ul className='list-unstyled'>
                <li>
                        <MdOutlineHome />
                    </li>
                    <li>
                        <CiCalendar />
                    </li>
                    
                    <li>
                        <MdOutlineMessage />
                    </li>
                    
                </ul>
            </div>
            <div className='nav3'>
                <ul className='list-unstyled'>
                    <li>
                        <CiSettings />

                    </li>
                    <li>
                        
                        <IoIosHelpCircleOutline />
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
