import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>SEXY COMPANY</h1>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li>
              <button onClick={() => scrollToSection('hero')}>HOME</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')}>SERVIÇOS</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('gallery')}>GALERIA</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>CONTATO</button>
            </li>
          </ul>
        </nav>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;