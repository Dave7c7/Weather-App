import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

export function BasicTextFields({ onWeatherDataChange, location, handleCityChange }) {
  const [posts, setPosts] = useState([]);
  const apiKey = "f1e2934521fa36b08463620921ae8927"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`

  useEffect(() => {
    fetch(url)
       .then((response) => response.json())
       .then((data) => {
        if (!data.cod || data.cod === '404' || data.cod === '400') {
          console.log('Invalid data');
          return;
        }

        onWeatherDataChange(data);
        setPosts(data);
       })
       .catch((err) => {
        console.log(err.message);
       });
   }, [location, url]);

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="Location" 
        label="Enter a location" 
        variant="outlined"
        value={location}
        onChange={handleCityChange}
      />
    </Box>
  );
}
