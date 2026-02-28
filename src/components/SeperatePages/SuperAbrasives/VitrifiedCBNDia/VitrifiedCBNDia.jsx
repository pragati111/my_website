import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import "./VitrifiedCBNDia.css";
import {motion} from 'framer-motion';

const VitrifiedCBNDia = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/vitrified cbn dia wheels/1.PNG"), title: "Variant 1" },
    { id: 2, image: require("../../../../assets/images/vitrified cbn dia wheels/2.PNG"), title: "Variant 2" },
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <motion.div initial={{ opacity: 0, y: 30 }}
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



      <h1>Vitrified CBN/DIA Wheels</h1>
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
            <h2>Vitrified CBN/DIA Wheels</h2>
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
            Vitrified bonds are made of inorganic materials as binders, and since
            they can make products with a high porosity, there is little clogging
            and heat generation during grinding, and it is relatively easy to run
            through and dressing. It is mainly used as a bond. In the case of
            ceramic and PCD grinding, it has high grinding efficiency when a
            vitrified diamond wheel is applied.
          </p>

          <p>
            ▶ Automatic dressing using various dryers such as the rotary dresser
            or single-point dresser is easy to operate, so it is mainly used in
            the work of the CNC automation process, and in machining workpieces
            for the production of large-scale quantities of small types such as
            bearings and automobile parts. In addition, since it contains a large
            number of pores versus general resin or metal wheels, it is feasible
            to easily process difficult-to-cut materials with severe clogging
            during processing such as ceramic, PCD, and PCBN.
          </p>
        </div>
    </>
  );
};

export default VitrifiedCBNDia;
