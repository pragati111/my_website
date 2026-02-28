import React from "react";
import "./DCCuttingWheelsFlapDiscs.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import IndustrialFooter from "../../IndustrialFooter/IndustrialFooter";

const imageMap = {
  "depressed center wheels": {
      1: require("../../../assets/images/depressed center wheels/1.png"),
      2: require("../../../assets/images/depressed center wheels/2.png"),
    },
    "cutoff wheels": {
      1: require("../../../assets/images/cutoff wheels/1.png"),
    },
    "flap discs mop discs": {
      1: require("../../../assets/images/flap discs mop discs/1.png"),
    },
  };

const DCCuttingWheelsFlapDiscs = () => {
  const navigate = useNavigate();

  const renderCards = (count, label, folder) =>
    [...Array(count)].map((_, i) => (
      <div className="dc-image-card" key={i}>
        <img src={imageMap[folder]?.[i + 1]} alt={label} />
        <p>{label}</p>
      </div>
    ));

  return (
    <motion.div
      className="dc-abrasives-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* ===== BACK BUTTON ===== */}
      <div className="dc-back-btn-wrapper" onClick={() => navigate(-1)}>
        <svg
          className="dc-back-icon"
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

      <h1>DC, Cutting Wheels & Flap Discs</h1>

      {/* ================= DEPRESSED CENTER WHEELS ================= */}
      <section className="dc-text-section dc-enhanced-text">
        <h2>Depressed Center Wheels:</h2>

        <div className="dc-text-block">
          <p>
            The depressed center wheel is a grinding wheel made using synthetic
            resin as a binder and putting glass fiber as a reinforcing material
            in the middle layer of the grinding wheel.
          </p>

          <p>
            Usually, it is used for removing the protruding part of a metal or
            non-metal workpiece by attaching a grinding wheel to the portable
            grinder and grinding the rough part of the curved surface.
          </p>

          <p>
            SZ is a premium offset that applies a special resin binder, and
            boasts high performance and efficiency with the use of
            alumina-zirconia abrasives. SZ is specialized for machining
            difficult-to-cut materials, providing superior performance over
            ordinary offsets in all types of steel.
          </p>

          <p>▶ Provides the best polishing performance compared to normal depressed center wheels</p>
          <p>▶ Sensation of grinding is soft with little vibration and separation, greatly reducing worker fatigue</p>
          <p>▶ Provides high tool life by applying high-quality alumina zirconia abrasive</p>
          <p>▶ There is no need for post-processing as it suppresses burning due to its outperforming autogenous effect</p>
          <p>▶ High-speed polishing allows a large amount of processing in a short time</p>
          <p>▶ Fulfilling the highest safety standards (KS certification)</p>
          <p>▶ Well-suited for hard-to-cut materials and steel, stainless steel, cast iron, etc.</p>
        </div>

        <div className="dc-card-grid">
          {renderCards(
            2,
            "Depressed Center Wheel",
            "depressed center wheels"
          )}
        </div>
      </section>

      {/* ================= CUT-OFF WHEELS ================= */}
      <section className="dc-text-section dc-enhanced-text">
        <h2>Cut-Off Wheels:</h2>

        <div className="dc-text-block">
          <p>
            Cut-Off Wheels are grinding wheels made by applying glass fiber as a
            reinforcing material in the middle layer along with a resinoid
            binder, while also being widely used for cutting round bars, square
            bars, pipes, angles and section steel.
          </p>

          <p>▶ Universal cutting wheel that provides top-notch economics and performance</p>
          <p>▶ Strong cutting and smooth working power</p>
          <p>▶ Provides first-rate quality using only grade A or higher raw materials</p>
        </div>

        {/* ===== Dimension Table ===== */}
        <div className="dc-table-wrapper">
          <h3 className="dc-table-heading">Dimension Chart</h3>

          <table className="dc-dimension-table">
            <thead>
              <tr>
                <th>OD </th>
                <th>T</th>
                <th>ID</th>
                <th>Max Speed</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>305</td><td>50</td><td>76.2</td><td>50m/s</td></tr>
              <tr><td>355</td><td>50</td><td>152.4</td><td>50m/s</td></tr>
              <tr><td>405</td><td>60</td><td>152.4</td><td>50m/s</td></tr>
              <tr><td>450</td><td>80</td><td>250</td><td>50m/s</td></tr>
              <tr><td>455</td><td>80</td><td>254</td><td>50m/s</td></tr>
              <tr><td>510</td><td>100</td><td>203.2</td><td>50m/s</td></tr>
              <tr><td>610</td><td>124</td><td>304.8</td><td>50m/s</td></tr>
              <tr><td>660</td><td>100</td><td>304.8</td><td>50m/s</td></tr>
              <tr><td>710</td><td>100</td><td>304.8</td><td>50m/s</td></tr>
              <tr><td>760</td><td>150</td><td>304.8</td><td>50m/s</td></tr>
            </tbody>
          </table>

          <p className="dc-table-note">* Size can be customized</p>
        </div>

        <div className="dc-card-grid">
          {renderCards(1, "Cut-Off Wheel", "cutoff wheels")}
        </div>
      </section>


      {/* ================= FLAP / MOP DISCS ================= */}
      <section className="dc-text-section dc-enhanced-text">
        <h2>Flap Discs/ Mop Discs:</h2>

        <div className="dc-text-block">
          <p>
            Flap discs are made of a plastic or fiberglass backing plate and a
            sheet of polishing cloth. Geared for angle grinder use, it is used
            for rust and paint removal, deburring, and polishing of metal/
            non-metal materials used in shipbuilding, automobiles, aerospace,
            and machinery industries.
          </p>

          <p>▶ Long life and strong grinding power</p>
          <p>▶ Used for various purposes with various materials such as steel, non-ferrous metals, and stainless steel</p>
          <p>▶ Perfect high-speed grinding and high-load bearing grinding</p>
        </div>

        <div className="dc-card-grid">
          {renderCards(
            1,
            "Flap / Mop Disc",
            "flap discs mop discs"
          )}
        </div>
      </section>
      <IndustrialFooter/>
    </motion.div>
  );
};

export default DCCuttingWheelsFlapDiscs;
