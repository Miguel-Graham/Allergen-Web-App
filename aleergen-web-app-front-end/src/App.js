import React, { useState } from 'react';
import './index.css';
import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./pages/Home/home.js";

function App() {


    return (
        <div>
       <NavBar/>
       <Home/>
        </div>
    );
}

export default App;
