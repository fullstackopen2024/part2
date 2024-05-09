import axios from "axios";

const API_KEY = import.meta.env.VITE_OPEN_API_WEATHER_KEY
const baseUrl = 'https://api.openweathermap.org'

const getCoordinatesForName = (city, limit) => {
    return axios
        .get(baseUrl + `/geo/1.0/direct?q=${city}&limit=${limit}&appid=${API_KEY}`)
        .then(response => response.data[0])
}

const getWeatherWithLatLon = (lat, lon) => {
    return axios
        .get(baseUrl + `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then(response => response.data)
}

const getWeather = (city) => {
    return getCoordinatesForName(city, 1)
        .then(data => getWeatherWithLatLon(data.lat, data.lon))
}


export default {
    getWeather
}