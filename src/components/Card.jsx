import React from 'react'
import { NavLink } from 'react-router-dom'


function Card({ title, desc, img, id, live }) {
    return (
        <div className="my_card">
            <div className="content">
                <h2 className="title">{title}</h2>
                <p className="copy">{desc}</p>
                <NavLink to={`/project/${id}`} className="my-btn">Vedi Progetto</NavLink>
                {live && <a href={live} target="_blank" className="my-btn">Live</a>}
            </div>
            <div className='img-wrapper'>
                <img src={img} alt="project-image" />
            </div>
        </div>
    )
}

export default Card