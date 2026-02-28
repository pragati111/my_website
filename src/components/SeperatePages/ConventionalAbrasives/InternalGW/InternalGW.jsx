import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./InternalGW.css";

const InternalGW = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/internal grinding wheels/1.PNG"), title: "Variant 1" },
    { id: 2, image: require("../../../../assets/images/internal grinding wheels/2.PNG"), title: "Variant 2" },
    { id: 3, image: require("../../../../assets/images/internal grinding wheels/3.png"), title: "Variant 3" },
    { id: 4, image: require("../../../../assets/images/internal grinding wheels/4.png"), title: "Variant 4" },
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



      <h1>Internal Grinding Wheels</h1>
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
            <h2>Internal Grinding Wheels</h2>
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
      <p>We have best suitable grades with high performance grains like Pink Allu, Mono-crystalline and Ceramic grains with high performance bond for internal grinding applications.</p>
      <p><strong>Remark:</strong> We also develop best suitable grades internal grinding wheels for applications other than above, against customer application details.</p>
    </div>
    </>
  );
};

export default InternalGW;
