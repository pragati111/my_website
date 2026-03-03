import React from 'react';
import './Footer.css';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* The Floating CTA */}
        <div className="cta-floating-card">
          <div className="cta-text">
            <p className="cta-sub">READY TO GET</p>
            <h2 className="cta-main">YOUR WEBSITE?</h2>
          </div>
          {/* Styled the <a> directly to behave like a button */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pragatinov@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn-link"
          >
            Contact Us <Send size={16} />
          </a>
        </div>

        {/* The Main Content Grid */}
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <img className='footer-img' src={Logo} alt="Website Designers Jaipur Logo" />
            <h3 className="brand-name">Website Designers Jaipur</h3>
            <p className="brand-desc">
              Innovating digital solutions with precision and engineering excellence.
            </p>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <Phone size={18} className="icon" /> <span>+91-9929988684</span>
            </div>
            <div className="contact-item">
              <Mail size={18} className="icon" /> <span>pragatinov@gmail.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} className="icon" />
              <span>
                Shop No-60, Sector-09, Park Ave Rd, near Hanuman Mandir, Palika
                Bazar, Siddharth Nagar, Sector 9, Malviya Nagar, Jaipur, Rajasthan 302017
              </span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#why-us">Why Us?</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;