import React from'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './DisplayCards.css';

export default function DisplayCards(){
  
  const cities = useSelector(state => state.cities);

  if (!cities.length) return <h3>Search a new city, please</h3>
  return(
    <div className="display">
      {cities.map(city => <Card city={city}/> )}
    </div>
  )
}