import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css'


export default function Home() {

  const cities = useSelector(state => state.cities);


  return (
    <div className="home">
      <div className="cities">
        {!cities.length && <h1>Wellcome to WeatherApp</h1>}
      </div>
      <div className="searchCtn">
        <SearchBar />
      </div>
    </div>
  )
}