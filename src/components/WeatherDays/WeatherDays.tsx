import React, { useEffect, useState } from 'react';

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string; 
  };
  dt_txt: string;
}

interface ForecastData {
  city: {
    name: string;
  };
  list: ForecastItem[];
}

const WeatherDays: React.FC = () => {
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const API_KEY = "cf2e206c699833f5d7a554c3c2cfd1f6";
  const city = "Warsaw";

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=pl`
        );
        const data = await res.json();
        setForecast(data);
      } catch (err) {
        console.error("Błąd podczas pobierania danych prognozy: ", err);
      }
    };
    fetchForecast();
  }, []);

  return (
    <div className="weather-container">
      {forecast && (
        <div>
          <h2>Prognoza pogody w {forecast.city.name}</h2>
          <div className="forecast-list">
            {forecast.list.slice(0, 8).map((item, index) => ( // Wyświetlamy prognozę na kilka najbliższych godzin
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

export default WeatherDays;