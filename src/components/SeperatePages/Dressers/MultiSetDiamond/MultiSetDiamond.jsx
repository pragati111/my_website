import React from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';
import "./MultiSetDiamond.css";

const MultiSetDiamond = () => {
  const navigate = useNavigate();
  return (
    <motion.div 
    initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="msd-back-button" onClick={() => navigate(-1)}>
        <svg
          className="msd-back-icon"
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

      <div className="msd-page-wrapper">
        <div className="msd-content-box">
          <h1>Multi-Set Diamond Dressers</h1>

          <p>
            Diamond Grit-Impregnated Dressers have been developed from multipoint dressers.
            In contrast to the item below, they are manufactured from crushed diamond grit
            rather than numerous small natural diamonds, and contain a large number of diamond particles.
            The advantage of the Diamond-Impregnated Dresser lies in its exceptional sharpness
            which is derived from the sharp edges and points of the broken diamond grit.
          </p>
        </div>
      </div>

      <IndustrialFooter />
    </motion.div>
  );
};

export default MultiSetDiamond;
