import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import "./PCBNGroovingInserts.css";
import {motion} from 'framer-motion';

const PCBNGroovingInserts = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/pcbn grooving inserts/1.PNG"), title: "Variant 1" },  
    { id: 2, image: require("../../../../assets/images/pcbn grooving inserts/2.PNG"), title: "Variant 2" },  
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



      <h1>PCBN Grooving Inserts</h1>
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
            <h2>PCBN Grooving Inserts</h2>
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
    <h3>Equipment Advantages</h3>
        <div className="inserts-text-block">
          <p>
            Several most advanced automatic machines specially used for grooving inserts, guaranteeing mass 
            production with stable and high quality.
          </p>
        </div>

        <h3>Materials Advantages</h3>
        <div className="inserts-text-block">
          <p>
            30 years R&D experience of material guarantee the material stable and high quality.
          </p>
        </div>
    </>
  );
};

export default PCBNGroovingInserts;
