import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import './css/general.css';
import Searchbar from './components/Searchbar/Searchbar';
import WeatherDays from './components/WeatherDays/WeatherDays';
import WeatherHours from './components/WeatherHours/WeatherHours';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import useFetchWeatherForecast, { ForecastItem, ForecastData } from './hooks/useFetchWeatherForecast';
import { CityContext, CityProvider } from './CityContext';

const weatherVideoMap: { [key: string]: string } = {
    Clear: require('./assets/clear_sky_video.mp4'),
    Clouds: require('./assets/clouds_video.mp4'),
    Rain: require('./assets/rain_video.mp4'),
    Drizzle: require('./assets/drizzle_video.mp4'),
    Thunderstorm: require('./assets/thunderstorm_video.mp4'),
    Snow: require('./assets/snow_video.mp4'),
    Mist: require('./assets/mist_video.mp4'),
};

const defaultVideo = require('./assets/default_background.mp4');

function App() {
  const cityContext = useContext(CityContext);
  if (!cityContext) {
      throw new Error('App must be rendered inside CityProvider');
  }
  const { city } = cityContext;

  const { forecast, loading, error } = useFetchWeatherForecast(city);

  let currentVideoSource = defaultVideo;
    if (forecast && forecast.list && forecast.list.length > 0 && forecast.list[0].weather.length > 0) {
        const weatherMain = forecast.list[0].weather[0].main; // <-- To teraz działa!
        // ... reszta logiki mapowania wideo
        currentVideoSource = weatherVideoMap[weatherMain] || defaultVideo;
    }

  if (loading) {
    return <p>Ładowanie prognozy pogody...</p>;
  }

  if (error) {
    return <p>Błąd podczas pobierania danych prognozy: {error.message}</p>;
  }


  return (
    <div className="container">
      <video autoPlay muted loop key={currentVideoSource}> {/* Dodaj atrybut key! */}
        <source src={currentVideoSource} type="video/mp4" />
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

