import React, { useEffect, useState } from 'react';
import './App.css';
import './css/general.css';
import backgroundVideo from './assets/AdobeStock_142803167_Video_HD_Preview.mov';

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string
  }[];
}

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const API_KEY = "cf2e206c699833f5d7a554c3c2cfd1f6";
  const city = "Warsaw";

useEffect(() => {
  const fetchWeather = async () => {
    try{
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error("Błąd podczas pobierania dancyh pogodowych: ", err);
    }
  };
  fetchWeather();
}, []);

  return (
    <div className="container">
      <video autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    {weather && (
      <div className="weather-info">
        <h2>Pogoda w {weather.name}</h2>
        <p>Temperatura: {weather.main.temp}°C</p>
        <p>Opis: {weather.weather[0].description}</p>
      </div>
    )}
    </div>
  );
}

export default App;
