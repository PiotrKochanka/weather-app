import React from 'react';
import useFetchWeatherForecast, { ForecastItem, ForecastData } from '../../hooks/useFetchWeatherForecast';

const WeatherHours: React.FC = () => {
    const city = "Warsaw";
    const { forecast, loading, error } = useFetchWeatherForecast(city);

    if (loading) {
        return <p>Ładowanie prognozy pogody...</p>;
    }

    if (error) {
        return <p>Błąd podczas pobierania danych prognozy: {error.message}</p>;
    }

  return (
    <div className="weather-container">
      {forecast && (
        <div>
          <h2>Prognoza pogody w {forecast.city.name}</h2>
          <div className="forecast-list">
            {forecast.list.slice(0, 5).map((item, index) => (
              <div key={index} className="forecast-item">
                <p>Godzina: {new Date(item.dt * 1000).toLocaleTimeString()}</p>
                <p>Temperatura: {item.main.temp}°C</p>
                <p>Opis: {item.weather[0].description}</p>
                {item.weather[0].icon && (
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    alt={item.weather[0].description}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {!forecast && <p>Ładowanie prognozy pogody...</p>}
    </div>
  );
};

export default WeatherHours;