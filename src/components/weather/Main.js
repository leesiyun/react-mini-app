import Lottie from 'lottie-react'
import * as WeaterIcon from '../../assets/weather'
import styled from 'styled-components'

const Main = ({weatherData}) => {
  const getWeatherIcon = iconData => {
    if (iconData === '01d') return WeaterIcon.DayClearSky
    if (iconData === '01n') return WeaterIcon.NightClearSky
    if (iconData === '02d') return WeaterIcon.DayFewClouds
    if (iconData === '02n') return WeaterIcon.NightFewClouds
    if (iconData === '03d') return WeaterIcon.DayScatteredClouds
    if (iconData === '03n') return WeaterIcon.NightScatteredClouds
    if (iconData === '04d') return WeaterIcon.DayBrokenClouds
    if (iconData === '04n') return WeaterIcon.NightBrokenClouds
    if (iconData === '09d') return WeaterIcon.DayShowerRains
    if (iconData === '09n') return WeaterIcon.NightShowerRains
    if (iconData === '10d') return WeaterIcon.DayRain
    if (iconData === '10n') return WeaterIcon.NightRain
    if (iconData === '11d') return WeaterIcon.DayThunderstorm
    if (iconData === '11n') return WeaterIcon.NightThunderstorm
    if (iconData === '13d') return WeaterIcon.DaySnow
    if (iconData === '13n') return WeaterIcon.NightSnow
    if (iconData === '50d') return WeaterIcon.DayMist
    if (iconData === '50n') return WeaterIcon.NightMist
  }
  return (
    <MainStyle>
      <Lottie
        animationData={getWeatherIcon(weatherData.weather[0].icon)}
        loop={true}
        className="icon"
      />
      <div className="city-name"> {weatherData.name}</div>
      <div className="city-temp">
        {Math.round(weatherData.main.temp - 273.15) + '°'}
      </div>
      <div>{weatherData.weather[0].description}</div>
      <div>
        <span>
          {'Max:' + Math.round(weatherData.main.temp_max - 273.15) + '°'}
        </span>
        <span>
          {'Min:' + Math.round(weatherData.main.temp_min - 273.15) + '°'}
        </span>
      </div>
    </MainStyle>
  )
}

const MainStyle = styled.div`
  padding: 30px 0 0 0;
  border: 1px solid #ddd;
  text-align: center;
  box-shadow: 0 0 12px #dddddd;
  border-radius: 20px;
  height: 580px;
  width: 400px;
  .icon {
    margin-left: 56px;
    width: 300px;
  }
  .city-name {
    font-size: 20px;
  }
  .city-temp {
    font-size: 50px;
    padding: 14px 0;
  }
  span:first-child {
    margin-right: 10px;
  }
`

export default Main
