import { useState, useEffect } from 'react';
import axios from 'axios';

function Forecast( { apiKey, unit, city }) {

    const [hourly, setHourly] = useState([]);
    const Api_key = import.meta.env.VITE_OPENWEATHER_API_KEY;

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`)
            .then((res) => {
                setHourly(res.data.list.slice(0, 5)); 
            })
            .catch((err) => console.log(err));
    }, [city, unit]);




   return (
    <div className="forecast">
        <p>Forecast</p>
        <div className="forecast-row">
        {hourly.map((hour, index) => {
            const time = new Date(hour.dt * 1000).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            });

            const icon = `https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`;
            const temp = Math.round(hour.main.temp)

            return (
            <div className="hour-box" key={index}>
                <img src={icon} alt="weather icon" />
                <p>{time}</p>
                <p>{temp}°</p>
            </div>
            );
        })}
        </div>
    </div>
    );
}

export default Forecast