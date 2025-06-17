import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect } from 'react';
import { BasicTextFields } from './Components/BasicTextFields';
import BasicCard from './Components/BasicCard';
import WeatherSignIn from './Components/WeatherSignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";





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
          The current weather for {Location}
          <br />
          It's so warm today
          <br /> 
        <BasicTextFields handleCityChange={handleCityChange} onWeatherDataChange={handleWeatherData} location={Location}></BasicTextFields>
        <BasicCard weatherData={weatherData}></BasicCard>
        

        <Link to="/signin">Sign In</Link>




        </div>
        <br />
      </div>
    </>
  )
}

import { Link } from "react-router-dom";

<Link to="/signin">Sign In</Link>


export default App
