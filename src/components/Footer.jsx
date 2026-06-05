import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-inner">
        <div className="footer-top">
          
          <div className="footer-brand">
            <h2 className="footer-logo">Amma Dental</h2>
            <p className="footer-tagline">Compassionate dental care for families and individuals. Your smile is our mission.</p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Book an Appointment</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Contact Us</h4>
              <ul>
                <li><a href="tel:+919876543210">+91 98765 43210</a></li>
                <li><a href="mailto:hello@ammadental.in">hello@ammadental.in</a></li>
                <li>Road No. 12, Banjara Hills,<br/>Hyderabad, Telangana 500034</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Clinic Hours</h4>
              <ul>
                <li>Monday – Friday: 9am – 8pm</li>
                <li>Saturday: 9am – 6pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Amma Dental. All Rights Reserved.</p>
          <p>Made with care in Hyderabad 🌿</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
