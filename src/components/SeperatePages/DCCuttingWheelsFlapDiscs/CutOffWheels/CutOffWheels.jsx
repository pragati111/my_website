import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
import "./CutOffWheels.css";

const CutOffWheels = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/cutoff wheels/1.png"), title: "Variant 1" },
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



      <h1>Cut-Off Wheels</h1>
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
            <h2>Cut-Off Wheels</h2>
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
      <p>
        Cut-Off Wheels are grinding wheels made by applying glass fiber as a
        reinforcing material in the middle layer along with a resinoid
        binder, while also being widely used for cutting round bars, square
        bars, pipes, angles and section steel.
      </p>

      <p>▶ Universal cutting wheel that provides top-notch economics and performance</p>
      <p>▶ Strong cutting and smooth working power</p>
      <p>▶ Provides first-rate quality using only grade A or higher raw materials</p>
    </div>
    <div className="dc-table-wrapper">
          <h3 className="dc-table-heading">Dimension Chart</h3>

          <table className="dc-dimension-table">
            <thead>
              <tr>
                <th>OD </th>
                <th>T</th>
                <th>ID</th>
                <th>Max Speed</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>305</td><td>50</td><td>76.2</td><td>50m/s</td></tr>
              <tr><td>355</td><td>50</td><td>152.4</td><td>50m/s</td></tr>
              <tr><td>405</td><td>60</td><td>152.4</td><td>50m/s</td></tr>
              <tr><td>450</td><td>80</td><td>250</td><td>50m/s</td></tr>
              <tr><td>455</td><td>80</td><td>254</td><td>50m/s</td></tr>
              <tr><td>510</td><td>100</td><td>203.2</td><td>50m/s</td></tr>
              <tr><td>610</td><td>124</td><td>304.8</td><td>50m/s</td></tr>
              <tr><td>660</td><td>100</td><td>304.8</td><td>50m/s</td></tr>
              <tr><td>710</td><td>100</td><td>304.8</td><td>50m/s</td></tr>
              <tr><td>760</td><td>150</td><td>304.8</td><td>50m/s</td></tr>
            </tbody>
          </table>

          <p className="dc-table-note">* Size can be customized</p>
        </div>
    </>
  );
};

export default CutOffWheels;
