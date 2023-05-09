import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar_component">
      <ul className="navbar">
        <li className="navbar_element">
        <Link to="/">To Do's</Link>
        </li>
        <li className="navbar_element">
        <Link to="/products">Products</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
