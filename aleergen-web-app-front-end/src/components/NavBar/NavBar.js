import React from 'react'
import './NavBar.css'
import {LensBlurRounded} from "@mui/icons-material";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
       <nav className='contain'>
          <span><LensBlurRounded />Allergy Tracker</span>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/edit">Edit</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
       </nav>
    );
};

export default NavBar;

