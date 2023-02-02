
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
      backgroundColor : 'rgba(0, 119, 255, 0.2)',
      cloudColor : "rgba(253, 255, 168, 0.5)"
    },
    { name: 'rainbow',
      backgroundColor : 'rgba(251, 255, 0, 0.5)',
    },
    { name: 'thunder' ,
      backgroundColor : 'rgba(26, 0, 99, 0.6)',
    },
    { name: 'snow',
      backgroundColor : 'rgba(0, 60, 175, 0.6)',
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
      <div className='animated-cloud'>
          <div onClick={changeWeather} className='cloud large'><Cloud cloudColor={currentWeather.cloudColor} /></div>
          {currentWeather.name === 'sun' && <Sun />}
          <div onClick={changeWeather} className='cloud med'><div><Cloud cloudColor={currentWeather.cloudColor}/></div></div>
          {<div className='rainbow'>{currentWeather.name === 'rainbow' && <Rainbow />}</div>}
          <div onClick={changeWeather} className='cloud small'><Cloud cloudColor={currentWeather.cloudColor}/></div>
          <div className='thunder-container'>
            <div className='large'>{currentWeather.name === 'thunder' && <Thunder />}</div>
            <div className='med1'>{currentWeather.name === 'thunder' && <Thunder />}</div>
            <div className='med2'>{currentWeather.name === 'thunder' && <Thunder />}</div>
            <div className='rain'>{currentWeather.name === 'thunder' && <Rain />}</div>
            <div className='snow'>{currentWeather.name === 'snow' && <Snow />}</div>
          </div>
          <div className='bubble'><Bubble /></div>
          <div className="weather__pills">
          {
          weather.map((item, index) => {
            return (
              <>
                {item.name === 'sun' &&
                (<div onClick={() => {setWeatherIndex(index)}} className={weatherIndex === index ? "weather__pill pill__active" :"weather__pill"}>
                  <i className="fa-solid fa-sun"></i>
                </div>)}
                {item.name === 'rainbow' &&
                (<div onClick={() => {setWeatherIndex(index)}} className={weatherIndex === index ? "weather__pill pill__active" :"weather__pill"}>
                  <i className="fa-solid fa-rainbow"></i>
                </div>)}
                {item.name === 'thunder' &&
                (<div onClick={() => {setWeatherIndex(index)}} className={weatherIndex === index ? "weather__pill pill__active" :"weather__pill"}>
                  <i className="fa-solid fa-cloud-bolt"></i>
                </div>)}
                {item.name === 'snow' &&
                (<div onClick={() => {setWeatherIndex(index)}} className={weatherIndex === index ? "weather__pill pill__active" :"weather__pill"}>
                  <i className="fa-solid fa-snowflake"></i>
                </div>)}
              </>)
            })
          }
          </div>
      </div>

    </div>
  )
}

export default WeatherAnimation