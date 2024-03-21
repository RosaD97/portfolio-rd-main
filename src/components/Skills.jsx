import React from 'react'
import avatar from '../../public/image/avatar-3.png';

const skills = [
  {
    title: 'Back end',
    skill: [
      {
        name: 'MySql',
        link: 'https://www.mysql.com/it/'
      },
      {
        name: 'PHP',
        link: 'https://www.php.net/'
      },
      {
        name: 'Lavravel',
        link: 'https://laravel.com/'
      }
    ]
  },
  {
    title: 'Other',
    skill: [
      {
        name: 'Git',
        link: 'https://git-scm.com/'
      },
      {
        name: 'Figma',
        link: 'https://www.figma.com'
      },
      {
        name: 'CSS',
        link: 'https://it.wikipedia.org/wiki/CSS'
      },
      {
        name: 'Sass',
        link: 'https://sass-lang.com/'
      },
      {
        name: 'Bootstrap',
        link: 'https://getbootstrap.com/'
      }
    ]
  },
  {
    title: 'Mobile',
    skill: [
      {
        name: 'React Native',
        link: 'https://reactnative.dev/'
      },
      {
        name: 'Ionic',
        link: 'https://ionicframework.com/'
      }
    ]
  },
  {
    title: 'Front end',
    skill: [
      {
        name: 'HTML',
        link: 'https://www.html.it/'
      },
      {
        name: 'Javascript',
        link: 'https://it.wikipedia.org/wiki/JavaScript'
      },
      {
        name: 'React',
        link: 'https://it.legacy.reactjs.org/'
      },
      {
        name: 'Vue',
        link: 'https://vuejs.org/'
      },
      {
        name: 'Angular',
        link: 'https://angular.io/'
      },
      {
        name: 'NextJS',
        link: 'https://nextjs.org/'
      }
    ]
  },
]

function Skills() {
  return (
    <div className='section'>
      <div className="container skills">
        <div className='title d-flex justify-content-between mb-4'>
          <h3><span className='primary-text'>#</span>skills</h3>
        </div>
        <div className='skill-content d-flex flex-column gap-4 flex-md-row align-items-center'>
          <div className='img-wrapper'>
            <img src={avatar} />
          </div>
          <div className="mini-card-grid d-flex flex-wrap gap-3 justify-content-center">
            {skills.map((item, i) => (
              <article key={i} className="mini-card card d-flex position-relative align-items-center text-center">
                <div className="mini-card-header">
                  <h3>{item.title}</h3>
                </div>
                <div className="mini-card-body d-flex flex-column">
                  {item.skill.map((sk, j) => (
                    <a target="_blank" className='tag text-decoration-none' key={j} href={sk.link}>{sk.name}</a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills