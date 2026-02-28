import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';
import "./MultipointDiamond.css";

const MultipointDiamond = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/multipoint diamond dresser/1.png"), title: "Variant 1" },  
    { id: 2, image: require("../../../../assets/images/multipoint diamond dresser/2.PNG"), title: "Variant 2" },  
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <motion.div 
    initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="ceramic-page">
        <div className="back-btn-wrapper" onClick={() => navigate(-1)}>
        <svg
          className="back-icon"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Back to Products</span>
      </div>



      <h1>Multipoint Diamond Dresser</h1>
        <div className="ceramic-layout">
          {/* LEFT */}
          <div className="left-section">
            <div className="main-display">
              <img src={selectedItem.image} alt={selectedItem.title} />
            </div>

            <div className="thumbnail-grid">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`thumbnail ${
                    selectedItem.id === item.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  <img src={item.image} alt={item.title} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="right-section">
            <h2>Multipoint Diamond Dresser</h2>
            <Description />
          </div>
        </div>
      </div>

      <IndustrialFooter />
    </motion.div>
  );
};

/* 🔹 Separate description function */
const Description = () => {
  return (
    <>
    <p>
      The diamonds can be used completely without resetting them, 
      and due to there being several diamond points, the pressure 
      of dressing is reduced when using this tool. 
      These come in many sizes and specifications to fulfill the various needs 
      of different customers. The featured dressers are bonded with multiple diamonds, 
      which are arranged in different patterns for various cutting and grinding operations. 
      These dressers are manufactured in compliance with the industry-wide parameters 
      and the demands of customers. Moreover, our wide distribution of transportation 
      facilities has enabled us to deliver our Multipoint Diamond Dressers within a specific timeframe.
    </p>
    <p>
      Sizes:
    </p>
    <p>
      •	MIC-24 with 24 diamonds for a wheel size up to 600 mm in diameter            
    </p>
    <p>
      •	MIC-36 with 36 diamonds for a wheel size above 600 mm in diameter
    </p>
    </>
  );
};

export default MultipointDiamond;
