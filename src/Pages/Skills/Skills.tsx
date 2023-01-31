import React from 'react'
import Bubble from "../../Animation/Bubble/Bubble"
import Tippy from '@tippyjs/react'
import './Skills.scss'

const Skills = () => {
  return (
    <div className='skills-experience'>
      <div className="skills-left">
        <h1>Timeline</h1>
        <div className="timeline">
            <div className="line">
              <Tippy content="May 2022" placement="left" visible={true}>
                <div className="milestone">
                  <div className="dot"></div>
                  <div className="dot2"></div>
                  <p>Aotearoa Energy</p>
                </div>
              </Tippy>
              <Tippy content="2022" placement="left" visible={true}>
                <div className="milestone mil2">
                  <div className="dot"></div>
                  <div className="dot2"></div>
                  <p>Yoobee</p>
                </div>
              </Tippy>
              <Tippy content="2021" placement="left" visible={true}>
                <div className="milestone mil3">
                  <div className="dot "> </div>
                  <div className="dot2"></div>
                  <p>Yoobee</p>
                </div>
              </Tippy>
              <Tippy content="2019" placement="left" visible={true}>
                <div className="milestone mil4">
                  <div className="dot "></div>
                  <div className="dot2"></div>
                  <p>Industrial Fine Art Uni VietNam</p>
                </div>
              </Tippy>
            </div>
          </div>
        </div>
      <div className='skills-right'>
        <h1>Skills & Experience</h1>
        <div className="skills_content">
          <div className="skills__content-item">
            <div className="skills">
              <div className="skill-box">
                <span className="title">Front-end</span>
                <div className="skill-bar">
                  <span className="skill-per front-end">
                    <span className="percent">90%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">Back-end</span>
                <div className="skill-bar">
                  <span className="skill-per back-end">
                    <span className="percent">75%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">UX/UI Deisng</span>
                <div className="skill-bar">
                  <span className="skill-per uiux">
                    <span className="percent">70%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">Graphic Design</span>
                <div className="skill-bar">
                  <span className="skill-per graphic-design">
                    <span className="percent">60%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="skills__content-item">
            <p >
              Beginning my journey as a Student at Yoobee college in 2021, I got chances to learn and work on
              different industrial projects from Graphic Design, and Ui-Ux Design to Web/App Development.
            </p>
            <p>
              Since I started working as a Front-End developer at Aotearoa Energy, I have had opportunities to work with
              different talented people to create Services and website projects for both business and consumer use. The
              main area of my expertise in most of the projects is front-end development and UX/UI design, HTML, CSS, and JS,
              building small and medium web apps, custom plugins, features, animations, and coding/ designing interactive
              layouts. I also have full-stack development experience with popular open-source CMS like WordPress, and
              document databases like MongoDb.
            </p>
            <p>Visit my GitHub profile for more details or contact me!!</p>
          </div>
          <ul className="programs">
            <li><i className="fa-brands fa-html5"></i></li>
            <li><i className="fa-brands fa-css3"></i></li>
            <li><i className="fa-brands fa-react"></i></li>
            <li><i className="fa-brands fa-vuejs"></i></li>
            <li><p>TS</p></li>
            <li><i className="fa-brands fa-figma"></i></li>
  
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills