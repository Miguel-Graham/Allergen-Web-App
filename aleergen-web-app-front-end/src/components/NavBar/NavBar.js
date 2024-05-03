import React from 'react'
import './NavBar.css'
import {LensBlurRounded} from "@mui/icons-material";

const NavBar = () => {
    return (
       <nav className='contain'>
          <span><LensBlurRounded />Allergy Tracker</span>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/add/remove">Add/Remove</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
       </nav>
    );
};

export default NavBar;
