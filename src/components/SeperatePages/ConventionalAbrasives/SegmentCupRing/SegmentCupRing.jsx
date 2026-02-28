import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
import "./SegmentCupRing.css";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";

const SegmentCupRing = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/segment straight cup and ring wheel/1.PNG"), title: "Variant 1" },
    { id: 2, image: require("../../../../assets/images/segment straight cup and ring wheel/2.PNG"), title: "Variant 2" },
    { id: 3, image: require("../../../../assets/images/segment straight cup and ring wheel/3.PNG"), title: "Variant 3" },
    { id: 4, image: require("../../../../assets/images/segment straight cup and ring wheel/4.PNG"), title: "Variant 4" },
    { id: 5, image: require("../../../../assets/images/segment straight cup and ring wheel/5.png"), title: "Variant 5" },
    { id: 6, image: require("../../../../assets/images/segment straight cup and ring wheel/6.png"), title: "Variant 6" },
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



      <h1>Segment, Straight Cup and Ring Wheels</h1>
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
            <h2>Segment, Straight Cup and Ring Wheels</h2>
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
      <p><strong>Remark:</strong> We can also develop best suitable grades Segments, Straight Cups and Ring Grinding Wheels for applications other than above, against customer application details.</p>
    </div>
    </>
  );
};

export default SegmentCupRing;
