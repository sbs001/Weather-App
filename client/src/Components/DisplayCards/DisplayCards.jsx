import React from'react';
import { useStore } from 'react-redux';
import Card from '../Card/Card';
import './DisplayCards.css';

export default function DisplayCards(){
  
  const cities = useStore(state => state.cities);

  if (!cities.length) return <h3>Search a new city, please</h3>

  return(
    <div>
      {cities.map(city => <Card city={city}/> )}
    </div>
  )
}