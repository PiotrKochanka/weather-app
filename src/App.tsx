import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import './css/general.css';
import backgroundVideo from './assets/AdobeStock_142803167_Video_HD_Preview.mov';
import Searchbar from './components/Searchbar/Searchbar';
import WeatherDays from './components/WeatherDays/WeatherDays';
import WeatherHours from './components/WeatherHours/WeatherHours';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import useFetchWeatherForecast, { ForecastItem, ForecastData } from './hooks/useFetchWeatherForecast';
import { CityContext, CityProvider } from './CityContext';

function App() {
  const { city } = useContext(CityContext)!;
  const { forecast, loading, error } = useFetchWeatherForecast(city);

  if (loading) {
    return <p>Ładowanie prognozy pogody...</p>;
  }

  if (error) {
    return <p>Błąd podczas pobierania danych prognozy: {error.message}</p>;
  }

  return (
    <div className="container">
      <video autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <header>
        <Searchbar />
      </header>
      <div className="container_weather_all">
        <div className="container_left">
          <WeatherDetails />
          <WeatherHours />
        </div>
        <div className="container_right">
          <WeatherDays />
        </div>
      </div>
    </div>
  );
}

export default function WrappedApp() {
  return(
    <CityProvider>
      <App />
    </CityProvider>
  );
}

