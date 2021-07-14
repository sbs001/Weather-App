import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export const getWather = (city) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${REACT_APP_API_KEY}`)
        .then(res => res.data)
}