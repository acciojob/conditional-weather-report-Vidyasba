// App.js
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
 
  const [weatherData, setWeatherData] = useState({ temperature: 0, conditions: "" });

  
  useEffect(() => {
    
    const fetchWeatherData = async () => {
      
      const weatherInput = { temperature: 25, conditions: "Sunny" };
      
      setWeatherData(weatherInput);
    };
    fetchWeatherData();
  }, []);

  return (
    <div>
      
      <WeatherDisplay weather={weatherData} />
    </div>
  );
};

export default App;
