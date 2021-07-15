import React from 'react';
import './Card.css';

export default function Card({city}){

  
  return (
    <div className='card'>
      <div className="head">
        <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="" />
      <span>{ Math.round(city.main.temp) - 273 }°</span>
      </div>
      <h1>{city.name}</h1>

    </div>
  )
}