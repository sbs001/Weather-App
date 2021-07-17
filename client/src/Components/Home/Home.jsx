import React from 'react';
import { useSelector } from 'react-redux';
import DisplayCards from '../DisplayCards/DisplayCards';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css'


export default function Home() {

  const initial = useSelector(state => state.initial);
  return (
    <div className="home">
      <div className="cities">
        {initial && <h1 className="welcome">Welcome to WeatherApp</h1>}
        <DisplayCards />
      </div>
      <div className="searchCtn fadeIn">
        <SearchBar />
      </div>
    </div>
  )
}