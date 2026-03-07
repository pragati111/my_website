import React from "react";
import { useNavigate } from "react-router-dom";
import "./LeafSequence.css";

import img2 from "../../assets/ran1.png";
import img1 from "../../assets/ran2.png";
import logo from "../../assets/logo.png";

const LeafSequence = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact-us");
  };

  return (
    <div className="hero-outer">
      <div className="hero-container">

        {/* ===== NAVBAR ===== */}
        <div className="hero-nav">
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>WDJ</span>
          </div>

          <div className="nav-links">
            <span>✔ Best Designs</span>
            <span>✔ Affordable Pricing</span>
            <span>✔ Premium Quality</span>
            <span>✔ SEO Optimized</span>
            <span>✔ Jaipur Based</span>
          </div>

        </div>

        {/* ===== HERO CONTENT ===== */}
        <div className="hero-content">
          <div className="hero-left">
            <h1>
                Welcome to
                <br />
                <span className="highlight">Website Designers Jaipur</span>
            </h1>
            </div>

            <div className="hero-right">
            <p>
                We design modern, high-converting websites that help businesses grow,
                attract customers, and build a powerful online presence. From startups
                to established brands — we create websites that deliver results.
            </p>

            <button className="cta-btn" type="button" onClick={goToContact}>
                Get Your Website
                <span className="arrow">→</span>
            </button>
            </div>
        </div>

        {/* ===== BOTTOM DESIGN SEQUENCE ===== */}
        <div className="leaf-sequence-wrapper">

          <div className="leaf leaf-left">
            <p>
              We blend design, performance, and innovation
              to create websites that truly represent your vision.              
            </p>
          </div>

          <div className="circle"></div>

          <div className="image image-one">
            <img src={img1} alt="student" />
          </div>

          <div className="leaf leaf-right"></div>

          <div className="image image-two">
            <img src={img2} alt="student 2" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default LeafSequence;