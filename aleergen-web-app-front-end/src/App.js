import React, { useState } from 'react';
import SearchBar from './SearchBar.js';
import Navbar from './Navbar.js';
import SideNav from "./SideNav.js";
import './index.css';

function App() {
  const [setMenu] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
// filter menu items based on selected allergies

  return (
      <div>
        <SideNav setSearchTerm={setSearchTerm}/>
        <Navbar />
        <h1></h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
  );
}

export default App;
