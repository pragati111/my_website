import React from "react";
import "./Dressers.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import IndustrialFooter from "../../IndustrialFooter/IndustrialFooter";

const imageMap = {
  "diamond tools": {
      1: require("../../../assets/images/diamond tools/1.PNG"),
    },
    "single point diamond dressers": {
      1: require("../../../assets/images/single point diamond dressers/1.PNG"),
      2: require("../../../assets/images/single point diamond dressers/2.PNG"),
      3: require("../../../assets/images/single point diamond dressers/3.PNG"),
    },
    "chisel type diamond dressers": {
      1: require("../../../assets/images/chisel-type/1.PNG"),
      2: require("../../../assets/images/chisel-type/2.png"),
    },
    "multipoint diamond dresser": {
      1: require("../../../assets/images/multipoint diamond dresser/1.png"),
      2: require("../../../assets/images/multipoint diamond dresser/2.PNG"),
    },
    "blade diamond dresser": {
      1: require("../../../assets/images/blade diamond dresser/1.PNG"),
      2: require("../../../assets/images/blade diamond dresser/2.PNG"),
      3: require("../../../assets/images/blade diamond dresser/3.png"),
      4: require("../../../assets/images/blade diamond dresser/4.png"),
    },
    "mcd dressing blades": {
      1: require("../../../assets/images/mcd dressing blades/1.PNG"),
      2: require("../../../assets/images/mcd dressing blades/2.PNG"),
    },
  };

