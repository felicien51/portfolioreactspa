import React from 'react';
import './Navbar.css';

function Navbar(props) {
  return (
    <nav className="navbar">
      <span className="navbar-logo">MyPortfolio</span>
      <button className="add-btn" onClick={props.onAddClick}>
        + Add Project
      </button>
    </nav>
  );
}

export default Navbar;
