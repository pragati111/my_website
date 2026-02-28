import React, { useState } from "react";
import IndustrialFooter from "../../../IndustrialFooter/IndustrialFooter";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';
import "./PCBNCompositeToolMaterials.css";

const PCBNCompositeToolMaterials = () => {
  const navigate = useNavigate();
  const items = [
    { id: 1, image: require("../../../../assets/images/pcbn composite tool materials/1.PNG"), title: "Variant 1" },  
    { id: 2, image: require("../../../../assets/images/pcbn composite tool materials/2.PNG"), title: "Variant 2" },  
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



      <h1>PCBN composite tool materials (PCBN compacts)</h1>
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
            <h2>PCBN composite tool materials (PCBN compacts)</h2>
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
    <div className="inserts-table-wrapper">
          <table className="inserts-table mobile-card-table">
            <colgroup>
              <col style={{ width: "14%" }} /> {/* Model */}
              <col style={{ width: "10%" }} /> {/* Grade */}
              <col style={{ width: "14%" }} /> {/* CBN Content */}
              <col style={{ width: "12%" }} /> {/* CBN Size */}
              <col style={{ width: "16%" }} /> {/* Main Binder */}
              <col style={{ width: "16%" }} /> {/* Machined Materials */}
              <col style={{ width: "18%" }} /> {/* Application Area */}
            </colgroup>
            <thead>
              <tr>
                <th>Model</th>
                <th>Grade</th>
                <th>CBN Content (Vol%)</th>
                <th>CBN Size (μm)</th>
                <th>Main Binder</th>
                <th>Machined Materials</th>
                <th>Application Area</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                {/* Model cell — desktop only (rowspan) */}
                <td rowSpan="5" className="model-cell">
                  Φ 60 × 2.0<br />
                  Φ 60 × 3.2<br />
                  Φ 60 × 4.0<br />
                  Φ 60 × 4.76
                </td>
                {/* Mobile-only model cell (visible on mobile, hidden on desktop) */}
                <td className="model-cell-mobile" data-label="Model">
                  Φ 60 × 2.0<br />
                  Φ 60 × 3.2<br />
                  Φ 60 × 4.0<br />
                  Φ 60 × 4.76
                </td>

                <td data-label="Grade">BT7800</td>
                <td data-label="CBN Content (Vol%)">90</td>
                <td data-label="CBN Size (μm)">1–5</td>
                <td data-label="Main Binder">Al / Co / C</td>
                <td data-label="Machined Materials">Alloy cast iron</td>
                <td data-label="Application Area">
                  Engine cylinder, cylinder sleeve, cylinder head,
                  gearbox housing
                </td>
              </tr>

              <tr>
                <td className="model-cell-mobile" data-label="Model">
                  Φ 60 × 2.0<br />
                  Φ 60 × 3.2<br />
                  Φ 60 × 4.0<br />
                  Φ 60 × 4.76
                </td>
                <td data-label="Grade">BT9000</td>
                <td data-label="CBN Content (Vol%)">95</td>
                <td data-label="CBN Size (μm)">5–15</td>
                <td data-label="Main Binder">Al / Co / AlN</td>
                <td data-label="Machined Materials">Gray cast iron</td>
                <td data-label="Application Area">Brake disc, brake drum, compressor, etc</td>
              </tr>

              <tr>
                <td className="model-cell-mobile" data-label="Model">
                  Φ 60 × 2.0<br />
                  Φ 60 × 3.2<br />
                  Φ 60 × 4.0<br />
                  Φ 60 × 4.76
                </td>
                <td data-label="Grade">BT2900</td>
                <td data-label="CBN Content (Vol%)">75</td>
                <td data-label="CBN Size (μm)">5–15</td>
                <td data-label="Main Binder">Al / TiC / WC / Co</td>
                <td data-label="Machined Materials">Nodular cast iron, Vermicular cast iron</td>
                <td data-label="Application Area">
                  Brake drum, automobile wheel hub, crank shaft, etc
                </td>
              </tr>

              <tr>
                <td className="model-cell-mobile" data-label="Model">
                  Φ 60 × 2.0<br />
                  Φ 60 × 3.2<br />
                  Φ 60 × 4.0<br />
                  Φ 60 × 4.76
                </td>
                <td data-label="Grade">BT6500</td>
                <td data-label="CBN Content (Vol%)">65</td>
                <td data-label="CBN Size (μm)">1–5</td>
                <td data-label="Main Binder">Al / TiC / WC / Co</td>
                <td data-label="Machined Materials">Forging steel, Hard steel casting</td>
                <td data-label="Application Area">
                  Ball screw, gear, bearing, hub unit, ball cage, etc
                </td>
              </tr>

              <tr>
                <td className="model-cell-mobile" data-label="Model">
                  Φ 60 × 2.0<br />
                  Φ 60 × 3.2<br />
                  Φ 60 × 4.0<br />
                  Φ 60 × 4.76
                </td>
                <td data-label="Grade">BT6000</td>
                <td data-label="CBN Content (Vol%)">55</td>
                <td data-label="CBN Size (μm)">1–5</td>
                <td data-label="Main Binder">Al / TiC / WC / Co</td>
                <td data-label="Machined Materials">Forging steel, Hard steel casting</td>
                <td data-label="Application Area">
                  Ball screw, gear, bearing, hub unit, drive shaft, etc
                </td>
              </tr>
            </tbody>
          </table>
        </div>  
        <p>▶ Advantages:</p>
        <p>• The knowledge of formulas and processes are accumulated over the years. 
          The material has prominent wear resistance, uniformity and compactness.</p>
        <p>• Superb ultra-high pressure technology ensuresa high yield and synthesis efficiency which surpass the peers.</p>
        <p>• Massive production and stable quality. We supply a variety of products ranging from blanks, 
          semi-finished products, refined grinding compacts, cut compacts to the market.</p>
    </>
  );
};

export default PCBNCompositeToolMaterials;
