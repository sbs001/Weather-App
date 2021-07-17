import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCity } from '../../redux/actions/actions';
import './Card.css';

export default function Card({ city }) {

  const dispatch = useDispatch();

  const handleclick = () => {
    document.getElementById(`card${city.name}`).classList.add('closeCard');
    
    setTimeout(() => {
      dispatch(deleteCity(city.name));
    }, 300); 
  }
  const date = new Date();

  return (
    <div id={`card${city.name}`} className='cardWeather fadeIn'>
      <button className='close' onClick={handleclick}>X</button>
      <div className="head">
        <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="" />
        <div className='tempCtn'>
          <span className='tempBig'>{Math.round(city.main.temp) - 273}</span>
          <div className='tempLow'>
            <span id='c'>°C</span>
            <span>{Math.round(city.main.temp_min) - 273}°C</span>
            <span>{Math.round(city.main.temp_max) - 273}°C</span>
          </div>
        </div>
      </div>
      <p className='desc'>{`${city.weather[0].main},${city.weather[0].description}`}</p>

      <hr />
      <div className='body'>
        <p>{date.toDateString().substr(4, 6) + ', ' + date.toTimeString().substr(0, 5)}</p>
        <h1>{city.name}, {city.sys.country}</h1>
        <a href={`https://openweathermap.org/city/${city.id}`} target="_blank" rel="noreferrer">
          <button>See more...</button>
        </a>
      </div>

    </div>
  )
}