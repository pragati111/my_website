import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
import "./DepressedCenterWheels.css";

const DepressedCenterWheels = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/depressed center wheels/1.png"), title: "Variant 1" },
    { id: 2, image: require("../../../../assets/images/depressed center wheels/2.png"), title: "Variant 2" },
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



      <h1>Depressed Center Wheels</h1>
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
            <h2>Depressed Center Wheels</h2>
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
        The depressed center wheel is a grinding wheel made using synthetic
        resin as a binder and putting glass fiber as a reinforcing material
        in the middle layer of the grinding wheel.
      </p>

      <p>
        Usually, it is used for removing the protruding part of a metal or
        non-metal workpiece by attaching a grinding wheel to the portable
        grinder and grinding the rough part of the curved surface.
      </p>

      <p>
        SZ is a premium offset that applies a special resin binder, and
        boasts high performance and efficiency with the use of
        alumina-zirconia abrasives. SZ is specialized for machining
        difficult-to-cut materials, providing superior performance over
        ordinary offsets in all types of steel.
      </p>

      <p>▶ Provides the best polishing performance compared to normal depressed center wheels</p>
      <p>▶ Sensation of grinding is soft with little vibration and separation, greatly reducing worker fatigue</p>
      <p>▶ Provides high tool life by applying high-quality alumina zirconia abrasive</p>
      <p>▶ There is no need for post-processing as it suppresses burning due to its outperforming autogenous effect</p>
      <p>▶ High-speed polishing allows a large amount of processing in a short time</p>
      <p>▶ Fulfilling the highest safety standards (KS certification)</p>
      <p>▶ Well-suited for hard-to-cut materials and steel, stainless steel, cast iron, etc.</p>
    </div>
  );
};

export default DepressedCenterWheels;
