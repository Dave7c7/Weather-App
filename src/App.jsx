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
  
  const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=f1e2934521fa36b08463620921ae8927')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);


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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
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
      <BasicCard></BasicCard>
    </>
  )
}

export default App
