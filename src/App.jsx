import Header from "./components/Header";
import Hero from "./components/Hero";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";
import CityCard from "./components/CityCard";
import { useState } from 'react';
import axios from 'axios';


function App() {
  
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const [unit, setUnit] = useState("metric");
  const [city, setCity] = useState('Paris');
  const [country, setCountry] = useState('France');


  
  const handleSearch = async (newCity) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}`
      );
      setCity(response.data.name);
      setCountry(response.data.sys.country); 
    } catch (error) {
      console.error('Search failed:', error);
    }
  };


  return (
    <>
      <Header apiKey={apiKey} unit={unit} setUnit={setUnit} onSearch={handleSearch} city={city} country={country} />
      <Hero apiKey={apiKey} unit={unit} city={city} />
      <WeatherInfo apiKey={apiKey} unit={unit} city={city} />
      <div className="forecast-cities-wrapper">
        <Forecast apiKey={apiKey} unit={unit} city={city} />
        <CityCard apiKey={apiKey} unit={unit} />
      </div>
    </>
  );
}

export default App;
