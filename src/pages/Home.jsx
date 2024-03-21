import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Quote from '../components/Quote'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Header from '../components/Header'

function Home() {
    return (
        <>
            <Header />
            <Jumbotron id="home" />
            <Quote />
            <Projects id="works" />
            <Skills id="about-me" />
            <About />
            <Contacts id="contacts" />
        </>
    )
}

export default Home