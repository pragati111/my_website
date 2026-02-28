import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
import "./FlapMopDiscs.css";

const FlapMopDiscs = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/flap discs mop discs/1.png"), title: "Variant 1" },
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



      <h1>Flap Discs/Mop Discs</h1>
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
            <h2>Flap Discs/Mop Discs</h2>
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
    <div className="dc-text-block">
          <p>
            Flap discs are made of a plastic or fiberglass backing plate and a
            sheet of polishing cloth. Geared for angle grinder use, it is used
            for rust and paint removal, deburring, and polishing of metal/
            non-metal materials used in shipbuilding, automobiles, aerospace,
            and machinery industries.
          </p>

          <p>▶ Long life and strong grinding power</p>
          <p>▶ Used for various purposes with various materials such as steel, non-ferrous metals, and stainless steel</p>
          <p>▶ Perfect high-speed grinding and high-load bearing grinding</p>
        </div>
  );
};

export default FlapMopDiscs;
