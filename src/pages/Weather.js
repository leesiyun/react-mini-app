import {useEffect, useState} from 'react'
import axios from 'axios'
import Main from '../components/weather/Main'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'

const Weather = () => {
  const [location, setLocation] = useState('tokyo')
  const [inputText, setInputText] = useState('')
  const [weatherData, setWeatherData] = useState()
  const [FiveDayDate, setFiveDayDate] = useState()
  const [isError, setIsError] = useState(false)
  const apiKey = process.env.REACT_APP_WEATHER_KEY
  const getWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,
      )
      .then(res => {
        setWeatherData(res.data)
        setIsError(false)
      })
      .catch(setIsError(true))
  }
  const getFiveDayWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`,
      )
      .then(res => {
        setFiveDayDate(res.data)
        setIsError(false)
      })
      .catch(setIsError(true))
  }
  useEffect(() => {
    getWeather()
    getFiveDayWeather()
  }, [location])

  console.log(FiveDayDate)

  const getCityName = e => setInputText(e.target.value)
  const handleClick = () => setLocation(inputText)

  return (
    <WeatherStyle>
      <div className="search-wrapper">
        <input type="text" onChange={getCityName} placeholder="Search" />
        <button onClick={handleClick}>
          <FaIcons.FaSearch className="icon" />
        </button>
      </div>
      {!isError && weatherData ? (
        <Main weatherData={weatherData} />
      ) : (
        `해당 도시를 찾을 수 없습니다.`
      )}
    </WeatherStyle>
  )
}

const WeatherStyle = styled.div`
  .search-wrapper {
    display: flex;
    justify-content: right;
    margin-bottom: 30px;
    input {
      width: 200px;
      height: 36px;
      border-radius: 20px;
      border: 1px solid #dddd;
      padding: 0 20px;
      font-size: 16px;
    }
    button {
      width: 36px;
      height: 36px;
      margin-left: 10px;
      border-radius: 50%;
      border: 1px solid #ddd;
      background-color: #7bb9f2;
      .icon {
        font-size: 18px;
        padding-top: 2px;
      }
    }
  }
`

export default Weather
