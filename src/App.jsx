import {useState} from 'react'
import './App.css'
import {BasicTextFields} from './Components/BasicTextFields';
import BasicCard from './Components/BasicCard';
import Table from './Components/Table';

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [Location, setLocation] = useState(`United States`)
  const [isChecked, setIsChecked] = useState(false)

  function handleCheck(event){
    const checked = event.target.checked
    setIsChecked(checked)
    convertTemp(checked)
  }
  function convertTemp(isChecked){
    if(isChecked){
      return ((weatherData?.main?.temp - 273.15).toFixed(2)+"°C")
    }
    else{
      return (((weatherData?.main?.temp - 273.15) * 9/5 + 32).toFixed(2)+"°F")
    }
  }
  
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
        <BasicCard weatherData={weatherData}
        handleCheck={handleCheck}
        convertTemp={convertTemp}
        isChecked={isChecked}></BasicCard>
        </div>
      </div>
      <Table location={Location}></Table>
    </>
  )
}

export default App
