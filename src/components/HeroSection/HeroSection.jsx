import React, { useState, useEffect } from 'react';
import './HeroSection.css';

import bg1 from "../../assets/01.png"
import bg2 from "../../assets/02.png"
import bg3 from "../../assets/03.png"
import bg4 from "../../assets/04.png"
import bg5 from "../../assets/05.png"

const data = [
  { id: "01", category: "Impact", title: "Beautiful Websites That Convert", desc: "We design and develop stunning, high-performance websites that attract customers and turn visitors into real business.", img: bg1 },
  { id: "02", category: "Affordability", title: "Premium Looking Websites at Affordable Cost", desc: "Get a modern, responsive and professional website without spending a fortune. Quality design that fits your budget.", img: bg2 },
  { id: "03", category: "Versatility", title: "Websites for Every Industry", desc: "From doctors, schools and lawyers to ecommerce, manufacturers and startups — we create tailored websites for every field.", img: bg3 },
  { id: "04", category: "Performance", title: "Fast, SEO-Friendly & Mobile Ready", desc: "Optimized for speed, search engines and all devices so your business performs perfectly everywhere.", img: bg4 },
  { id: "05", category: "Growth", title: "Launch Your Digital Presence", desc: "Build your online identity with confidence and grow your brand with a website that truly represents you.", img: bg5 },
];

const HeroSection = () => {
  const [active, setActive] = useState(2);

  // ✅ AUTO ROTATE
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % data.length);
    }, 3000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="hero-inner">
        <div className="text-content">
          <div className="tab-navigation">
            {data.map((item, index) => (
              <button 
                key={item.id}
                className={`tab-btn ${active === index ? 'active' : ''}`}
                onClick={() => setActive(index)}  // ✅ Manual click works
              >
                <span className="tab-id">{item.id}</span>
                <span className="tab-text">{item.category}</span>
              </button>
            ))}
          </div>

          <div className="text-body">
            <h1 className="hero-h1">{data[active].title}</h1>
            <p className="hero-p">{data[active].desc}</p>
            <div className="cta-wrapper">
              <button className="primary-btn">Industries We Serve</button>
              <button className="secondary-btn">Technologies We Use</button>
            </div>
          </div>
        </div>

        <div className="visual-content">
          <div className="browser-mockup">
            <div className="browser-header">
              <div className="dots"><span></span><span></span><span></span></div>
            </div>
            <div className="image-container">
               <img 
                 key={data[active].id} 
                 src={data[active].img} 
                 alt={data[active].title} 
                 className="fade-in"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;