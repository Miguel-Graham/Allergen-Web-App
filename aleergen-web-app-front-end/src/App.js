import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.js';
import './index.css';

function App() {
  const [menu, setMenu] = useState([]);
  const [allergies, setAllergies] = useState([]);

  // fetch menu from API and update state
  useEffect(() => {
    fetch('/api/menu')
        .then(res => res.json())
        .then(data => setMenu(data));
  }, []);

  // filter menu items based on selected allergies
  const filteredMenu = menu.filter(item => {
    for (let i = 0; i < allergies.length; i++) {
      if (!item.allergies.includes(allergies[i])) {
        return false;
      }
    }
    return true;
  });

  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Restaurant Menu
          </a>
          <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
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