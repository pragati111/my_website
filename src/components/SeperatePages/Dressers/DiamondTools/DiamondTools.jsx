import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';
import "./DiamondTools.css";

const DiamondTools = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/diamond tools/1.PNG"), title: "Variant 1" },  
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



      <h1>Diamond Tools</h1>
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
            <h2>Diamond Tools</h2>
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
      Diamond Tools are introduced for use in line with dressing and truing purposes. 
      The array of single point diamond dressers, 
      blade type diamond dressers and multi dressers are available with a variety of tools 
      fully geared to exposing new grinding grains in abrasive wheels and creating sharp cutting edges. 
      The array of high-quality dressers well-suited for high-speed, continuous dressing are introduced.
    </p>
    </>
  );
};

export default DiamondTools;
