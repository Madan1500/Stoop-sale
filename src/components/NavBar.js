import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="header">
        <Link to="/" className="logo">Stoop Sale</Link>
        <label htmlFor="check" className="icons" onClick={toggleMenu}>
          {isMenuOpen ? (
            <i className='bx bx-x' id="close-icon"></i>
          ) : (
            <i className='bx bx-menu' id="menu-icon"></i>
          )}
        </label>
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <ul className='flex space-x-3'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#">Items On Sale</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;

