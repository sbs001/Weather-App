import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import logo from '../../logo.svg'

export default function Nav() {

  return (
    <div className='nav'>
      <Link to='/'><img src={logo} alt="" style={{ width: 50 }} /></Link>
      <Link to='/'> Home</Link>
      <Link to='about'> About Me </Link>
    </div>
  )
}