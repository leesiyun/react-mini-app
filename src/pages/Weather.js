import {useEffect, useState} from 'react'
import Lottie from 'lottie-react'
import dayClearSky from '../assets/weather/day-clear-sky.json'
import nightClearSky from '../assets/weather/night-clear-sky.json'
import dayFewClouds from '../assets/weather/day-few-clouds.json'
import nightFewClouds from '../assets/weather/night-few-clouds.json'
import dayScatteredClouds from '../assets/weather/day-scattered-clouds.json'
import nightScatteredClouds from '../assets/weather/night-scattered-clouds.json'
import dayBrokenClouds from '../assets/weather/day-broken-clouds.json'
import nightBrokenClouds from '../assets/weather/night-broken-clouds.json'
import dayShowerClouds from '../assets/weather/day-shower-rains.json'
import nightShowerClouds from '../assets/weather/night-shower-rains.json'
import dayRain from '../assets/weather/day-rain.json'
import nightRain from '../assets/weather/night-rain.json'
import dayThunderstorm from '../assets/weather/day-thunderstorm.json'
import nightThunderstorm from '../assets/weather/night-thunderstorm.json'
import daySnow from '../assets/weather/day-snow.json'
import nightSnow from '../assets/weather/night-snow.json'
import dayMist from '../assets/weather/day-mist.json'
import nightMist from '../assets/weather/night-mist.json'

const Weather = () => {
  const [location, setLocation] = useState('seoul')
  const [inputText, setInputText] = useState('')
  const [weatherData, setWeatherData] = useState()
  const getWeather = async () => {
    const json = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_KEY}`,
      )
    )
      .json()
      .catch(e => console.log(e))
    setWeatherData(json)
  }
  useEffect(() => {
    getWeather()
  }, [location])

  const getCityName = e => setInputText(e.target.value)

  const handleClick = () => setLocation(inputText)
  const getWeatherIcon = iconData => {
    if (iconData === '01d') return dayClearSky
    if (iconData === '01n') return nightClearSky
    if (iconData === '02d') return dayFewClouds
    if (iconData === '02n') return nightFewClouds
    if (iconData === '03d') return dayScatteredClouds
    if (iconData === '03n') return nightScatteredClouds
    if (iconData === '04d') return dayBrokenClouds
    if (iconData === '04n') return nightBrokenClouds
    if (iconData === '09d') return dayShowerClouds
    if (iconData === '09n') return nightShowerClouds
    if (iconData === '10d') return dayRain
    if (iconData === '10n') return nightRain
    if (iconData === '11d') return dayThunderstorm
    if (iconData === '11n') return nightThunderstorm
    if (iconData === '13d') return daySnow
    if (iconData === '13n') return nightSnow
    if (iconData === '50d') return dayMist
    if (iconData === '50n') return nightMist
  }

  return (
    <div>
      <input type="text" onChange={getCityName} />
      <button onClick={handleClick}>Seach</button>
      {weatherData ? (
        <div>
          <Lottie
            animationData={getWeatherIcon(weatherData.weather[0].icon)}
            loop={true}
          />
          <div> {weatherData.name}</div>
          <div>{Math.round(weatherData.main.temp - 273.15) + '°'}</div>
          <div>{weatherData.weather[0].description}</div>
        </div>
      ) : null}
    </div>
  )
}

export default Weather
