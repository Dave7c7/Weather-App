import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, temperature) {
  return { name, temperature };
}

export default function forecastTable({ location }) {
  const [rows, setRows] = useState([]);
  const apiKey = "f1e2934521fa36b08463620921ae8927";

  useEffect(() => {
    if (!location) return;

    const urlGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`;

    fetch(urlGeo)
      .then(res => res.json())
      .then(geoData => {
        if (geoData && geoData.length > 0) {
          const { lat, lon } = geoData[0];
          const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

          fetch(urlForecast)
            .then(res => res.json())
            .then(forecastData => {
              if (forecastData && forecastData.list) {
                const hourlyData = forecastData.list.slice(0, 8).map(item => {
                  const date = new Date(item.dt * 1000);
                  const hour = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
                  return createData(hour, `${item.main.temp} °C`);
                });
                setRows(hourlyData);
              }
            });
        }
      })
      .catch(err => {
        console.error("Failed to fetch weather data:", err);
      });
  }, [location]);

  console.log("table component =========", rows);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Hour</StyledTableCell>
            <StyledTableCell align="right">Temperature</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.temperature}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}