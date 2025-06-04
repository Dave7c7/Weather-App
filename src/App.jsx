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
  
  const handleWeatherData = (data) => {
    setWeatherData(data)
  }

  return (
    <>
        
      
      <h1>weather app</h1>
      <div className="card">
        <br/>
        <label htmlFor="StateName">State: </label>
        <input type="text" className="StateName"/>
        <br />
        <label htmlFor="CityName">City: </label>
        <input type="text" className="CityName" />
        <br />
        <input type="submit" /> 
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <BasicTextFields onWeatherDataChange={handleWeatherData}></BasicTextFields>

      <BasicCard weatherData={weatherData}></BasicCard>
    </>
  )
}

export default App
