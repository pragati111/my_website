import React from "react";
import "./IndustrialFooter.css";
import logo from "../../assets/falcon_logo.png";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const IndustrialFooter = () => {
  return (
    <div className="footer-wrapper">
      {/* Top Floating CTA */}
      <div className="footer-cta">
        <div className="cta-text">
          <span>READY TO GET</span>
          <strong>YOUR WEBSITE</strong>
        </div>
        <div className="cta-icon">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pragatinov@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Main Container */}
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-item">
            <FaPhoneAlt className="footer-icon" />
            <span><strong>+91-9929988684</strong></span>
          </div>

          <div className="footer-item">
            <FaMapMarkerAlt className="footer-icon" />
            <span>
              <strong>Our Office:</strong> Shop No-60, Sector-09, 
              Park Ave Rd, near Hanuman Mandir, Palika Bazar, 
              Siddharth Nagar, Sector 9, Malviya Nagar, Jaipur, Rajasthan 302017
            </span>
          </div>
          <div className="footer-item footer-email">
          <FaEnvelope className="footer-icon" />
          <span>
            <strong>Mail Id:</strong>{" "}
            <span>
              pragatinov@gmail.com
            </span>
          </span>
        </div>

        </div>

        <div className="footer-right">
          <Link to="/" className="footer-logo-link">
          <img
            src={logo}
            alt="Falcon Engineers"
            className="footer-logo"
          />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustrialFooter;
