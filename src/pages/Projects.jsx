import React, { useEffect } from 'react'
import Card from '../components/Card'
import projects from '../dataProjects.json';
import { NavLink } from 'react-router-dom';

function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='section'>
            <div className='container'>
                <NavLink to="/" className='btn text-light mb-5'>
                    <svg className='me-2' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.5em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd"></path></svg>
                    back</NavLink>
                <div>
                    <h3 className='mb-3'><span className='primary-text'>#</span>full stack projects</h3>
                    <div className='d-flex gap-4 flex-md-row flex-wrap'>
                        {projects.slice(0, 4).map((item, i) => (
                            <Card
                                key={i}
                                img={item.imgs[0]}
                                title={item.title}
                                id={item.id}
                                desc={item.desc}
                                live={item.live}
                            />
                        ))}
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='mb-3'><span className='primary-text'>#</span>small projects</h3>
                    <div className='d-flex gap-4 flex-md-row flex-wrap'>
                        {projects.slice(4).map((item, i) => (
                            <Card
                                key={i}
                                img={item.imgs[0]}
                                title={item.title}
                                id={item.id}
                                desc={item.desc}
                                live={item.live} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects