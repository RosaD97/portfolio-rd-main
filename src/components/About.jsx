import React from 'react'
import avatar from '../../public/image/avatar-2.png';


function About() {
  return (
    <div id='about-me' className='section'>
      <div className='container'>
        <div className='title'>
          <h3><span className='primary-text'>#</span>about me</h3>
        </div>
        <div className='about d-flex flex-column flex-md-row align-items-center'>
          <p className='text'>
            Ciao, sono Rosa!
            <br />
            <br />
            Sono una sviluppatrice full stack con sede a Lucca con una forte passione per il mondo della tecnologia
            e creatività.
            Dopo oltre un anno di studio e lavoro mi sono
            specializzata nel creare
            esperienze digitali coinvolgenti e intuitive, sia per il web che mobile.
            <br />
            Durante il mio percorso ho affrontato sfide stimolanti e ho imparato ad
            adattarmi rapidamente a nuove tecnologie.
            <br />
            Mi piace mettere la mia creatività al servizio di ogni progetto e
            credo molto nel lavoro di squadra: alla collaborazione per raggiungere
            obiettivi ambiziosi!
          </p>
          <div className='img-wrapper'>
            <img src={avatar} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About