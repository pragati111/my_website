import React, { useState } from "react";
import "./Inserts.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import IndustrialFooter from "../../IndustrialFooter/IndustrialFooter";

const imageMap = {
  "pcbn inserts specifications": {
  },
  "pcbn composite tool materials": {
    1: require("../../../assets/images/pcbn composite tool materials/1.PNG"),
    2: require("../../../assets/images/pcbn composite tool materials/2.PNG"),
  },
  "pcbn grooving inserts": {
    1: require("../../../assets/images/pcbn grooving inserts/1.PNG"),
    2: require("../../../assets/images/pcbn grooving inserts/2.PNG"),
  },
};

// Table PCBN Images
const tablePcbn = {
  1: require("../../../assets/images/table-pcbn/1.png"),
  2: require("../../../assets/images/table-pcbn/2.png"),
  3: require("../../../assets/images/table-pcbn/3.png"),
  4: require("../../../assets/images/table-pcbn/4.png"),
  5: require("../../../assets/images/table-pcbn/5.png"),
  6: require("../../../assets/images/table-pcbn/6.png"),
  7: require("../../../assets/images/table-pcbn/7.png"),
  8: require("../../../assets/images/table-pcbn/8.png"),
  9: require("../../../assets/images/table-pcbn/9.png"),
  10: require("../../../assets/images/table-pcbn/10.png"),
  11: require("../../../assets/images/table-pcbn/11.png"),
  12: require("../../../assets/images/table-pcbn/12.png"),
  13: require("../../../assets/images/table-pcbn/13.png"),
  14: require("../../../assets/images/table-pcbn/14.png"),
  15: require("../../../assets/images/table-pcbn/15.png"),
  16: require("../../../assets/images/table-pcbn/16.png"),
  17: require("../../../assets/images/table-pcbn/17.png"),
  18: require("../../../assets/images/table-pcbn/18.png"),
  19: require("../../../assets/images/table-pcbn/19.png"),
  20: require("../../../assets/images/table-pcbn/20.png"),
  21: require("../../../assets/images/table-pcbn/21.png"),
  22: require("../../../assets/images/table-pcbn/22.png"),
  23: require("../../../assets/images/table-pcbn/23.png"),
  24: require("../../../assets/images/table-pcbn/24.png"),
  25: require("../../../assets/images/table-pcbn/25.png"),
  26: require("../../../assets/images/table-pcbn/26.png"),
  27: require("../../../assets/images/table-pcbn/27.png"),
};

const Inserts = () => {
  const [openSections, setOpenSections] = useState({
    solid: true,
    braze: true,
    overall: true,
    multi: true,
  });


  const toggleSection = (key) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };


  const navigate = useNavigate();

  const renderCards = (count, label, folder) =>
    [...Array(count)].map((_, i) => (
      <div className="inserts-image-card" key={i}>
        <img
          src={imageMap[folder]?.[i + 1]}
          alt={label}
        />
        <p>{label}</p>
      </div>
    ));

  return (
    <motion.div
      className="inserts-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Back Button */}
      <div className="inserts-back-btn-wrapper" onClick={() => navigate(-1)}>
        <svg
          className="inserts-back-icon"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
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

      <h1>Inserts</h1>

      {/* ================= PCBN Inserts Specifications section ================= */}
      <section className="inserts-text-section inserts-enhanced-text">

        {/* ================= PCBN Inserts Specifications table with heading ================= */}
        <div className="inserts-table-wrapper">
          <h3 className="inserts-table-title">PCBN Inserts Specifications</h3>

          <table className="inserts-dimension-table mobile-card-table">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Model</th>
                <th>L</th>
                <th>i.C</th>
                <th>S</th>
              </tr>
            </thead>

            <tbody>
              <tr
                className="inserts-table-section clickable"
                onClick={() => toggleSection("solid")}
              >
                <td colSpan="5">
                  <div className="inserts-section-header">
                    <span>Solid PCBN Inserts Series</span>
                    <span className={` ${openSections.solid ? "open" : "closed"}`}>▼</span>
                  </div>
                </td>
              </tr>


              {openSections.solid && (
              <>
              {/* ===== First Image (RowSpan = 4) ===== */}
              <tr>
                <td rowSpan="4">
                  <img
                    src={tablePcbn[1]}
                    alt="Solid PCBN Insert Type 1"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">SNGN0904□□</td>
                <td data-label="L">9.525</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">4.76</td>
              </tr>

              <tr>
                <td data-label="Model">SNGN1204□□</td>
                <td data-label="L">12.7</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">4.76</td>
              </tr>

              <tr>
                <td data-label="Model">SNGN1608□□</td>
                <td data-label="L">16.0</td>
                <td data-label="i.C">16.0</td>
                <td data-label="S">8.0</td>
              </tr>

              <tr>
                <td data-label="Model">SNGN2010□□</td>
                <td data-label="L">20.0</td>
                <td data-label="i.C">20.0</td>
                <td data-label="S">10.0</td>
              </tr>

              {/* ===== Second Image (RowSpan = 3) ===== */}
              <tr>
                <td rowSpan="3">
                  <img
                    src={tablePcbn[2]}
                    alt="Solid PCBN Insert Type 2"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">SNGX1204□□</td>
                <td data-label="L">12.7</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">4.76</td>
              </tr>

              <tr>
                <td data-label="Model">SNGX1207□□</td>
                <td data-label="L">12.7</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">7.94</td>
              </tr>

              <tr>
                <td data-label="Model">SNGX1608□□</td>
                <td data-label="L">16.0</td>
                <td data-label="i.C">16.0</td>
                <td data-label="S">8.0</td>
              </tr>

              {/* ===== Third Image (RowSpan = 2) ===== */}
              <tr>
                <td rowSpan="2">
                  <img
                    src={tablePcbn[3]}
                    alt="Solid PCBN Insert Type 3"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">SCGN0904□□</td>
                <td data-label="L">9.525</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">4.76</td>
              </tr>

              <tr>
                <td data-label="Model">SCGN1204□□</td>
                <td data-label="L">12.7</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">4.76</td>
              </tr>

              {/* ===== Fourth Image (RowSpan = 3) ===== */}
              <tr>
                <td rowSpan="3">
                  <img
                    src={tablePcbn[4]}
                    alt="Solid PCBN Insert Type 4"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">CNGN1204□□</td>
                <td data-label="L">12.9</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">4.76</td>
              </tr>

              <tr>
                <td data-label="Model">CNGN1207□□</td>
                <td data-label="L">12.9</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">7.94</td>
              </tr>

              <tr>
                <td data-label="Model">CNGN1608□□</td>
                <td data-label="L">16.1</td>
                <td data-label="i.C">15.875</td>
                <td data-label="S">8.0</td>
              </tr>

              {/* ===== Fifth Image (RowSpan = 3) ===== */}
              <tr>
                <td rowSpan="3">
                  <img
                    src={tablePcbn[5]}
                    alt="Solid PCBN Insert Type 5"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">CNGX1204□□</td>
                <td data-label="L">12.9</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">4.76</td>
              </tr>

              <tr>
                <td data-label="Model">CNGX1207□□</td>
                <td data-label="L">12.9</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">7.94</td>
              </tr>

              <tr>
                <td data-label="Model">CNGX1608□□</td>
                <td data-label="L">16.1</td>
                <td data-label="i.C">15.875</td>
                <td data-label="S">8.0</td>
              </tr>


              {/* ===== Sixth Image (RowSpan = 2) ===== */}
              <tr>
                <td rowSpan="2">
                  <img
                    src={tablePcbn[6]}
                    alt="Solid PCBN Insert Type 6"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">TNGN1103□□</td>
                <td data-label="L">11.0</td>
                <td data-label="i.C">6.35</td>
                <td data-label="S">3.18</td>
              </tr>

              <tr>
                <td data-label="Model">TNGN1604□□</td>
                <td data-label="L">16.5</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">4.76</td>
              </tr>

              {/* ===== Seventh Image (RowSpan = 1) ===== */}
              <tr>
                <td rowSpan="1">
                  <img
                    src={tablePcbn[7]}
                    alt="Solid PCBN Insert Type 7"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">WNGN0804□□</td>
                <td data-label="L">8.7</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">4.76</td>
              </tr>

              {/* ===== Eighth Image (RowSpan = 1) ===== */}
              <tr>
                <td rowSpan="1">
                  <img
                    src={tablePcbn[8]}
                    alt="Solid PCBN Insert Type 8"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">DNGN1104□□</td>
                <td data-label="L">11.6</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">4.76</td>
              </tr>

              {/* ===== Ninth Image (RowSpan = 7) ===== */}
              <tr>
                <td rowSpan="7">
                  <img
                    src={tablePcbn[9]}
                    alt="Solid PCBN Insert Type 9"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">R◇GN0604</td>
                <td data-label="L">-</td>
                <td data-label="i.C">6.35</td>
                <td data-label="S">4.76</td>
              </tr>

              <tr>
                <td data-label="Model">R◇GN0904</td>
                <td data-label="L">-</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">4.76</td>
              </tr>

              <tr>
                <td data-label="Model">R◇GN1204</td>
                <td data-label="L">-</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">4.76</td>
              </tr>

              <tr>
                <td data-label="Model">R◇GN1207</td>
                <td data-label="L">-</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">7.94</td>
              </tr>

              <tr>
                <td data-label="Model">R◇GN1608</td>
                <td data-label="L">-</td>
                <td data-label="i.C">16.0</td>
                <td data-label="S">18.0</td>
              </tr>

              <tr>
                <td data-label="Model">R◇GN2008</td>
                <td data-label="L">-</td>
                <td data-label="i.C">20.0</td>
                <td data-label="S">8.0</td>
              </tr>

              <tr>
                <td data-label="Model">R◇GN2010</td>
                <td data-label="L">-</td>
                <td data-label="i.C">20.0</td>
                <td data-label="S">10.0</td>
              </tr>


              {/* ===== Tenth Image (RowSpan = 6) ===== */}
              <tr>
                <td rowSpan="6">
                  <img
                    src={tablePcbn[10]}
                    alt="Solid PCBN Insert Type 10"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">RCGX0605</td>
                <td data-label="L">-</td>
                <td data-label="i.C">6.35</td>
                <td data-label="S">5.0</td>
              </tr>

              <tr>
                <td data-label="Model">RCGX0907</td>
                <td data-label="L">-</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">7.94</td>
              </tr>

              <tr>
                <td data-label="Model">RCGX1207</td>
                <td data-label="L">-</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">7.94</td>
              </tr>

              <tr>
                <td data-label="Model">RCGX1510</td>
                <td data-label="L">-</td>
                <td data-label="i.C">15.875</td>
                <td data-label="S">10.0</td>
              </tr>

              <tr>
                <td data-label="Model">RCGX1910</td>
                <td data-label="L">-</td>
                <td data-label="i.C">19.05</td>
                <td data-label="S">10.0</td>
              </tr>

              <tr>
                <td data-label="Model">RCGX2010</td>
                <td data-label="L">-</td>
                <td data-label="i.C">20.0</td>
                <td data-label="S">10.0</td>
              </tr>

              {/* ===== Eleventh Image (RowSpan = 8) ===== */}
              <tr>
                <td rowSpan="8">
                  <img
                    src={tablePcbn[11]}
                    alt="Solid PCBN Insert Type 11"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">RCGV0604</td>
                <td data-label="L">-</td>
                <td data-label="i.C">6.35</td>
                <td data-label="S">4.76</td>
              </tr>

              <tr>
                <td data-label="Model">RCGV0605</td>
                <td data-label="L">-</td>
                <td data-label="i.C">6.35</td>
                <td data-label="S">5.0</td>
              </tr>

              <tr>
                <td data-label="Model">RCGV0907</td>
                <td data-label="L">-</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">7.94</td>
              </tr>

              <tr>
                <td data-label="Model">RCGV1207</td>
                <td data-label="L">-</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">7.94</td>
              </tr>

              <tr>
                <td data-label="Model">RCGV1510</td>
                <td data-label="L">-</td>
                <td data-label="i.C">15.875</td>
                <td data-label="S">10.0</td>
              </tr>

              <tr>
                <td data-label="Model">RCGV1910</td>
                <td data-label="L">-</td>
                <td data-label="i.C">19.05</td>
                <td data-label="S">10.0</td>
              </tr>

              <tr>
                <td data-label="Model">RCGV2012</td>
                <td data-label="L">-</td>
                <td data-label="i.C">20.0</td>
                <td data-label="S">12.0</td>
              </tr>

              <tr>
                <td data-label="Model">RCGV2512</td>
                <td data-label="L">-</td>
                <td data-label="i.C">25.0</td>
                <td data-label="S">12.0</td>
              </tr>
              
              </>
              )}



              <tr
                className="inserts-table-section clickable"
                onClick={() => toggleSection("braze")}
              >
                <td colSpan="5">
                  <div className="inserts-section-header">
                    <span>PCBN Braze Inserts Series</span>
                    <span className={` ${openSections.braze ? "open" : "closed"}`}>▼</span>
                  </div>
                </td>
              </tr>
              
              {openSections.braze && (
              <>
              {/* ===== 12th Image (RowSpan = 1) ===== */}
              <tr>
                <td rowSpan="1">
                  <img
                    src={tablePcbn[12]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">CNGA1204□□-ZH</td>
                <td data-label="L">12.9</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">4.76</td>
              </tr>

              {/* ===== 13th Image (RowSpan = 1) ===== */}
              <tr>
                <td rowSpan="1">
                  <img
                    src={tablePcbn[13]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">TNGA1604□□-ZH</td>
                <td data-label="L">16.5</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">4.76</td>
              </tr>

              {/* ===== 14th Image (RowSpan = 1) ===== */}
              <tr>
                <td rowSpan="1">
                  <img
                    src={tablePcbn[14]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">WNGA0804□□-ZH</td>
                <td data-label="L">8.7</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">4.76</td>
              </tr>

              {/* ===== 15th Image (RowSpan = 1) ===== */}
              <tr>
                <td rowSpan="1">
                  <img
                    src={tablePcbn[15]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">VNGA1604□□-ZH</td>
                <td data-label="L">16.6</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">4.76</td>
              </tr>

              {/* ===== 16th Image (RowSpan = 2) ===== */}
              <tr>
                <td rowSpan="2">
                  <img
                    src={tablePcbn[16]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">DNGA1504□□-ZH</td>
                <td data-label="L">15.5</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">4.76</td>
              </tr>

              <tr>
                <td data-label="Model">DNGA1506□□-ZH</td>
                <td data-label="L">15.5</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">6.35</td>
              </tr>
              </>
              )}
              
              <tr
                className="inserts-table-section clickable"
                onClick={() => toggleSection("overall")}
              >
                <td colSpan="5">
                  <div className="inserts-section-header">
                    <span>PCBN Overall composite Inserts Series</span>
                    <span className={` ${openSections.overall ? "open" : "closed"}`}>▼</span>
                  </div>
                </td>
              </tr>
              
              {openSections.overall && (
              <>
              {/* ===== 17th Image (RowSpan = 1) ===== */}
              <tr>
                <td rowSpan="1">
                  <img
                    src={tablePcbn[17]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">SNGA1204□□-E</td>
                <td data-label="L">12.7</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">4.76</td>
              </tr>

              {/* ===== 18th Image (RowSpan = 1) ===== */}
              <tr>
                <td rowSpan="1">
                  <img
                    src={tablePcbn[18]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">CNGA1204□□-E</td>
                <td data-label="L">12.9</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">4.76</td>
              </tr>

              {/* ===== 19th Image (RowSpan = 1) ===== */}
              <tr>
                <td rowSpan="1">
                  <img
                    src={tablePcbn[19]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">TNGA1604□□-E</td>
                <td data-label="L">16.5</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">4.76</td>
              </tr>

              {/* ===== 20th Image (RowSpan = 1) ===== */}
              <tr>
                <td rowSpan="1">
                  <img
                    src={tablePcbn[20]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">WNGA0804□□-E</td>
                <td data-label="L">8.7</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">4.76</td>
              </tr>

              {/* ===== 21st Image (RowSpan = 1) ===== */}
              <tr>
                <td rowSpan="1">
                  <img
                    src={tablePcbn[21]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">CCGW09T3□□-F</td>
                <td data-label="L">9.7</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">3.97</td>
              </tr>

              {/* ===== 22nd Image (RowSpan = 2) ===== */}
              <tr>
                <td rowSpan="2">
                  <img
                    src={tablePcbn[22]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">TCGW0902□□-F</td>
                <td data-label="L">9.6</td>
                <td data-label="i.C">5.56</td>
                <td data-label="S">2.38</td>
              </tr>

              <tr>
                <td data-label="Model">TCGW1103□□-F</td>
                <td data-label="L">11.0</td>
                <td data-label="i.C">6.35</td>
                <td data-label="S">3.18</td>
              </tr>

              {/* ===== 23rd Image (RowSpan = 1) ===== */}
              <tr>
                <td rowSpan="1">
                  <img
                    src={tablePcbn[23]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">SCGW09T3□□-F</td>
                <td data-label="L">9.525</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">3.97</td>
              </tr>

              {/* ===== 24th Image (RowSpan = 1) ===== */}
              <tr>
                <td rowSpan="1">
                  <img
                    src={tablePcbn[24]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">DCGW11T3□□-F</td>
                <td data-label="L">11.6</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">3.97</td>
              </tr>
              </>
              )}

              <tr
                className="inserts-table-section clickable"
                onClick={() => toggleSection("multi")}
              >
                <td colSpan="5">
                  <div className="inserts-section-header">
                    <span>Multi-tipped PCBN Inserts Series</span>
                    <span className={` ${openSections.multi ? "open" : "closed"}`}>▼</span>
                  </div>
                </td>
              </tr>
              
              {openSections.multi && (
              <>

              {/* ===== 25th Image (RowSpan = 1) ===== */}
              <tr>
                <td rowSpan="1">
                  <img
                    src={tablePcbn[25]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">VNGA1604□□-H</td>
                <td data-label="L">16.6</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">4.76</td>
              </tr>

              {/* ===== 26th Image (RowSpan = 2) ===== */}
              <tr>
                <td rowSpan="2">
                  <img
                    src={tablePcbn[26]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">VCGW1604□□-H</td>
                <td data-label="L">16.6</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">4.76</td>
              </tr>

              <tr>
                <td data-label="Model">VBGW1604□□-H</td>
                <td data-label="L">16.6</td>
                <td data-label="i.C">9.525</td>
                <td data-label="S">4.76</td>
              </tr>

              {/* ===== 27th Image (RowSpan = 2) ===== */}
              <tr>
                <td rowSpan="2">
                  <img
                    src={tablePcbn[27]}
                    alt="PCBN Blaze Inserts Series"
                    className="inserts-table-image"
                  />
                </td>
                <td data-label="Model">DNGA1504□□-H</td>
                <td data-label="L">15.7</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">4.76</td>
              </tr>

              <tr>
                <td data-label="Model">DNGA1506□□-H</td>
                <td data-label="L">15.7</td>
                <td data-label="i.C">12.7</td>
                <td data-label="S">6.35</td>
              </tr>
              </>
              )}

              <tr className="inserts-remark-row">
                <td className="remark-title">Remark</td>
                <td colSpan="4" className="remark-content">
                  <div>
                    <span className="remark-key">L</span> : Cutting Edge Length (mm) &nbsp;&nbsp;
                    <span className="remark-key">i.C</span> : Inscribed Circle (mm) &nbsp;&nbsp;
                    <span className="remark-key">S</span> : Thickness (mm)
                  </div>
                  <div>
                    <span className="remark-key">E</span> : Double face &nbsp;&nbsp;
                    <span className="remark-key">F</span> : Single face &nbsp;&nbsp;
                    <span className="remark-key">□□</span> : Nose Radius &nbsp;&nbsp;
                    <span className="remark-key">◇</span> : N or C
                  </div>
                </td>
              </tr>


              
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= PCBN composite tool materials (PCBN compacts) ================= */}
      <section className="inserts-text-section inserts-enhanced-text">
        <h2>PCBN composite tool materials (PCBN compacts):</h2>
        <div className="inserts-card-grid">
          {renderCards(
            2,
            "PCBN Composite Tool Materials",
            "pcbn composite tool materials"
          )}
        </div>
        {/* ================= Table ================= */}
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
        <div className="inserts-text-block">   
          <p>▶ Advantages:</p>
          <p>• The knowledge of formulas and processes are accumulated over the years. 
            The material has prominent wear resistance, uniformity and compactness.</p>
          <p>• Superb ultra-high pressure technology ensuresa high yield and synthesis efficiency which surpass the peers.</p>
          <p>• Massive production and stable quality. We supply a variety of products ranging from blanks, 
            semi-finished products, refined grinding compacts, cut compacts to the market.</p>
        </div>     
      </section>

      {/* ================= PCBN Grooving Inserts ================= */}
      <section className="inserts-text-section inserts-enhanced-text">
        <h2>PCBN Grooving Inserts:</h2>
        <h3>Equipment Advantages</h3>
        <div className="inserts-text-block">
          <p>
            Several most advanced automatic machines specially used for grooving inserts, guaranteeing mass 
            production with stable and high quality.
          </p>
        </div>

        <h3>Materials Advantages</h3>
        <div className="inserts-text-block">
          <p>
            30 years R&D experience of material guarantee the material stable and high quality.
          </p>
        </div>
        <div className="inserts-card-grid">
          {renderCards(
            2,
            "PCBN Grooving Inserts",
            "pcbn grooving inserts"
          )}
        </div>
      </section>
      <IndustrialFooter/>
    </motion.div>
  );
};

export default Inserts;
