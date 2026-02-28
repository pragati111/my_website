import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';
import "./MCDDressingBlades.css";

const MCDDressingBlades = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/mcd dressing blades/1.PNG"), title: "Variant 1" },  
    { id: 2, image: require("../../../../assets/images/mcd dressing blades/2.PNG"), title: "Variant 2" },  
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



      <h1>MCD Dressing Blades</h1>
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
            <h2>MCD Dressing Blades</h2>
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
      For a longer life, consistant dressing with a high level of surface finish. 
    </p>
    <h3>MCD dressing blades (Mono Crystalline Diamond)</h3>
    <div>
      <p>
        MCD blades are fully synthetic products. 
        These MCD inserts are arranged in a very systematic pattern 
        in parallel or at 45º into the blade dressing blank. 
        The thermal conductivity of MCD outperforms that of natural diamonds. 
        This allows heat to be drawn away from the contact zone between 
        the dressing tool and grinding wheel, thus contributing highly to 
        consistent performance of dressing tools.
      </p>
    </div>
    <h3>Blade-Type Dresser with MCD and CVD Diamonds</h3>
    <div>
      <p>
        As MCD and CVD diamonds are artificial diamonds, these items are produced to customer specifications.
      </p>
      <p>Advantage of Blade Dressers:</p>
      <p>• No resetting or re-lapping required.</p>
      <p>• Reduce inventory, cost cutting up to 40~50%</p>
      <p>• These tools can be used completely without requiring constant maintenance.</p>
    </div>
    </>
  );
};

export default MCDDressingBlades;
