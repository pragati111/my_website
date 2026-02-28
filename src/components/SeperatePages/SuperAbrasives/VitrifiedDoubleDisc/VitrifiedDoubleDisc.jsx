import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import "./VitrifiedDoubleDisc.css";
import {motion} from 'framer-motion';

const VitrifiedDoubleDisc = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/vitrified double disc wheels/1.png"), title: "Variant 1" },
    { id: 2, image: require("../../../../assets/images/vitrified double disc wheels/2.png"), title: "Variant 2" },
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



      <h1>Vitrified Double Disc Wheels</h1>
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
            <h2>Vitrified Double Disc Wheels</h2>
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
            Vitrified Diamond, CBN are used depending on the type of workpiece, and
            is a product used for processing a wide range of workpiece materials
            such as automobile, ceramic, hydraulic, air conditioner parts, and
            seals. It is widely used for processing all materials such as ferrous
            and nonferrous metals.
          </p>

          <p>▶ Vitrified table provides many opportunities for users due to its high grinding efficiency and long service life.</p>
          <p>▶ Compared to general grinding, a large number of workpieces are processed in tandem, so the actual individual work time is short.</p>
          <p>▶ Due to the characteristics of double-sided polishing, the product quality and precision are exceptional.</p>
          <p>▶ Despite the higher initial investment cost, the actual individual tool cost is low due to the short working hours and high productivity.</p>
          <p>▶ Compared to general grinding, scattering dust is extremely minimal, so the work environment is kept clean and waste disposal costs are greatly reduced.</p>
          <p>▶ Since the work environment is kept clean, no additional investment in environmental management facilities is warranted.</p>
        </div>
    </>
  );
};

export default VitrifiedDoubleDisc;
