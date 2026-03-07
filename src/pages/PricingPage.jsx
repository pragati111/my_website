import React from "react";
import "./PricingPage.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const PricingPage = () => {
  return (
    <>
    <Header/>
    <section className="pricing-section">

      <div className="pricing-container">

        <h1 className="pricing-title">
          Transparent <span>Pricing</span>
        </h1>

        <p className="pricing-subtitle">
          Every website is unique. Pricing depends on the number of pages,
          features, design complexity and integrations required.
        </p>

        <div className="pricing-card">

          <div className="price-range">
            ₹5,000 <span>—</span> ₹50,000
          </div>

          <p className="price-description">
            Whether you need a simple business website or a fully customized
            feature-rich platform, we create solutions tailored to your needs.
          </p>

          <div className="pricing-features">

            <div className="feature">✔ Custom Design</div>
            <div className="feature">✔ Mobile Responsive</div>
            <div className="feature">✔ SEO Friendly</div>
            <div className="feature">✔ Fast Performance</div>
            <div className="feature">✔ Modern UI/UX</div>

          </div>

          <button className="pricing-btn">
            Get Your Quote
          </button>

        </div>

      </div>

    </section>
    <Footer/>
    </>
  );
};

export default PricingPage;