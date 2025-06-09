import { useState, useEffect } from 'react';

export interface ForecastItem {
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

export interface ForecastData {
    city: {
        name: string;
    };
    list: ForecastItem[];
    cod: string;
    message: number;
    cnt: number; 
}

interface UseWeatherForecastResult {
  forecast: ForecastData | null;
  loading: boolean;
  error: Error | null;
}

const useFetchWeatherForecast = (city: string): UseWeatherForecastResult => {
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const API_KEY = "cf2e206c699833f5d7a554c3c2cfd1f6";

  useEffect(() => {
    const fetchForecast = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=pl`
        );
        if (!res.ok) {
          throw new Error(`Błąd HTTP! status: ${res.status}`);
        }
        const data = await res.json();
        setForecast(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city]);

  return { forecast, loading, error };
};

export default useFetchWeatherForecast;