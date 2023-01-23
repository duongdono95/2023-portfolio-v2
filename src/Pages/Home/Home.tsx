import React, { useEffect, useState } from 'react'
import './Home.scss'
import TypeWriter from "../../Hook/TypeWriter"
import Cloud from "../../Animation/Cloud/Cloud"
import Sun from "../../Animation/sun/Sun"
const Home = () => {
  const weather = [
    {'sun' : {
      'backgroundColor' : 'yellow',
      'cloudColor' : "white"
    }},
    {'rainbow' : {
      'backgroundColor' : 'red',
      'cloudColor' : "white"
    }},
    {'thunder' : {
      'backgroundColor' : 'grey',
      'cloudColor' : "white"
    }},
    {'snow' : {
      'backgroundColor' : 'blue',
      'cloudColor' : "white"
    }},
]
  const [weatherIndex, setWeatherIndex] = useState(0)
  const [currentWeather, setCurrentWeather] = useState(weather[weatherIndex])
  console.log(weather[weatherIndex])
  useEffect(()=> {
    setCurrentWeather(weather[weatherIndex])
  },[weatherIndex])
  const changeWeather = () => {
    if (weatherIndex <3 ) {
      setWeatherIndex(weatherIndex + 1)
    } else {
      setWeatherIndex(0)
    }
  }
  return (
    <div className="home">
      <div className='home__component'>
        <div className="home__component-left">
          <div className='animation'>
            <div onClick={changeWeather} className='animated-cloud'>
              <div className='cloud large'>
                <Cloud />
              </div>
              <div className='cloud med'>
                <div><Cloud /></div>
              </div>
              <div className='cloud small'><Cloud /></div>
            </div>
          </div>
        </div>
        <div className="home__component-right">
          <div className="home__component-divider"></div>
          <div className='home__component-content'>
            <div className='home__item-wrapper'><h1>Hello</h1></div>
            <div className="underline"></div>
            <div className="home__bios">
              <p>I AM DONO - 27 YO </p>
              <p>A FRONT-END DEVELOPER </p>
              <p>LIVING IN AUCKLAND</p>
              <p>
                I LOVE
                <span>
                  <TypeWriter options={['  CODING !', '  DESIGN !', '  GYM !', '  COOKING !']} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home