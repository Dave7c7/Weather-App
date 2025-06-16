import './BasicCard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard({weatherData, handleCheck, convertTemp, isChecked}) {
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
          <label className="switch">
            <input type="checkbox" id="toggle" checked={isChecked} onChange={handleCheck}/>
            <span className="slider round">Fahrenheit | Celsius</span>
          </label>
          <br />
          {`Temperature: ${convertTemp(isChecked)}`}
        </Typography>
      </CardContent>
    </Card>
  );
}