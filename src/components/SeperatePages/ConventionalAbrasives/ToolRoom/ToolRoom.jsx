import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';
import "./ToolRoom.css";

const ToolRoom = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/tool rooms grinding wheels general item/1.png"), title: "Variant 1" },  
    { id: 2, image: require("../../../../assets/images/tool rooms grinding wheels general item/2.PNG"), title: "Variant 2" },  
    { id: 3, image: require("../../../../assets/images/tool rooms grinding wheels general item/3.png"), title: "Variant 3" },  
    { id: 4, image: require("../../../../assets/images/tool rooms grinding wheels general item/4.PNG"), title: "Variant 4" },  
    { id: 5, image: require("../../../../assets/images/tool rooms grinding wheels general item/5.PNG"), title: "Variant 5" },  
    { id: 6, image: require("../../../../assets/images/tool rooms grinding wheels general item/6.PNG"), title: "Variant 6" },  
    { id: 7, image: require("../../../../assets/images/tool rooms grinding wheels general item/7.PNG"), title: "Variant 7" },  
    { id: 8, image: require("../../../../assets/images/tool rooms grinding wheels general item/8.PNG"), title: "Variant 8" },  
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



      <h1>Tool Rooms Grinding Wheels – General Item</h1>
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
            <h2>Tool Rooms Grinding Wheels – General Item</h2>
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
          <p className="remark-text">
          Custom specifications can be developed as per customer requirements.
        </p>
    </div>
    </>
  );
};

export default ToolRoom;
