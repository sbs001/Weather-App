import React from'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './DisplayCards.css';

export default function DisplayCards(){
  
  const cities = useSelector(state => state.cities);

  if (!cities.length) return <h1 className="dispEmpty">Search a new city, please</h1>
  return(
    <div className="display">
      {cities.map(city => <div key={city.id}><Card city={city}/></div> )}
    </div>
  )
}