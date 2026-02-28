import React from "react";
import "./MetalWorkingFluids.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import IndustrialFooter from "../../IndustrialFooter/IndustrialFooter";

const MetalWorkingFluids = () => {
  const navigate = useNavigate();

  return (
    <motion.div className="metal-working-fluids-page"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      ease: "easeOut"
    }}>
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



      <h1>Metal Working Fluids</h1>

      {/* ================= FALCON ECO================= */}
      <section className="text-section enhanced-text">
        <h2>FALCON ECO</h2>

        <div className="text-block">
          <p>
            Falcon ECO is conventional water-soluble metal removal fluid for machining and grinding applications.
          </p>
        </div>

        <div className="info-card">
          <h3>Typical Applications: </h3>
          <p>Grinding and machining of cast iron, steel and aluminium alloys.</p>
        </div>
        <div className="info-card">
          <h3>Recommended Concentrations: </h3>
          <p>Machining 10:1 to 20:1 </p>
          <p>Grinding 20:1 to 25:1</p>
        </div>

        <div className="info-card">
          <h3>Advantages:</h3>
          <ul>
            <li>Economical to use. </li>
            <li>Provides corrosion protection and good lubrication for machine ways and indexing mechanisms. </li>
            <li>It can be used for individual & centralized tank system.</li>
          </ul>
        </div>
        <div className="spec-table-wrapper">
        <h3>Appearance:</h3>
        <table className="spec-table">
          <tbody>
            <tr>
              <td>Neat</td>
              <td>Clear Amber fluid</td>
            </tr>
            <tr>
              <td>Stability (4°C / Ambient / 50°C)</td>
              <td>Clear Stable</td>
            </tr>
            <tr>
              <td>Specific Gravity (at 29.5°C)</td>
              <td>0.873</td>
            </tr>
            <tr>
              <td>Kinematic Viscosity (at 40°C)</td>
              <td>28-30 cSt</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="spec-table-wrapper">
        <h3>Emulsion Type:</h3>
        <table className="spec-table">
          <tbody>
            <tr>
              <td>pH @ 5% deionized water</td>
              <td>9-10</td>
            </tr>
            <tr>
              <td>pH @ 5% 500ppm hard water</td>
              <td>9-10</td>
            </tr>
            <tr>
              <td>Refractive Index</td>
              <td>1.0</td>
            </tr>
            <tr>
              <td>Cast Iron Corrosion Test (IP 287)</td>
              <td>5.0% BP (clean paper)</td>
            </tr>
            <tr>
              <td>Aluminium Corrosion Test</td>
              <td>No Staining</td>
            </tr>
            <tr>
              <td>TOYODA Demulsification</td>
              <td>89/ 2 / 9</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="info-card">
          <h3>Shelf Life:</h3>
          <p>Under normal conditions, the recommended shelf life is 12 months.</p>
      </div>
      <div className="info-card">
          <h3>Packaging:</h3>
          <p>Shipped in 30 Liters and 210 Liters.</p>
      </div>
      </section>


      {/* ================= FALCON TROT================= */}
      <section className="text-section enhanced-text">
        <h2>FALCON TROT</h2>

        <div className="text-block">
          <p>
            Falcon TROT is conventional water-soluble metal removal fluid for machining and grinding applications.
          </p>
        </div>

        <div className="info-card">
          <h3>Typical Applications: </h3>
          <p>Grinding and machining of cast iron and steel alloys.</p>
        </div>
        <div className="info-card">
          <h3>Recommended Concentrations: </h3>
          <p>Machining 10:1 to 20:1 </p>
          <p>Grinding 20:1 to 25:1</p>
        </div>

        <div className="info-card">
          <h3>Advantages:</h3>
          <ul>
            <li>Good antibacterial performance prolongs coolant sump life. </li>
            <li>Provides corrosion protection and good lubrication for machine ways and indexing mechanisms.</li>
            <li>It can be used for individual & centralized tank system.</li>
          </ul>
        </div>
        <div className="spec-table-wrapper">
        <h3>Appearance:</h3>
        <table className="spec-table">
          <tbody>
            <tr>
              <td>Neat</td>
              <td>Clear Amber fluid</td>
            </tr>
            <tr>
              <td>Stability (4°C / Ambient / 50°C)</td>
              <td>Clear Stable</td>
            </tr>
            <tr>
              <td>Specific Gravity (at 29.5°C)</td>
              <td>0.980</td>
            </tr>
            <tr>
              <td>Kinematic Viscosity (at 40°C)</td>
              <td>85-90 cSt</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="spec-table-wrapper">
        <h3>Emulsion Type:</h3>
        <table className="spec-table">
          <tbody>
            <tr>
              <td>pH @ 5% deionized water</td>
              <td>9-10</td>
            </tr>
            <tr>
              <td>pH @ 5% 500ppm hard water</td>
              <td>9-10</td>
            </tr>
            <tr>
              <td>Refractive Index</td>
              <td>1.6</td>
            </tr>
            <tr>
              <td>Cast Iron Corrosion Test (IP 287)</td>
              <td>2.0% BP (clean paper)</td>
            </tr>
            <tr>
              <td>TOYODA Demulsification</td>
              <td>89/ 2 / 9</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="info-card">
          <h3>Shelf Life:</h3>
          <p>Under normal conditions, the recommended shelf life is 12 months.</p>
      </div>
      <div className="info-card">
          <h3>Packaging:</h3>
          <p>Shipped in 30 Liters and 210 Liters.</p>
      </div>
      </section>


      <IndustrialFooter/>
    </motion.div>
  );
};

export default MetalWorkingFluids;
