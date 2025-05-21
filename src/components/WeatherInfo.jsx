import { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherInfo({ apiKey, unit, city }) {
  const [weather, setWeather] = useState(null);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
      )
      .then((res) => setWeather(res.data))
      .catch((err) => console.log(err));
  }, [city, unit]);

  if (
    !weather ||
    !weather.weather ||
    !weather.weather[0] ||
    !weather.main ||
    !weather.wind
  ) {
    return <p>Loading...</p>;
  }

  return (
    <div className="info">
      <p>Humidity <div className="numbers">{weather.main.humidity}%</div></p>
      <p>Feels Like <div className="numbers">{Math.round(weather.main.feels_like)}°</div></p>
      <p>Wind Speed <div className="numbers">{weather.wind.speed} m/s</div></p>
    </div>
  );
}

export default WeatherInfo;
