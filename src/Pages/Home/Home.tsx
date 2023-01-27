import React, { useEffect, useState } from 'react'
import './Home.scss'
import TypeWriter from "../../Hook/TypeWriter"
import WeatherAnimation from "../../Animation/WeatherAnimation/WeatherAnimation"
import Pacman from "../../Animation/Pacman/Pacman"
import Cloud from "../../Animation/Cloud/Cloud"
const Home = () => {
  return (
    <div className="home">
      <WeatherAnimation />
      <div className='home__component'>
        <div className="home__component-left">
          <div className="home__component-divider">
            <Pacman />
          </div>
        </div>
        <div className="home__component-right">
            <div className="home__h1-wrapper"><h1>Hello </h1></div>
            <div className="underline"></div>
            <div className="home__bios">
              <p>I AM DONO - 27 YO </p>
              <p>LIVING IN AUCKLAND</p>
              <p>
                I LOVE
                <span>
                  <TypeWriter options={['  CODING !', '  DESIGN !', '  GYM !', '  COOKING !']} />
                </span>
              </p>
              <div id="flip">
                  <div><p>#Front-End Developer</p></div>
                  <div><p>#Fullstack Developer</p></div>
                  <div><p>#Ui/Ux Designer</p></div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home