import {useEffect, useState} from "react";
import weatherService from "../services/weatherService.js";

const WeatherDisplay = ({city}) => {
    const [weather, setWeather] = useState(null)
    const iconBaseUrl = 'https://openweathermap.org/img/wn/'

    useEffect(() => {
        weatherService.getWeather(city).then(data => {
            setWeather(data)
        })
    }, [city]);


    return (
        weather ?
            (<>
                <h2>Weather in {city}</h2>
                <div>temperature {Math.floor(weather.main.temp - 273.15)} Celsius</div>
                <img alt={weather.weather[0].description} src={iconBaseUrl + weather.weather[0].icon + '.png'}/>
                <div>wind {weather.wind.speed} m/s</div>
            </>)
            : (<div>Weather is not available for {city} at the moment</div>)
    )
}

export default WeatherDisplay;