import React, { useEffect } from 'react'
import Card from './Card'
import { NavLink } from 'react-router-dom'
import dataProjects from '../dataProjects.json';

function Projects() {
  return (
    <div id='works' className="section">
      <div className='container projects py-4'>
        <div className='title d-flex justify-content-between'>
          <h3 className='d-flex align-items-center'> <span className='primary-text'>#</span>projects</h3>
          <NavLink className="view-all text-decoration-none fw-normal" to="/projects">View all</NavLink>
        </div>
        <div className='d-flex flex-column flex-md-row gap-4 justify-content-between'>
          {dataProjects.slice(0,3).map((item, i) => (
            <Card key={i}
              img={item.imgs[0]}
              title={item.title}
              id={item.id}
              desc={item.desc} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects