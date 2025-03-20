import React, { useContext } from 'react'
import avatar from '../../public/image/avatar-2.png';
import { LanguageContext } from '../context';


function About() {

  const { language } = useContext(LanguageContext);

  return (
    <div id='about-me' className='section'>
      <div className='container'>
        <div className='title'>
          <h3><span className='primary-text'>#</span>about me</h3>
        </div>
        <div className='about d-flex flex-column flex-md-row align-items-center'>
          {language === 'it' ?
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
            :
            <p className='text'>
              Hello, I'm Rosa!
              <br />
              <br />
              I'm a full stack web developer based in Lucca with a strong passion for
              technology  
              and creativity.
              After over a year of study and work, i have specialized in creating 
              engaging and intuitive digital experiences, both for web and mobile.
              <br />
              Throughout my journey, I have faced stimulating challenges and 
              learned to adapt quickly to new technologies.
              <br />
              I enjoy putting my creativity at the service of every project and strongly believe in teamwork: 
              in collaboration to achieve ambitious goals!
            </p>
          }

          <div className='img-wrapper'>
            <img src={avatar} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About