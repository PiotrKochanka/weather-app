import React, { useContext } from 'react';
import useFetchWeatherForecast, { ForecastItem, ForecastData } from '../../hooks/useFetchWeatherForecast';
import styles from './weatherdetails.module.css';
import { CityContext } from '../../CityContext';

const WeatherDetails: React.FC = () => {
    const { city } = useContext(CityContext)!;
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
                            <div className={`${styles.details_main}`}>
                                <div>
                                    <h2>Pogoda {forecast.city.name}</h2>
                                    <p><strong>{item.weather[0].description}</strong></p>
                                    <p>Temperatura: {Math.round(item.main.temp)}°C</p>
                                </div>
                                {item.weather[0].icon && (
                                    <img
                                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                                        alt={item.weather[0].description}
                                    />
                                )}
                            </div>
                            <div className={`${styles.details_all_temp}`}>
                                
                                <p>Temperatura minimalna: {Math.round(item.main.temp_min)}°C</p>
                                <p>Temperatura maksymalna: {Math.round(item.main.temp_max)}°C</p>
                                <p>Wilgotność: {item.main.humidity}%</p>
                                <p>Zachmurzenie: {item.clouds.all}%</p>
                                <p>Prędkość wiatru: {item.wind.speed}km/h</p> 
                            </div>
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