import React from 'react';
import useFetchWeatherForecast, { ForecastItem, ForecastData } from '../../hooks/useFetchWeatherForecast';

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
        <div className="weather-container">
        {forecast && (
            <div>
            <h2>Pogoda {forecast.city.name}</h2>
            <div className="forecast-list">
                {forecast.list.slice(0, 1).map((item, index) => (
                <div key={index} className="forecast-item">
                    <p><strong>{item.weather[0].description}</strong></p>
                    <p>Temperatura: {item.main.temp}°C</p>
                    <p>Temperatura minimalna: {item.main.temp_min}°C</p>
                    <p>Temperatura maksymalna: {item.main.temp_max}°C</p>
                    <p>Wilgotność: {item.main.humidity}%</p>
                    <p>Zachmurzenie: {item.clouds.all}%</p>
                    <p>Prędkość wiatru: {item.wind.speed}km/h</p>
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
}

export default WeatherDetails;