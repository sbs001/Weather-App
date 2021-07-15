import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import logo from '../../logo.svg'
import SearchBar from './SearchBar/SearchBar';

export default function Nav() {

  return (
    <div className='navCtn'>
      <div className='nav'>
        <div className='navLeft'>
          <Link to='/'><img src={logo} alt="" style={{ width: 50 }} /></Link>
          <Link to='/'> Home</Link>
          <Link to='about'> About Me </Link>
        </div>
        <div className="navRight">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}