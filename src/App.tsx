import React, { useEffect, useState } from 'react';
import './App.css';
import './css/general.css';
import backgroundVideo from './assets/AdobeStock_142803167_Video_HD_Preview.mov';
import Searchbar from './components/Searchbar/Searchbar';
import WeatherDays from './components/WeatherDays/WeatherDays';

function App() {

  return (
    <div className="container">
      <video autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <header>
        <Searchbar />
      </header>
      <WeatherDays />
    </div>
  );
}

export default App;
