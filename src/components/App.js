// App.js
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  // Initialize weather data state with a default value
  const [weatherData, setWeatherData] = useState({ temperature: 0, conditions: "" });

  // Update weather data to the given weather input using the useEffect hook
  useEffect(() => {
    // Simulating fetching weather data from an API
    const fetchWeatherData = async () => {
      // Simulated weather input
      const weatherInput = { temperature: 25, conditions: "Sunny" };
      // Set weather data state to the fetched weather input
      setWeatherData(weatherInput);
    };

    // Call the fetchWeatherData function
    fetchWeatherData();
  }, []);

  return (
    <div>
      {/* Pass weather data as a prop to the WeatherDisplay component */}
      <WeatherDisplay weather={weatherData} />
    </div>
  );
};

export default App;
