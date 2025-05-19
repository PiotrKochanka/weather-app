import React from 'react';
import useFetchWeatherForecast, { ForecastItem, ForecastData } from '../../hooks/useFetchWeatherForecast';
import styles from './weatherDays.module.css';

const WeatherDays: React.FC = () => {
  const city = "Warsaw";
  const { forecast, loading, error } = useFetchWeatherForecast(city);

  const getDailyForecast = (forecastList: ForecastItem[]): ForecastItem[] => {
    const dailyForecast: { [key: string]: ForecastItem } = {};

    forecastList.forEach((item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      if (!dailyForecast[date]) {
        dailyForecast[date] = item;
      }
    });

    return Object.values(dailyForecast);
  };

  if (loading) {
    return <p>Ładowanie prognozy pogody...</p>;
  }

  if (error) {
    return <p>Błąd podczas pobierania danych prognozy: {error.message}</p>;
  }

  if (forecast) {
    console.log('Forecast data:', forecast);
    const dailyData = getDailyForecast(forecast.list);
    console.log('Daily forecast data:', dailyData);

    return (
      <div className={`weather-container ${styles.weather_days}`}>
        <div>
          <h2>Prognoza pogody na najbliższe 5 dni</h2>
          <div className="forecast-list">
            {dailyData.map((item, index) => (
              <div key={index} className={`${styles.forecast_item}`}>
                <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
                <p>{item.main.temp}°C</p>
                <div className={`${styles.forecast_item_des}`}>
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
      </div>
    );
  }

  return null;
};

export default WeatherDays;