import React from 'react'
import WeatherAnimation from '../../Animation/WeatherAnimation/WeatherAnimation'
import './About.scss'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <WeatherAnimation />
      </div>
      <div className="about-right">
        <h1>ABOUT DONO?</h1>
        <p >
          Hi there, I am Dono/ a Front-end Developer located in Auckland, New Zealand. I have a passion for UI Design/
          effects and Creating intuitive, dynamic User Experience. Although my ultimate goal is to be a comprehensive
          full-stack developer, my main specialization is Front-End. I believe that only a combination of professional
          code and moderm design can deliver a great user experience . Coding and Designing are not only my job, they
          are also my passion. To get deeper into the industry, i set myself new challenges day by day. i consider
          myself as a well-organized person, problem solver and an independent employer. Aside from hat, i love gym and
          outdoor activities. Some people do say that I'm good at drawing.
        </p>
        <h1>MISSION STATEMENT</h1>
        <p>
          <b>Your code is only as good as its weakest part. </b>This is my main principle and motto. I care primarily
          about the quality of the code. My ambition is to create original, atypical and challenging projects. Tried and
          conventional ideas are out of my interest. I would like to work with professionals to exchange experience and
          learn all the time.
        </p>
        <div className="about__cta-link"><a href="/contact">Let's make something Special !!!</a></div>
      </div>
  </div>
  )
}

export default About