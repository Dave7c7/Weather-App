import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect } from 'react';
import { BasicTextFields } from './Components/BasicTextFields';
import BasicCard from './Components/BasicCard';




//import * as React from 'react';


function App() {
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
      <BasicTextFields></BasicTextFields>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

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
      <BasicCard></BasicCard>
    </>
  )
}

export default App
