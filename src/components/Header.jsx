import React from 'react'
import Navbar from './Navbar'
import iconFull from '../../public/image/star-full.png'

import { NavLink } from 'react-router-dom';

function Header() {


  return (
    <div className='container header d-flex justify-content-between py-3'>
      <NavLink className="text-decoration-none text-light d-flex align-items-center gap-2" to={"/"}>
        <div className='img-wrapper'>
          <img src={iconFull} alt="star" />
        </div>
        RosyDev
      </NavLink>

      <div className='d-flex gap-4'>
        <div className='mini-menu'>
          <span className='link-color'>#</span>
          <NavLink
            className='text-decoration-none link-page'
            to="/projects"
          >
            works
          </NavLink>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Header