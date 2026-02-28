import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import "./CBNDia.css";
import {motion} from 'framer-motion';

const CBNDia = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/cbn/1.PNG"), title: "Variant 1" },
    { id: 2, image: require("../../../../assets/images/cbn/2.PNG"), title: "Variant 2" },
    { id: 3, image: require("../../../../assets/images/cbn/3.PNG"), title: "Variant 3" },
    { id: 4, image: require("../../../../assets/images/cbn/4.PNG"), title: "Variant 4" },
    { id: 5, image: require("../../../../assets/images/cbn/5.PNG"), title: "Variant 5" },
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



      <h1>CBN/Diamond Grinding Wheels</h1>
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
            <h2>CBN/Diamond Grinding Wheels</h2>
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
    <div className="super-text-block">
          <p>
            CBN & DIA Diamond and cubic boron nitride(CBN) are the hardest abrasive
            materials in existence, and are known as the best abrasive. Although a
            diamond and CBN have the same crystal structure, a diamond is made of
            pure carbon while CBN is made of cubic boron and nitride. CBN/DIA
            wheel, is introduced along with the crystallization of abrasive
            technology optimized for high-hardness workpieces.
          </p>
        </div>
    </>
  );
};

export default CBNDia;
