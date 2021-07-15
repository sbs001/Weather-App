import axios from "axios";
import swal from 'sweetalert';
import dotenv from "dotenv";
dotenv.config();


const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export const GET_CITY = 'GET_CITY';
export const DELETE_CITY = 'DELETE_CYTY'

export function getCity(city) {
    return function(dispatch) {
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${REACT_APP_API_KEY}`)
            .then((response) => {
                dispatch({
                    type: GET_CITY,
                    payload: response.data,
                });
            })
            .catch((err) => swal('City not fond', 'Please, try again', 'warning'));
    };
}

export function deleteCity(nameCity) {
    return {
        type: DELETE_CITY,
        payload: nameCity
    }
}