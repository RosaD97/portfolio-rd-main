import React, { useContext } from 'react'

import Button from './Button';
import avatar from '../../public/image/avatar.png';
import { LanguageContext } from '../context';

function Jumbotron() {
    const { language, changeLanguage } = useContext(LanguageContext);

    return (
        <div className="section">
            <div className='container jumb mt-2 d-flex flex-column flex-md-row align-items-md-center'>

                {/* it */}
                {language === 'it' ? (
                    <div className='col-0 col-md-6 d-flex flex-column justify-content-center gap-3 '>
                        <h1 className='fw-semibold'>Hello! <br /><br /> Sono Rosy una <span className='primary-text'>Full Stack web Developer </span>
                            e <span className='primary-text'>Web designer</span></h1>
                        <p className='gray-text'>Realizzo siti web responsivi dove le tecnologie incontrano la creatività</p>
                        <Button />
                    </div>
                ) :
                    (
                        <div className='col-0 col-md-6 d-flex flex-column justify-content-center gap-3 '>
                            <h1 className='fw-semibold'>Hello! <br /><br /> I'm Rosy a <span className='primary-text'>Full Stack web Developer </span>
                                & <span className='primary-text'>Web designer</span></h1>
                            <p className='gray-text'>I create responsive websites where technologies meet creativity</p>
                            <Button />
                        </div>
                    )}

                <div className='col-0 col-md-6 d-flex justify-content-center'>
                    <div className='img-wrapper'>
                        <img src={avatar} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron