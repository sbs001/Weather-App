import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import logo from '../../img/sol.png'

export default function Nav() {

  return (
    <div className='navCtn'>
      <Link className="aAnimated1s " to='/'><img className="fromLeft" src={logo} alt="" style={{ width: 50 }} /></Link>
      <Link className="aAnimated2s" to='/'> Home</Link>
      <Link className="aAnimated3s" to='about'> About Me </Link>
    </div>
  )
}