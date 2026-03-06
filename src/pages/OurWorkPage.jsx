import React from "react";
import "./OurWorkPage.css";

import workImg1 from "../assets/final1.png";
import workImg2 from "../assets/final2.png";
import feedbackImg from "../assets/final3.jpeg";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const OurWorkPage = () => {
  return (
    <>
    <Header/>
    <div className="ourwork-container">      

      {/* LEFT SECTION */}
      <div className="work-card">

      <h3 className="card-title">Our Work (As per the client's demand)</h3>

      <div className="work-item">

        <img src={workImg1} alt="work1" className="work-image"/>

        <div className="work-text">
          <p>falconengg.in</p>
          <ul>
            <li>Present the company's industrial grinding products</li>
            <li>Showcase their technical expertise in machining solutions</li>
            <li>Explain their vision, mission, and values</li>
            <li>Highlight why customers should choose their services</li>
            <li>Provide contact details for inquiries and orders</li>
          </ul>
        </div>

      </div>

      <div className="work-item">

        <img src={workImg2} alt="work2" className="work-image"/>

        <div className="work-text">
          <p>crownstarcolours.in</p>
          <ul>
            <li>Showcase the company’s paint and coating product range</li>
            <li>Highlight their experience and expertise in the paint industry</li>
            <li>Present their vision, mission, and company values</li>
            <li>Demonstrate their quality testing capabilities</li>
            <li>Build trust by explaining why customers should choose them</li>
          </ul>
        </div>

      </div>

    </div>


      {/* RIGHT SECTION */}
      <div className="feedback-card">

        <h3 className="card-title">The Client's Feedback</h3>

        <div className="feedback-image">
          <img src={feedbackImg} alt="client feedback" />
        </div>

      </div>

    </div>
    <Footer/>
    </>
  );
};

export default OurWorkPage;