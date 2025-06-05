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

  const [Location, setLocation] = useState(`United States`)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=f1e2934521fa36b08463620921ae8927`
  const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetchWeather()
  }, [Location]);

  const fetchWeather = () =>{
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setPosts(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }



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
        <input id="Location" type="text" />
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
      <BasicTextFields onWeatherDataChange={handleWeatherData}></BasicTextFields>

      <BasicCard weatherData={weatherData}></BasicCard>
    </>
  )
}

export default App
