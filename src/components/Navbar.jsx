import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const navLink = [
  { name: 'works', link: 'works' },
  { name: 'about-me', link: 'about-me' },
  { name: 'contacts', link: 'contacts' }
]

function Navbar() {
  return (
    <ul className='my_navbar d-flex gap-4'>
       <li className='list-unstyled'>
        <span className='link-color'>#</span>
        <NavLink to="/" className="text-decoration-none link-page">home</NavLink>
      </li>
      {navLink.map((item, i) => {
        return (
          <li key={i} className='list-unstyled'>
            <span className='link-color'>#</span>
            <ScrollLink
              className='text-decoration-none link-page'
              to={item.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {item.name}
            </ScrollLink>
          </li>
        )
      })}
    </ul>
  )
}

export default Navbar