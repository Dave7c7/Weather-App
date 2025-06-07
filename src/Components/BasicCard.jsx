import App from '../App';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

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
          {"temperature::" + weatherData?.main?.temp}
          <br />
          {"feels like temperature::" + weatherData?.main?.feels_like}
        </Typography>
      </CardContent>
    </Card>
  );
}
