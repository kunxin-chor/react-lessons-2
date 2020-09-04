// IMPORTANT: All modules that used React must 
// have the line below
import React from 'react';
import {Link} from "react-router-dom"
import './welcome.css'

function Welcome()
{
  return (
      <ul id='nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    )
}

// Allow other JavaScript files to import Welcome
export { Welcome };