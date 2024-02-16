import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.js';
import Navbar from './Navbar.js';
import './index.css';

function App() {
  const [menu, setMenu] = useState([]);
  const [allergies] = useState([]);

  // fetch menu from API and update state
  useEffect(() => {
    fetch('/api/menu')
        .then(res => res.json())
        .then(data => setMenu(data));
  }, []);

  // filter menu items based on selected allergies
    const filteredMenu = menu.length > 0 ? menu.filter(item => {
        for (let i = 0; i < allergies.length; i++) {
            if (!item.allergies.includes(allergies[i])) {
                return false;
            }
        }
        return true;
    }) : [];

  return (
      <div>
        <Navbar />
        <h1></h1>
        <SearchBar setMenu={setMenu} />
        <ul>
          {filteredMenu.map(item => (
              <li key={item.id}>
                {item.name} - {item.price}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;
