import { useState, useEffect } from 'react';
import axios from 'axios';

function CityCard( { unit, apiKey } ) {

    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    const otherCities =["New York", "Tokyo", "London", "Dubai", "Sydney"];

     const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

     useEffect(() => {
        const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const requests = otherCities.map((city) =>
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
          )
        );
        const responses = await Promise.all(requests);
        const weatherList = responses.map((res) => res.data);
        setWeatherData(weatherList);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
        
    }, [unit, apiKey]);
    
    if(loading) return <p>Loading...</p>;

   return (
  <div className="city-card">
    <p>Popular Cities</p>
    <div className="city-list">
      {weatherData.map((cityWeather) => (
        <div className="city-item" key={cityWeather.id}>
          <span>{capitalize(cityWeather.name)}</span>
          <span className="city-temp">
            {Math.round(cityWeather.main.temp)}°
            <img
              src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`}
              alt="icon"
            />
          </span>
        </div>
      ))}
    </div>
  </div>
);

}

export default CityCard