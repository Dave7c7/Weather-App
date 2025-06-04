import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

export function BasicTextFields({ onWeatherDataChange }) {
  const [posts, setPosts] = useState([]);
  const [city, setCity] = useState("New York");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const apiKey = "f1e2934521fa36b08463620921ae8927"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  useEffect(() => {
    fetch(url)
       .then((response) => response.json())
       .then((data) => {
        console.log(data);
        console.log(city);
        onWeatherDataChange(data); // Send data to parent
        setPosts(data);
       })
       .catch((err) => {
        console.log(err.message);
       });
   }, [city, url]);

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="outlined-basic" 
        label="City" 
        variant="outlined"
        value={city}
        onChange={handleCityChange}
      />
    </Box>
  );
}
