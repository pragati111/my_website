import React from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./ExtrudedCeramicGrade.css";

const ExtrudedCeramicGrade = () => {
  const navigate = useNavigate();
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="ge-back-button" onClick={() => navigate(-1)}>
        <svg
          className="ge-back-icon"
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

      <div className="ge-page-wrapper">
        <div className="ge-content-box">
          <h1>Extruded Ceramic Grade (GE) Grinding Wheels</h1>

          <p>
            Extruded ceramic grade grinding wheels have excellent sharpness and
            microstructure, which provide aggressive cutting and long-lasting
            wheel life.
          </p>

          <p>
            It is a composite of highly uniform micron crystals. This
            microcrystalline structure continually exposes new cutting edges
            due to microfracture during the grinding operation.
          </p>

          <p>
            Extruded grains are a new generation of ceramic abrasives that
            offer the highest aspect ratio compared with any abrasive grain
            available.
          </p>

          <h3>Benefits of Extruded Ceramic Grade Grinding Wheels:</h3>
          <ul>
            <li>Highly aggressive cutting action during grinding operations</li>
            <li>Ideal for high material removal rate applications</li>
            <li>Ideal for high depth of cut grinding applications</li>
            <li>
              Removes material faster than conventional aluminium oxide grades
            </li>
            <li>
              Less dressing frequency compared to conventional aluminium oxide grades
            </li>
            <li>Reduced grinding cycle time</li>
            <li>Burn-free workpiece after grinding</li>
          </ul>

          <h3>Suitable Applications:</h3>
          <ul>
            <li>Creep-feed grinding applications</li>
            <li>Plain surface grinding applications on high hardness workpieces</li>
            <li>Gear grinding applications</li>
            <li>Bore grinding applications</li>
            <li>High material removal rate operations</li>
            <li>Cylindrical grinding applications</li>
          </ul>
        </div>
      </div>

      <IndustrialFooter />
    </motion.div>
  );
};

export default ExtrudedCeramicGrade;
