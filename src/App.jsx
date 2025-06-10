import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect } from 'react';
import { BasicTextFields } from './Components/BasicTextFields';
import BasicCard from './Components/BasicCard';
import Table from './Components/Table';




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
        
      
      <h1>weather app</h1>
      <div className="card">

        <br/>
        <label htmlFor="StateName">State: </label>
        <input type="text" className="StateName"/>


        <div>
          The current weather for {Location}
          <br />
          {
          /*
            Find a way to display the weather for the current location here
          */
          posts.data}
        </div>


        <br />
        <label htmlFor="Location">Location: </label>
        <input type="text" id="Location" placeholder='Enter city' />
        <br />
        <button id="submit" onClick={() => setLocation((Location) =>{
          Location=document.getElementById("Location").value
          return Location
        })}>
          Search
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <BasicTextFields handleCityChange={handleCityChange} onWeatherDataChange={handleWeatherData} location={Location}></BasicTextFields>

      <BasicCard weatherData={weatherData}></BasicCard>
      <Table location={Location}></Table>

    </>
  )
}

export default App
