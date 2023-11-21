import { useQuery } from '@apollo/client';
import React, { useState } from 'react';

import ProfileList from '../components/ProfileList';
import { QUERY_PROFILES } from '../utils/queries';

const fetchWeatherData = async (location) => {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=51f615dbed5fbc27f3137d2ba941cf4a`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  const promptForLocation = async () => {
    const location = prompt('Please enter your location:');
    const data = await fetchWeatherData(location);
    setWeatherData(data);
  };

  const { name, weather, main } = weatherData || {};

  return (
    <div>
      <button onClick={promptForLocation}>Get Weather</button>
      {weatherData && (
        <div>
          <h2>{name}</h2>
          <h3>{weather?.[0]?.description}</h3>
          <h3>{Math.round(main?.temp - 273.15)}°C</h3>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <WeatherComponent />
              <ProfileList profiles={profiles} />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
