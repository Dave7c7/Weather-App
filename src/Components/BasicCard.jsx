import './BasicCard.css'
import App from '../App';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({weatherData}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {weatherData?.weather[0]?.main}
        </Typography>
        <Typography variant="h5" component="div">
          {weatherData?.name}
        </Typography>
        <Typography variant="body2">
          <label class="switch">
            <input type="checkbox" id="toggle"/>
            <span class="slider round">Fahrenheit Celsius</span>
          </label>
          <br />
          {
          /*if(){
            {((weatherData?.main?.temp - 273.15) * 9/5 + 32).toFixed(2)+"°F"}
          }
          else{
            {((weatherData?.main?.temp - 273.15)).toFixed(2)+"°C"}}
          }*/          
          }
          {"Temperature: "}
          {((weatherData?.main?.temp - 273.15) * 9/5 + 32).toFixed(2)+"°F"}
          <br />
          {((weatherData?.main?.temp - 273.15)).toFixed(2)+"°C"}
        </Typography>
      </CardContent>
    </Card>
  );
}