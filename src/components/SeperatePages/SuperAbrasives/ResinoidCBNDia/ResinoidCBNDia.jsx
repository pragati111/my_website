import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import "./ResinoidCBNDia.css";
import {motion} from 'framer-motion';

const ResinoidCBNDia = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/resinoid cbn dia wheels/1.png"), title: "Variant 1" },
    { id: 2, image: require("../../../../assets/images/resinoid cbn dia wheels/2.PNG"), title: "Variant 2" },
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



      <h1>Resinoid CBN/ DIA Wheels</h1>
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
            <h2>Resinoid CBN/ DIA Wheels</h2>
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
            “Resin” refers to resin and synthetic resin, and the resin bond wheel
            is a resin that combines various fillers (i.e. metal components,
            ceramic components, etc.) with resin as the main component. Resins
            comprise mainly phenolic resins and polyimide resins. Due to the
            bonding properties of abrasive grains, the Resin Bond Wheel has
            well-performing elasticity, soft contact point with the workpiece,
            and good cutting and finishing surfaces, but it has less wear and heat
            resistance.
          </p>

          <p>
            ▶ Among diamond and CBN grinding wheels (i.e. resin, metal, vitrified,
            electrodeposition), it is the most common and easy to apply to all
            grinding operations (i.e. planar, cylindrical, groove, centerless,
            double head, inner grinding, etc.) It is most widely used when grinding
            many types of workpieces such as glass, cermet, ceramic, tool steel
            etc. In particular, the resin hybrid wheel has an excellent effect on
            flute grinding for tools.
          </p>

          <p>
            ▶ If the hardness of the workpiece is HRC 50 or higher, grinding with
            a CBN wheel is economical.
          </p>
        </div>
    </>
  );
};

export default ResinoidCBNDia;
