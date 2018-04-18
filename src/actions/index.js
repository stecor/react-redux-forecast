import axios from 'axios';
import config from '../config';


const API_KEY = config.API_KEY;

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url =`${ROOT_URL}?&q=${city},us&appid=${API_KEY}`;
  const request = axios.get(url);


  //console.log('Request Promise(Middleware):', request);

  return{
    type: FETCH_WEATHER,
    payload: request,
  };
}
