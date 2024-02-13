// WeatherDisplay.js
import React from 'react';

const WeatherDisplay = ({ weather }) => {
  // Determine the color of the temperature based on the condition
  const temperatureColor = weather.temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      {/* Display the temperature with inline styling for color */}
      <p style={{ color: temperatureColor }}>Temperature: {weather.temperature}°C</p>
      {/* Display the weather conditions */}
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
