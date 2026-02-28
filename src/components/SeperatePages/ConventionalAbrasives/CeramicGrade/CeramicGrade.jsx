import React from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./CeramicGrade.css";

const CeramicGrade = () => {
  const navigate = useNavigate();
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="product-back-button" onClick={() => navigate(-1)}>
        <svg
          className="product-back-icon"
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

      <div className="gq-page-wrapper">
        <div className="gq-content-box">
          <h1>Ceramic Grade (GQ) Grinding Wheels</h1>

          <p>
            Grinding wheels made with a mixture of ceramic abrasive grains,
            friable aluminium oxide grains, and high-performance vitrified bond
            provide excellent cutting power and require very little dressing
            during grinding operations.
          </p>

          <h3>Features and Benefits:</h3>

          <ul>
            <li>
              Ideal for cylindrical grinding operations of high hardness materials
            </li>
            <li>
              Ideal for surface grinding operations on high hardness workpieces
            </li>
            <li>
              Due to good form retention ability, ideal for form grinding applications
            </li>
            <li>
              Suitable for grinding materials such as D2, tool steel, HSS, hard
              carbon steel, WPS, 400 series stainless steel, cast iron, super steel, etc.
            </li>
            <li>
              Reduced grinding cycle time compared with conventional aluminium
              oxide abrasive grinding wheels
            </li>
            <li>Self-sharpening characteristics</li>
            <li>Burn-free workpiece</li>
          </ul>
        </div>
      </div>

      <IndustrialFooter />
    </motion.div>
  );
};

export default CeramicGrade;
