import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.js';
import Navbar from './Navbar.js';
import './index.css';

function App() {
  const [menu, setMenu] = useState([]);
  const [allergies] = useState([]);

  // filter menu items based on selected allergies

  return (
      <div>
        <Navbar />
        <h1></h1>
        <SearchBar setMenu={setMenu} />
      </div>
  );
}

export default App;
