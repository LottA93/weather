import axios from 'axios';
const API_KEY = 'a59687f25b545dc0674e60b2aa22b813';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const  = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);
  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
