import React, { useContext } from 'react';
import useFetchWeatherForecast, { ForecastItem, ForecastData } from '../../hooks/useFetchWeatherForecast';
import styles from './weatherHours.module.css';
import { CityContext } from '../../CityContext';

const WeatherHours: React.FC = () => {
    const { city } = useContext(CityContext)!;
    const { forecast, loading, error } = useFetchWeatherForecast(city);

    if (loading) {
        return <p>Ładowanie prognozy pogody...</p>;
    }

    if (error) {
        return <p>Błąd podczas pobierania danych prognozy: {error.message}</p>;
    }

  return (
    <div className={`weather-container ${styles.weather_hours}`}>
      {forecast && (
        <div>
          <h2>Pogoda na najbliższe godziny</h2>
          <div className={`${styles.forecast_list}`}>
            {forecast.list.slice(0, 5).map((item, index) => (
              <div key={index} className={`${styles.forecast_item}`}>
                <p>{new Date(item.dt * 1000).toLocaleTimeString()}</p>
                <p>{Math.round(item.main.temp)}°C</p>
                <div className={`${styles.forecast_description}`}>
                  {item.weather[0].icon && (
                    <img
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                      alt={item.weather[0].description}
                    />
                  )}
                  <p>{item.weather[0].description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherHours;