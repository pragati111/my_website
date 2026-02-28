import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';
import "./ChiselTypeDiamond.css";

const ChiselTypeDiamond = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/chisel-type/1.PNG"), title: "Variant 1" },  
    { id: 2, image: require("../../../../assets/images/chisel-type/2.png"), title: "Variant 2" },  
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



      <h1>Chisel-Type Diamond Dressers</h1>
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
            <h2>Chisel-Type Diamond Dressers</h2>
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
      Foaming Dresser is manufactured by skilled professionals using 
      high-quality natural diamonds and other materials. 
      It is a dresser well-suited for grinding stone forming, 
      and can be customized according to the R(circle) and suitable angle at the customer's request.
    </p>
    <div className="dressers-table-wrapper">

          <table className="dressers-dimension-table">
            <thead>
              <tr>
                <th>Radius in MM</th>
                <th>Angle</th>
                <th>Tool Code</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>0.125R</td>
                <td></td>
                <td>DC1 - A40L</td>
              </tr>
              <tr>
                <td>0.250R</td>
                <td>40Ā,○</td>
                <td>DC2 - A40L</td>
              </tr>
              <tr>
                <td>0.500R</td>
                <td></td>
                <td>DC5 - A40L</td>
              </tr>
              <tr>
                <td>0.125R</td>
                <td></td>
                <td>DC1 - A60L</td>
              </tr>
              <tr>
                <td>0.250R</td>
                <td>60Ā,○</td>
                <td>DC2 - A60L</td>
              </tr>
              <tr>
                <td>0.500R</td>
                <td></td>
                <td>DC5 - A60L</td>
              </tr>
            </tbody>
          </table>
        </div>
    </>
  );
};

export default ChiselTypeDiamond;
