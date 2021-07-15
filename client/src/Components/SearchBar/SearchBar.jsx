import React, { useState } from 'react';
import './SearchBar.css'
import { BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { getCity } from '../../redux/actions/actions';

export default function SearchBar() {

  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCity(input))
  }

  return (
    <div className='searchBar'>
      <form onSubmit={handleSubmit}>

        <input name="search" type="text" onChange={handleInputChange} placeholder="Search city..." required />
        <button type="submit"><BsSearch /></button>

      </form>
    </div>
  )
}
