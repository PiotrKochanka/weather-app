import React from 'react';
import useFetchWeatherForecast, { ForecastItem, ForecastData } from '../../hooks/useFetchWeatherForecast';
import styles from './weatherdetails.module.css';

const WeatherDetails: React.FC = () => {
    const city = "Warsaw";
    const { forecast, loading, error } = useFetchWeatherForecast(city);

    if (loading) {
        return <p>Ładowanie prognozy pogody...</p>;
    }

    if (error) {
        return <p>Błąd podczas pobierania danych prognozy: {error.message}</p>;
    }

    return(
        <div>
        {forecast && (
            <div>
            <div className={`${styles.details_container}`}>
                {forecast.list.slice(0, 1).map((item, index) => (
                    <>
                        <div key={index} className={`weather-container ${styles.details_all}`}>
                            <p><strong>{item.weather[0].description}</strong></p>
                            <p>Temperatura minimalna: {item.main.temp_min}°C</p>
                            <p>Temperatura maksymalna: {item.main.temp_max}°C</p>
                            <p>Wilgotność: {item.main.humidity}%</p>
                            <p>Zachmurzenie: {item.clouds.all}%</p>
                            <p>Prędkość wiatru: {item.wind.speed}km/h</p>
                        </div>
                        <div className={`${styles.details_main}`}>
                            <h2>Pogoda {forecast.city.name}</h2>
                            {item.weather[0].icon && (
                                <img
                                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                                    alt={item.weather[0].description}
                                />
                            )}
                            <p>Temperatura: {item.main.temp}°C</p>
                        </div>
                    </>
                ))}
            </div>
            </div>
        )}
        </div>
    );
}

export default WeatherDetails;