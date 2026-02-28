import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import "./ElectroplatedDiaCBN.css";
import {motion} from 'framer-motion';

const ElectroplatedDiaCBN = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/electroplated dia cbn wheels/1.PNG"), title: "Variant 1" },
    { id: 2, image: require("../../../../assets/images/electroplated dia cbn wheels/2.png"), title: "Variant 2" },
    { id: 3, image: require("../../../../assets/images/electroplated dia cbn wheels/3.PNG"), title: "Variant 3" },
    { id: 4, image: require("../../../../assets/images/electroplated dia cbn wheels/4.PNG"), title: "Variant 4" },
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



      <h1>Electroplated DIA/ CBN Wheels</h1>
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
            <h2>Electroplated DIA/ CBN Wheels</h2>
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
            The Electrodeposition Wheel features only one layer of DIA or CBN
            abrasive that is fixed to the surface of the wheel body by
            electroplating. It is possible to freely implement the size and shape
            of the wheel, so it enables a specific shape and even soft materials
            to be easy processed.
          </p>

          <p>
            ▶ In the case of gun-shape grinding, a shot-shape wheel is obtained
            simply by forming a predetermined gun shape on the wheel shank and
            plating DIA or CBN abrasive grain on the surface to be fixed to. Since
            only one layer of DIA or CBN abrasive is plated, the initial cost of
            the wheel is lower. When this single layer of abrasive grain is gone,
            this wheel will reach its expiry of use. By reusing the shank of this
            wheel, the wheel cost (unit cost) can be reduced. The electrodeposition
            wheel outperforms versus other bonds since one-third to onehalf of the
            grain size protrudes from electrodeposition.
          </p>

          <p>▶ The fields where electrodeposition wheels are mainly used are as follows:</p>
          <p>• Form grinding</p>
          <p>• Jig grinding</p>
          <p>• Small quantity production of various kinds</p>
          <p>• Inner grinding of small diameter</p>
        </div>
    </>
  );
};

export default ElectroplatedDiaCBN;
