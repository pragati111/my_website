import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import "./SinglePointDiamond.css";
import {motion} from 'framer-motion';

const SinglePointDiamond = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/single point diamond dressers/1.PNG"), title: "Variant 1" },  
    { id: 2, image: require("../../../../assets/images/single point diamond dressers/2.PNG"), title: "Variant 2" },  
    { id: 3, image: require("../../../../assets/images/single point diamond dressers/3.PNG"), title: "Variant 3" },  
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



      <h1>Single-Point Diamond Dressers</h1>
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
            <h2>Single-Point Diamond Dressers</h2>
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
    <p>
      High-quality single-point diamond dressers are provided, 
      which are the most basic dressing tools used to expose new abrasive grains 
      in the abrasive wheel and create new cutting edges. 
      It is necessary to select high-quality diamonds with the right 
      dimensions since the tool life is the most important factor. 
      With a range of specifications and quality products provided to meet 
      the needs of customers, please refer to the table below to correctly order a special type of dresser.
    </p>
    <div className="dressers-table-wrapper">
          <h3 className="dressers-table-heading">
            Dimension Chart
          </h3>

          <table className="dressers-dimension-table">
            <thead>
              <tr>
                <th colSpan="2">Grinding Wheel Dimension in mm</th>
                <th>Recommended Dimend Size</th>
              </tr>
              <tr>
                <th>Diameter</th>
                <th>Width</th>
                <th>In Carat</th>
              </tr>
            </thead>


            <tbody>
              <tr><td>100</td><td>12</td><td>0.25</td></tr>
              <tr><td>150</td><td>12</td><td>0.30</td></tr>
              <tr><td>175</td><td>12</td><td>0.50</td></tr>
              <tr><td>250</td><td>40</td><td>0.75</td></tr>
              <tr><td>350</td><td>25</td><td>1.00</td></tr>
              <tr><td>350</td><td>30</td><td>1.25</td></tr>
              <tr><td>350</td><td>50</td><td>1.50</td></tr>
              <tr><td>450</td><td>50</td><td>1.75</td></tr>
              <tr><td>600</td><td>50</td><td>2.00</td></tr>
              <tr><td>600</td><td>75</td><td>2.50</td></tr>
              <tr><td>600</td><td>150</td><td>3.00</td></tr>
              <tr><td>750</td><td>75</td><td>3.00</td></tr>
              <tr><td>750</td><td>100</td><td>3.50</td></tr>
              <tr><td>900</td><td>75</td><td>4.00</td></tr>
            </tbody>
          </table>
        </div>
    </>
  );
};

export default SinglePointDiamond;
