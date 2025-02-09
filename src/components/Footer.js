import React from 'react';
import '../Styles/StylesFooter.css';
import { FaCapsules } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        
          <Link to={'/'}><FaCapsules className="brand-icon Logo-Pharmacy SARRA CHEHATA" /> </Link>
        
        </div>
        <p>&copy; 2025 Pharmacie Sarra Chehata</p>
        <div className="footer-links">
          <a href="/A propos" className="footer-link">About Us</a>
          <a href="/Contactez" className="footer-link">Contact</a>
          <p><BsFillTelephoneFill />  +216.71.880.035</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Serving you with care and commitment.</p>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.3091865014235!2d10.14373537576614!3d36.8350705657332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3314631a56a9%3A0x6337ca364c965447!2sPharmacie%20Chehata%20Sarra!5e0!3m2!1sfr!2stn!4v1738420102061!5m2!1sfr!2stn" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        
      </div>
    </footer>
  );
}

export default Footer;