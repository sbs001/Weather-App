import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCity } from '../../redux/actions/actions';
import './Card.css';

export default function Card({ city }) {

  const dispatch = useDispatch();

  const handleclick = () => {
    dispatch(deleteCity(city.name))
  }

  return (
    <div className='cardWeather'>
      <button className='close' onClick={handleclick}>X</button>
      <div className="head">
        <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="" />
        <span>{Math.round(city.main.temp) - 273}°</span>
      </div>
      <hr />
      <div className='body'>
        <h1>{city.name}</h1>
        <button>See more...</button>
      </div>
    </div>
  )
}