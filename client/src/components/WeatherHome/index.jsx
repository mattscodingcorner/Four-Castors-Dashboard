import { useState, useEffect } from 'react';

const fetchWeatherData = async (location) => {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=51f615dbed5fbc27f3137d2ba941cf4a`);
    const data = await response.json();
    if (data.cod === '404') {
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

const fetchWeatherForecast = async (location) => {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=51f615dbed5fbc27f3137d2ba941cf4a`);
    const data = await response.json();
    if (data.cod === '404') {
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    return null;
  }
};

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('');

const handleSearch = async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    if (location) {
      const data = await fetchWeatherData(location);
      const forecastData = await fetchWeatherForecast(location);
      if (data && forecastData) {
        setWeatherData(data);
        setWeatherForecast(forecastData);
        setError(null);
      } else {
        setError('Please enter a valid location');
      }
    } else {
      setError('Please enter a location');
    }
  };

  useEffect(() => {
    if (weatherData) {
      console.log('Weather Data:', weatherData);
    }
    if (weatherForecast) {
      console.log('Weather Forecast:', weatherForecast);
    }
  }, [weatherData, weatherForecast]);

  const { name, weather, main } = weatherData || {};

  const convertToFahrenheit = (temp) => {
    return Math.round((temp * 9) / 5 + 32);
  };

  const dailyForecast = weatherForecast ? weatherForecast.list.filter(forecast => new Date(forecast.dt_txt).getHours() === 12) : [];

  return (
    <div className="weatherComponentHome">
      <div className="weatherHomeForm">
      <form onSubmit={handleSearch}>
        <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
        <button className="btn btn-lg btn-primary m-2" type="submit">
          Get Your Weather Dashboard
        </button>
      </form>
      </div>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>{name}</h2>
          <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={weather[0].description} />
          <h3>{weather[0].description}</h3>
          <h3>{convertToFahrenheit(main.temp)}°F</h3>
        </div>
      )}
      {dailyForecast.map((forecast, index) => (
        <div key={index}>
          <h6>{new Date(forecast.dt_txt).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}</h6>
          <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt={forecast.weather[0].description} />
          <p>Temperature: {convertToFahrenheit(forecast.main.temp)}°F</p>
          <p>Weather: {forecast.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherComponent;