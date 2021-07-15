import React, { useState } from 'react';
import './SearchBar.css'
import { BsSearch } from "react-icons/bs";
export default function SearchBar() {

  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
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