const Dressers = () => {
  const navigate = useNavigate();

  const renderCards = (count, label, folder) =>
    [...Array(count)].map((_, i) => (
      <div className="dressers-image-card" key={i}>
        <img src={imageMap[folder]?.[i + 1]} alt={label} />
        <p>{label}</p>
      </div>
    ));

  return (
    <motion.div
      className="dressers-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* ===== BACK BUTTON ===== */}
      <div className="dressers-back-btn-wrapper" onClick={() => navigate(-1)}>
        <svg
          className="dressers-back-icon"
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

      <h1>Dressers</h1>

      {/* ================= DIAMOND TOOLS ================= */}
      <section className="dressers-text-section dressers-enhanced-text">
        <h2>Diamond Tools:</h2>

        <div className="dressers-text-block">
          <p>
            Diamond Tools are introduced for use in line with dressing and truing purposes. 
            The array of single point diamond dressers, 
            blade type diamond dressers and multi dressers are available with a variety of tools 
            fully geared to exposing new grinding grains in abrasive wheels and creating sharp cutting edges. 
            The array of high-quality dressers well-suited for high-speed, continuous dressing are introduced.
          </p>
        </div>

        <div className="dressers-card-grid">
          {renderCards(
            1,
            "Diamond Tools",
            "diamond tools"
          )}
        </div>
      </section>

      {/* ================= Single-Point Diamond Dressers ================= */}
      <section className="dressers-text-section dressers-enhanced-text">
        <h2>Single-Point Diamond Dressers:</h2>

        <div className="dressers-text-block">
          <p>
            High-quality single-point diamond dressers are provided, 
            which are the most basic dressing tools used to expose new abrasive grains 
            in the abrasive wheel and create new cutting edges. 
            It is necessary to select high-quality diamonds with the right 
            dimensions since the tool life is the most important factor. 
            With a range of specifications and quality products provided to meet 
            the needs of customers, please refer to the table below to correctly order a special type of dresser.
          </p>
        </div>

        {/* ===== Dimension Table (Updated as per Image) ===== */}
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


        <div className="dressers-card-grid">
          {renderCards(3, "Single-Point Diamond Dressers", "single point diamond dressers")}
        </div>
      </section>


      {/* ================= Chisel-Type Diamond Dressers ================= */}
      <section className="dressers-text-section dressers-enhanced-text">
        <h2>Chisel-Type Diamond Dressers:</h2>

        <div className="dressers-text-block">
          <p>
            Foaming Dresser is manufactured by skilled professionals using 
            high-quality natural diamonds and other materials. 
            It is a dresser well-suited for grinding stone forming, 
            and can be customized according to the R(circle) and suitable angle at the customer's request.
          </p>
        </div>

        {/* ===== Dimension Table 2 (Radius / Angle / Tool Code) ===== */}
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


        <div className="dressers-card-grid">
          {renderCards(
            2,
            "Chisel-Type Diamond Dressers",
            "chisel type diamond dressers"
          )}
        </div>
      </section>

      {/* ================= Multi-Set Diamond Dressers ================= */}
      <section className="dressers-text-section dressers-enhanced-text">
        <h2>Multi-Set Diamond Dressers:</h2>

        <div className="dressers-text-block">
          <p>
            Diamond Grit-Impregnated Dressers have been developed from multipoint dressers. 
            In contrast to the item below, they are manufactured from crushed diamond grit 
            rather than numerous small natural diamonds, and containd a large number of diamond particles. 
            The advantage of the Diamond-Impregnated Dresser lies in its exceptional sharpness which is 
            derived from the sharp edges and points of the broken diamond grit.
          </p>
        </div>
      </section>

      {/* ================= Multipoint Diamond Dresser ================= */}
      <section className="dressers-text-section dressers-enhanced-text">
        <h2>Multipoint Diamond Dresser:</h2>

        <div className="dressers-text-block">
          <p>
            The diamonds can be used completely without resetting them, 
            and due to there being several diamond points, the pressure 
            of dressing is reduced when using this tool. 
            These come in many sizes and specifications to fulfill the various needs 
            of different customers. The featured dressers are bonded with multiple diamonds, 
            which are arranged in different patterns for various cutting and grinding operations. 
            These dressers are manufactured in compliance with the industry-wide parameters 
            and the demands of customers. Moreover, our wide distribution of transportation 
            facilities has enabled us to deliver our Multipoint Diamond Dressers within a specific timeframe.
          </p>
        </div>

        <div className="dressers-card-grid">
          {renderCards(
            2,
            "Multipoint Diamond Dresser",
            "multipoint diamond dresser"
          )}
        </div>
        <div className="dressers-text-block">
          <p>
            Sizes:
          </p>
          <p>
            •	MIC-24 with 24 diamonds for a wheel size up to 600 mm in diameter            
          </p>
          <p>
            •	MIC-36 with 36 diamonds for a wheel size above 600 mm in diameter
          </p>
        </div>
      </section>

      {/* ================= Blade Diamond Dresser ================= */}
      <section className="dressers-text-section dressers-enhanced-text">
        <h2>Blade Diamond Dresser:</h2>
        <h3>Grit-Type Blade Diamond Dresser</h3>
        <h4>Grit-Type</h4>
        <div className="dressers-text-block">
          <p>
            With this blade dresser, blocky diamond grains are set according to an optimal pattern. 
            This blade is made for an exceptionally long service life and used for precision dressing applications.
          </p>
        </div>

        <h3>Needle-Type Blade Diamond Dresser</h3>
        <h4>Needle-Type</h4>
        <div className="dressers-text-block">
          <p>
            With this blade diamond dresser, needle-shaped diamonds are carefully selected and 
            set manually in an optimal pattern in several layers. 
            The uniform thickness of the diamond needles and setting pattern maintain 
            a constant effective width of the blade over the whole tool life to get a 
            constant high-level surface finish.
          </p>
        </div>

        <div className="dressers-card-grid">
          {renderCards(
            4,
            "Blade Diamond Dresser",
            "blade diamond dresser"
          )}
        </div>
      </section>

      {/* ================= MCD Dressing Blades ================= */}
      <section className="dressers-text-section dressers-enhanced-text">
        <h2>MCD Dressing Blades:</h2>
        <div className="dressers-text-block">
          <p>
            For a longer life, consistant dressing with a high level of surface finish. 
          </p>
        </div>

        <h3>MCD dressing blades (Mono Crystalline Diamond)</h3>
        <div className="dressers-text-block">
          <p>
            MCD blades are fully synthetic products. 
            These MCD inserts are arranged in a very systematic pattern 
            in parallel or at 45º into the blade dressing blank. 
            The thermal conductivity of MCD outperforms that of natural diamonds. 
            This allows heat to be drawn away from the contact zone between 
            the dressing tool and grinding wheel, thus contributing highly to 
            consistent performance of dressing tools.
          </p>
        </div>

        <div className="dressers-card-grid">
          {renderCards(
            2,
            "MCD Dressing Blades",
            "mcd dressing blades"
          )}
        </div>

        <h3>Blade-Type Dresser with MCD and CVD Diamonds</h3>
        <div className="dressers-text-block">
          <p>
            As MCD and CVD diamonds are artificial diamonds, these items are produced to customer specifications.
          </p>
          <p>Advantage of Blade Dressers:</p>
          <p>• No resetting or re-lapping required.</p>
          <p>• Reduce inventory, cost cutting up to 40~50%</p>
          <p>• These tools can be used completely without requiring constant maintenance.</p>
        </div>
      </section>
      <IndustrialFooter/>
    </motion.div>
  );
};

export default Dressers;
