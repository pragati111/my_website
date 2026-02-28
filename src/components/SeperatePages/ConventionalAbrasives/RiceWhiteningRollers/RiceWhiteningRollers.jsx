import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./RiceWhiteningRollers.css";

const RiceWhiteningRollers = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/rice whitening rollers/1.png"), title: "Variant 1" },  
    { id: 2, image: require("../../../../assets/images/rice whitening rollers/2.png"), title: "Variant 2" },  
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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



      <h1>Rice  Whitening Rollers</h1>
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
            <h2>Rice Whitening Rollers</h2>
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
    <div className="dc-text-block">
          <ol className="detail-list">
            <li>Less broken of rice</li>
            <li>Best whitening and shining on rice</li>
            <li>Higher life of rollers</li>
            <li>Close dimensional accuracy in each piece</li>
            <li>Can be supplied with metal flange and hub</li>
          </ol>
    </div>
    </>
  );
};

export default RiceWhiteningRollers;
