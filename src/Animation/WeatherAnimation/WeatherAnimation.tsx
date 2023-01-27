
import React, { useEffect, useState } from 'react'
import './WeatherAnimation.scss'
import Cloud from "../../Animation/Cloud/Cloud"
import Sun from "../sun/Sun"
import Thunder from "../Thunder/Thunder"
import Rain from "../Rain/Rain"
import Rainbow from "../Rainbow/Rainbow"
import Snow from "../Snow/Snow"
import Bubble from "../Bubble/Bubble"
const WeatherAnimation = () => {
  const weather = [
    {  name:'sun',
      backgroundColor : 'rgba(251, 255, 0, 0.5)',
    },
    { name: 'rainbow',
      backgroundColor : 'rgba(255, 90, 90, 0.6)',
    },
    { name: 'thunder' ,
      backgroundColor : 'rgba(26, 0, 99, 0.6)',
    },
    { name: 'snow',
      backgroundColor : 'rgba(0, 119, 255, 0.2)',
    },
]
const [weatherIndex, setWeatherIndex] = useState(0)
const [currentWeather, setCurrentWeather] = useState(weather[weatherIndex])
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
    <div style={{backgroundColor:`${currentWeather.backgroundColor}`}} className='weather__animation'>
      <div onClick={changeWeather} className='animated-cloud'>
          <div className='cloud large'><Cloud /></div>
          {currentWeather.name === 'sun' && <Sun />}
          <div className='cloud med'><div><Cloud /></div></div>
          {<div className='rainbow'>{currentWeather.name === 'rainbow' && <Rainbow />}</div>}
          <div className='cloud small'><Cloud /></div>
          <div className='thunder-container'>
            <div className='large'>{currentWeather.name === 'thunder' && <Thunder />}</div>
            <div className='med1'>{currentWeather.name === 'thunder' && <Thunder />}</div>
            <div className='med2'>{currentWeather.name === 'thunder' && <Thunder />}</div>
            <div className='rain'>{currentWeather.name === 'thunder' && <Rain />}</div>
            <div className='snow'>{currentWeather.name === 'snow' && <Snow />}</div>
          </div>
          <div className='bubble'><Bubble /></div>

      </div>
    </div>
  )
}

export default WeatherAnimation