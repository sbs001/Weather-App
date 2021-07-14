import React, { useState } from 'react';
import './SearchBar.css'

export default function SearchBar() {

  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input type="text" onChange={handleInputChange} />
        <input type="submit" />

      </form>
    </div>
  )
}
