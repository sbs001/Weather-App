import React from 'react';
import './City.css';


export default function City({ city }){
  
  const date = new Date();

 
  return(
    <div className='detail'>
      <p>{date.toDateString().substr(4,6)+', ' +date.toTimeString().substr(0,5) }</p>
      <h5>{city.name}, {city.sys.country}</h5>
      <div className='tempCtn'>
        <span className='tempBig'>{ Math.round(city.main.temp) - 273 }</span>
        <span className='temp'>°C</span>
        <span className='temp'>{ Math.round(city.main.temp_min) - 273 }°</span>
        <span className='temp'>{ Math.round(city.main.temp_max) - 273 }°</span>
      </div>
      <p className='desc'>{`Fells like ${Math.round(city.main.feels_like) - 273 }°C. ${city.weather.main},${city.weather.description}`}</p>
      <div className='detailFoot'> 
        <span>`Humidity: ${city.main.humidity}%`</span>
        <span>`Pressure: ${city.mai.pressure}hPa`</span>
      </div>
    </div>
  )
}