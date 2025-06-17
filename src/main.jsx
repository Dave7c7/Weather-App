// index.jsx or main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import WeatherSignIn from './Components/WeatherSignIn.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home (weather page) */}
        <Route path="/" element={<App />} />

        {/* Sign-in page */}
        <Route path="/signin" element={<WeatherSignIn />} />
       <Route path="/login" element={<WeatherLogIn />} />
        {/* Catch-all 404 page */}
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
