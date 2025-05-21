import { useState, useEffect } from 'react';
import axios from 'axios';

function Hero( { apiKey, unit, city }) {

    const [weather, setWeather] = useState(null);

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    useEffect(() => {
        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
        )
        .then(res => setWeather(res.data))
        .catch(err => console.log(err));
    }, [city, unit]);
    
    if(!weather) return <p>Loading...</p>;


    return(
        <div className="hero">
            <h1 className="description">{capitalize(weather.weather[0].description)}  <span className="city">in {weather.name}</span></h1>
                <div className="hero-left">
                    <div className="deg-icon">
                        <h2 className="degree">{Math.round(weather.main.temp)}
                            <span className="unit">{unit === "metric" ? "°C" : "°F"}</span>
                        </h2>
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt={weather.weather[0].description}
                            style={{ verticalAlign: "middle", width: "70px", height: "70px" }}
                        />
                    </div>
                        
                     <div className="high-low">
                        H {Math.round(weather.main.temp_max)}° , L {Math.round(weather.main.temp_min)}°
                    </div>
                </div>
        </div>
    );
}

export default Hero;