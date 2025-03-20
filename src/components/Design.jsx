import React from 'react'
import { NavLink } from 'react-router-dom'
// import design from '../dataDesign.json'

function Design() {

    return (
        <div className='section'>
            <div className='container'>
                <div className='ringContainer my-4'>
                    <div className="ring">
                        <i style={{ '--clr': '#d795e9' }} className="primary"></i>
                        <i style={{ '--clr': '#501d5e' }} className="secondary"></i>
                        <i style={{ '--clr': '#b926e2' }} className="tertiary"></i>
                        <div className="justify-content-center position-absolute flex-column display-flex text-center">
                            {/* <h2 className='mb-5'>Vedi progetti di Design</h2> */}
                            <NavLink className="my-btn view-all text-decoration-none fw-normal object-fit-contain" to="/design">Vai ai Design</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design
