import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

// data
import dataProjects from '../dataProjects.json';

function Project() {
    const { id } = useParams();
    const project = dataProjects.find(item => item.id == id)

    if (!project) {
        return <div>Progetto non trovato</div>;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='top' className='section project'>
            <div className='container'>
                <NavLink to="/projects" className='btn text-light mb-5'>
                    <svg className='me-2' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.5em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd"></path></svg>
                    back</NavLink>
                <h2 className='text-center mb-4'>{project.title}</h2>
                <div className='swipe mb-4'>
                    <Swiper
                        pagination={{
                            type: 'progressbar',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        spaceBetween={50}
                        slidesPerView={1}
                    >
                        {project.imgs.map((img, i) => (
                            <SwiperSlide key={i}>
                                <div className='img-wrapper'>
                                    <img src={`../${img}`} alt={img} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div>
                    <div>
                        <p>{project.longDesc}</p>
                    </div>
                    <div className='d-flex flex-column align-items-center gap-3 py-2'>
                        <a className='btn text-light' target="_blank" href={project.git}>
                            <svg className='me-2' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
                            Vedi su Git
                            <svg className='ms-2' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
                        </a>
                        {project.live &&
                            <a target="_blank" href={project.live} className='btn my_button text-light'>Vedi Live</a>
                        }
                    </div>
                    <div className='d-flex gap-4 py-4 flex-wrap'>
                        {project.dev.map((tag, i) => (
                            <p key={i}><span className='primary-text'>#</span>{tag}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project