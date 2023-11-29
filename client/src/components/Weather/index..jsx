import { useState } from 'react';


const fetchWeatherData = async (location) => {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=51f615dbed5fbc27f3137d2ba941cf4a`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const promptForLocation = async () => {
    const location = prompt('Please enter your location:');
    if (location) {
      const data = await fetchWeatherData(location);
      if (data) {
        setWeatherData(data);
        setError(null);
      } else {
        setError('Error fetching weather data');
      }
    } else {
      setError('Please enter a location');
    }
  };

  const { name, weather, main } = weatherData || {};

  const convertToFahrenheit = (temp) => {
    return Math.round((temp * 9) / 5 + 32);
  };

  return (
    <div className="weatherComponent">
      <button className="btn btn-lg btn-primary m-2" onClick={promptForLocation}>
        Get Your Weather Dashboard
      </button>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>{name}</h2>
          <h3>{weather?.[0]?.description}</h3>
          <h3>{convertToFahrenheit(main.temp)}°F</h3>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
