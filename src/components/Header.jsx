import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import './Header.css';
import Button from './Button';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      className={`header container ${isHome && !isScrolled ? 'is-home' : ''} ${isScrolled ? 'is-scrolled' : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-logo">
        <Link to="/">
          <span className="logo-text">Amma Dental</span>
        </Link>
      </div>

      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list flex items-center gap-8">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMenuOpen(false)}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <Link to="/contact">
          <Button variant="primary">Book an appointment</Button>
        </Link>
      </div>

      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </motion.header>
  );
}

export default Header;
