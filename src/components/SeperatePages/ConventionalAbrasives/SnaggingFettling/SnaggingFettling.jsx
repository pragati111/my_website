import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
import "./SnaggingFettling.css";

const SnaggingFettling = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/high perf snagging fettling wheels/1.png"), title: "Variant 1" },
    { id: 2, image: require("../../../../assets/images/high perf snagging fettling wheels/2.PNG"), title: "Variant 2" },    
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



      <h1>High Performance Snagging / Fettling Wheels</h1>
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
            <h2>High Performance Snagging / Fettling Wheels</h2>
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
      <p className="range-text">
            <strong>Manufacturing Range:</strong> Up to 660mm OD and 125mm thickness
          </p>
          <p>Suitable for the following applications:</p>
          <ol className="detail-list">
            <li>Investment casting grinding</li>
            <li>High-chrome castings grinding</li>
            <li>Sintered casting grinding</li>
            <li>Ni-hard casting grinding</li>
            <li>Manganese steel casting grinding</li>
            <li>SG iron and grey cast iron casting grinding</li>
            <li>CI castings grinding</li>
          </ol>
    </div>
    </>
  );
};

export default SnaggingFettling;
