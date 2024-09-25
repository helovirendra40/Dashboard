import React from 'react'
import { CiSearch } from "react-icons/ci";
import { LuBell } from "react-icons/lu";
import { assets } from '../assets/assets';
const Header = () => {
  return (
    <>
     <div className='d-flex  justify-content-between py-3 px-4 bg-white headerDChange'>
        <div className='searchBar'>
            <div className='d-flex gap-2 h-100'>
                <div className='searchIcon h-100'><CiSearch /></div>
                <input className='form-control px-0' placeholder="Search anything..." />
            </div>
        </div>    
        <div className='d-flex gap-3 h'>
            <div className='d-flex gap-3'>
            <button type="button" className="btn btn-theme position-relative">
                <LuBell />
                <span className="position-absolute top-0 start-100 translate-middle badge  bg-theme">
                    10
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
            <button type="button" className="btn btn-theme position-relative">
                <LuBell />
                <span className="position-absolute top-0 start-100 translate-middle badge  bg-theme">
                    10
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
            <button type="button" className="btn btn-theme-red position-relative">
                <LuBell />
                <span className="position-absolute top-0 start-100 translate-middle badge bg-theme-red">
                    10
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
            </div>
            <div>
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={assets.user} alt='userIcon' /> Hi! Virendra
                    </button>
                    <ul className="dropdown-menu">
                        {/* <li><a className="dropdown-item" href="#">Action</a></li> */}
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#">Log Out</a></li>
                    </ul>
                </div>
            </div>
        </div>    
    </div> 
    </>
  )
}

export default Header
