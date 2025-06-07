import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect } from 'react';
import { BasicTextFields } from './Components/BasicTextFields';
import BasicCard from './Components/BasicCard';




//import * as React from 'react';


function App() {

  const [count, setCount] = useState(0)
  const [weatherData, setWeatherData] = useState(null)
  const [posts, setPosts] = useState([])
  const [Location, setLocation] = useState(`United States`)

  
    const handleCityChange = (event) => {
    setLocation(event.target.value);
  };
  const handleWeatherData = (data) => {
    setWeatherData(data)
  }
  console.log(weatherData)


  return (
    <>
      <h1>Weather App</h1>
      <div className="card">
        <div>
          The current weather for
          <br />
        <BasicTextFields handleCityChange={handleCityChange} onWeatherDataChange={handleWeatherData} location={Location}></BasicTextFields>
        <BasicCard weatherData={weatherData}></BasicCard>
        </div>
        <br />
      </div>
    </>
  )
}

export default App
