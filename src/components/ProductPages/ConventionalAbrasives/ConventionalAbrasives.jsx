import React from "react";
import "./ConventionalAbrasives.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import IndustrialFooter from "../../IndustrialFooter/IndustrialFooter";

const ConventionalAbrasives = () => {
  const navigate = useNavigate();

  const imageMap = {
    "cylindrical grinding wheels": {
      1: require("../../../assets/images/cylindrical grinding wheels/1.png"),
      2: require("../../../assets/images/cylindrical grinding wheels/2.png"),
      3: require("../../../assets/images/cylindrical grinding wheels/3.png"),
      4: require("../../../assets/images/cylindrical grinding wheels/4.png"),
    },
    "surface grinding wheels": {
      1: require("../../../assets/images/surface grinding wheels/1.png"),
      2: require("../../../assets/images/surface grinding wheels/2.png"),
    },
    "nut inserted double disc": {
      1: require("../../../assets/images/nut inserted double disc/1.PNG"),
      2: require("../../../assets/images/nut inserted double disc/2.PNG"),
      3: require("../../../assets/images/nut inserted double disc/3.PNG"),
      4: require("../../../assets/images/nut inserted double disc/4.PNG"),
    },
    "segment straight cup and ring wheel": {
      1: require("../../../assets/images/segment straight cup and ring wheel/1.PNG"),
      2: require("../../../assets/images/segment straight cup and ring wheel/2.PNG"),
      3: require("../../../assets/images/segment straight cup and ring wheel/3.PNG"),
      4: require("../../../assets/images/segment straight cup and ring wheel/4.PNG"),
      5: require("../../../assets/images/segment straight cup and ring wheel/5.png"),
      6: require("../../../assets/images/segment straight cup and ring wheel/6.png"),
    },
    "internal grinding wheels": {
      1: require("../../../assets/images/internal grinding wheels/1.PNG"),
      2: require("../../../assets/images/internal grinding wheels/2.PNG"),
      3: require("../../../assets/images/internal grinding wheels/3.png"),
      4: require("../../../assets/images/internal grinding wheels/4.png"),
    },
    "gear and gear cutting tools grinding": {
      1: require("../../../assets/images/gear and gear cutting tools grinding/1.PNG"),
      2: require("../../../assets/images/gear and gear cutting tools grinding/2.png"),
      3: require("../../../assets/images/gear and gear cutting tools grinding/3.png"),
      4: require("../../../assets/images/gear and gear cutting tools grinding/4.png"),
      5: require("../../../assets/images/gear and gear cutting tools grinding/5.png"),
    },
    "high perf snagging fettling wheels": {
      1: require("../../../assets/images/high perf snagging fettling wheels/1.png"),
      2: require("../../../assets/images/high perf snagging fettling wheels/2.PNG"),
    },
    "roll grinding wheel": {
      1: require("../../../assets/images/roll grinding wheel/1.png"),
    },
    "taper rollers end face grinding wheel": {
      1: require("../../../assets/images/taper rollers end face grinding wheel/1.png"),
    },
    "rice whitening rollers": {
      1: require("../../../assets/images/rice whitening rollers/1.png"),
      2: require("../../../assets/images/rice whitening rollers/2.png"),
    },
    "saw gumming cface grinding wheel": {
      1: require("../../../assets/images/saw gumming cface grinding wheel/1.png"),
    },
    "tool rooms grinding wheels general item": {
      1: require("../../../assets/images/tool rooms grinding wheels general item/1.png"),
      2: require("../../../assets/images/tool rooms grinding wheels general item/2.PNG"),
      3: require("../../../assets/images/tool rooms grinding wheels general item/3.png"),
      4: require("../../../assets/images/tool rooms grinding wheels general item/4.PNG"),
      5: require("../../../assets/images/tool rooms grinding wheels general item/5.PNG"),
      6: require("../../../assets/images/tool rooms grinding wheels general item/6.PNG"),
      7: require("../../../assets/images/tool rooms grinding wheels general item/7.PNG"),
      8: require("../../../assets/images/tool rooms grinding wheels general item/8.PNG"),
    },
  };

  const renderCards = (count, label, folder) =>
    [...Array(count)].map((_, i) => {
      const imgNumber = i + 1;
      const imageUrl = imageMap[folder]?.[imgNumber];

      return (
        <div className="image-card" key={i}>
          <img
            src={imageUrl}
            alt={label}
          />
          <p>{label}</p>
        </div>
      );
    });

  return (
    <motion.div className="conventional-abrasives-page"
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



      <h1>Conventional Abrasives</h1>

      {/* ================= Extruded Ceramic Grade (GE) ================= */}
      <section className="text-section enhanced-text">
        <h2>Extruded Ceramic Grade (GE) Grinding Wheels</h2>

        <div className="text-block">
          <p>
            Extruded ceramic grade grinding wheels have excellent sharpness and microstructure,
            which provide aggressive cutting and long-lasting wheel life.
          </p>

          <p>
            It is a composite of highly uniform micron crystals. This microcrystalline structure
            continually exposes new cutting edges due to microfracture during the grinding operation.
          </p>

          <p>
            Extruded grains are a new generation of ceramic abrasives that offer the highest aspect
            ratio compared with any abrasive grain available.
          </p>
        </div>

        <div className="info-card">
          <h3>Benefits of Extruded Ceramic Grade Grinding Wheels:</h3>
          <ul>
            <li>Highly aggressive cutting action during grinding operations</li>
            <li>Ideal for high material removal rate applications</li>
            <li>Ideal for high depth of cut grinding applications</li>
            <li>Removes material faster than conventional aluminium oxide grades</li>
            <li>Less dressing frequency compared to conventional aluminium oxide grades</li>
            <li>Reduced grinding cycle time</li>
            <li>Burn-free workpiece after grinding</li>
          </ul>
        </div>

        <div className="info-card">
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
      </section>

      {/* ================= Ceramic Grade (GQ) ================= */}
      <section className="text-section enhanced-text">
        <h2>Ceramic Grade (GQ) Grinding Wheels</h2>

        <div className="text-block">
          <p>
            Grinding wheels made with a mixture of ceramic abrasive grains, friable aluminium oxide
            grains, and high-performance vitrified bond provide excellent cutting power and require
            very little dressing during grinding operations.
          </p>
        </div>

        <div className="info-card">
          <h3>Features and Benefits:</h3>
          <ul>
            <li>Ideal for cylindrical grinding operations of high hardness materials</li>
            <li>Ideal for surface grinding operations on high hardness workpieces</li>
            <li>Due to good form retention ability, ideal for form grinding applications</li>
            <li>
              Suitable for grinding materials such as D2, tool steel, HSS, hard carbon steel, WPS,
              400 series stainless steel, cast iron, super steel, etc.
            </li>
            <li>
              Reduced grinding cycle time compared with conventional aluminium oxide abrasive
              grinding wheels
            </li>
            <li>Self-sharpening characteristics</li>
            <li>Burn-free workpiece</li>
          </ul>
        </div>
      </section>



      {/* ================= Cylindrical ================= */}
      <section className="text-section enhanced-text">
      <div className="product-section">
        <h2>Cylindrical Grinding Wheels</h2>
        <p className="range-text">
          Manufacturing Range: Max OD up to 660mm and Thickness up to 125mm
        </p>
        <div className="card-grid">
          {renderCards(4, "Cylindrical Grinding Wheel", "cylindrical grinding wheels")}
        </div>
      </div>
      </section>

      {/* ================= Surface ================= */}
      <section className="text-section enhanced-text">
      <div className="product-section">
        <h2>Surface Grinding Wheels</h2>
        <p className="range-text">
          Manufacturing Range: Up to 660mm OD and 125mm thickness
        </p>
        <div className="card-grid">
          {renderCards(2, "Surface Grinding Wheel", "surface grinding wheels")}
        </div>
      </div>
      </section>

      {/* ================= Nut Inserted Double Disc ================= */}
      <section className="text-section enhanced-text">
      <div className="product-section">
        <h2>Nut Inserted Double Disc Grinding Wheels</h2>
        <p className="range-text">
          <strong>Manufacturing Range:</strong> Up to 1000mm OD and 125mm thickness
        </p>
        <p className="remark-text">
          <strong>Remark:</strong> We also develop best suitable grades Nut Inserted
          Double Disc Grinding Wheels for applications other than above, against
          customer application details.
        </p>
        <div className="card-grid">
          {renderCards(
            4,
            "Nut Inserted Double Disc Grinding Wheel",
            "nut inserted double disc"
          )}
        </div>
      </div>
      </section>

      {/* ================= Segment / Cup / Ring ================= */}
      <section className="text-section enhanced-text">
      <div className="product-section">
        <h2>Segment, Straight Cup and Ring Wheels</h2>
        <p className="remark-text">
          <strong>Remark:</strong> We can also develop best suitable grades Segments,
          Straight Cups and Ring Grinding Wheels for applications other than above,
          against customer application details.
        </p>
        <div className="card-grid">
          {renderCards(
            6,
            "Segment / Straight Cup / Ring Wheel",
            "segment straight cup and ring wheel"
          )}
        </div>
      </div>
      </section>

      {/* ================= Internal Grinding ================= */}
      <section className="text-section enhanced-text">
      <div className="product-section">
        <h2>Internal Grinding Wheels</h2>
        <p>
          We have best suitable grades with high performance grains like Pink
          Allu, Mono-crystalline and Ceramic grains with high performance
          bond for internal grinding applications.
        </p>
        <p className="remark-text">
          <strong>Remark:</strong> We also develop best suitable grades internal
          grinding wheels for applications other than above, against customer
          application details.
        </p>
        <div className="card-grid">
          {renderCards(
            4,
            "Internal Grinding Wheel",
            "internal grinding wheels"
          )}
        </div>
      </div>
      </section>
      {/* ================= Gear Grinding ================= */}
      <section className="text-section enhanced-text">
        <div className="product-section">
          <h2>Gear and Gear Cutting Tools Grinding</h2>
          <p>
            We have best suitable specifications with high performance grains like
            Pink Aluminium Oxide, Mono-crystalline and Ceramic grains with high
            performance bond for below applications:
          </p>
          <ol className="detail-list">
            <li>Single rib gear teeth grinding wheels (Q-face wheel)</li>
            <li>Multi rib gear grinding (multi profile gear grinding)</li>
            <li>Straight cup wheels for bevel gear grinding</li>
            <li>Blank grinding wheels for gear honing</li>
            <li>Hob re-sharpening</li>
            <li>Broach grinding</li>
            <li>Tool and cutter grinder</li>
          </ol>
          <div className="card-grid">
            {renderCards(
              5,
              "Gear Grinding Wheel",
              "gear and gear cutting tools grinding"
            )}
          </div>
        </div>
      </section>

      {/* ================= Snagging / Fettling ================= */}
      <section className="text-section enhanced-text">
        <div className="product-section">
          <h2>High Performance Snagging / Fettling Wheels</h2>
          <p className="range-text">
            <strong>Manufacturing Range:</strong> Up to 660mm OD and 125mm thickness
          </p>
          <p>Suitable for the following applications:</p>
          <ol className="detail-list">
            <li>Investment casting grinding</li>
            <li>High-chrome castings grinding</li>
            <li>Sintered casting grinding</li>
            <li>Ni-hard casting grinding</li>
            <li>Manganese steel casting grinding</li>
            <li>SG iron and grey cast iron casting grinding</li>
            <li>CI castings grinding</li>
          </ol>
          <div className="card-grid">
            {renderCards(
              2,
              "Snagging / Fettling Grinding Wheel",
              "high perf snagging fettling wheels"
            )}
          </div>
        </div>
      </section>

      {/* ================= Roll Grinding ================= */}
      <section className="text-section enhanced-text">
        <div className="product-section">
          <h2>Roll Grinding Wheel</h2>
          <ol className="detail-list">
            <li>High stock removal rate</li>
            <li>Free cutting action</li>
            <li>Better productivity</li>
            <li>Better surface finish</li>
            <li>Super balanced wheel</li>
            <li>Burn free component</li>
          </ol>
          <div className="card-grid">
            {renderCards(
              1,
              "Roll Grinding Wheel",
              "roll grinding wheel"
            )}
          </div>
        </div>
      </section>

      {/* ================= Taper Rollers ================= */}
      <section className="text-section enhanced-text">
        <div className="product-section">
          <h2>Taper Rollers End Face Grinding Wheel</h2>
          <ol className="detail-list">
            <li>Good cutting action</li>
            <li>High stock removal rate</li>
            <li>Good finishing on rollers end face</li>
            <li>Good form retention of radius</li>
            <li>No burning marks on rollers</li>
          </ol>
          <div className="card-grid">
            {renderCards(
              1,
              "Taper Rollers End Face Grinding Wheel",
              "taper rollers end face grinding wheel"
            )}
          </div>
        </div>
      </section>

      {/* ================= Rice Whitening ================= */}
      <section className="text-section enhanced-text">
        <div className="product-section">
          <h2>Rice Whitening Rollers</h2>
          <ol className="detail-list">
            <li>Less broken of rice</li>
            <li>Best whitening and shining on rice</li>
            <li>Higher life of rollers</li>
            <li>Close dimensional accuracy in each piece</li>
            <li>Can be supplied with metal flange and hub</li>
          </ol>
          <div className="card-grid">
            {renderCards(
              2,
              "Rice Whitening Roller",
              "rice whitening rollers"
            )}
          </div>
        </div>
      </section>

      {/* ================= Saw Gumming ================= */}
      <section className="text-section enhanced-text">
        <div className="product-section">
          <h2>Saw Gumming C-Face Grinding Wheel</h2>
          <ol className="detail-list">
            <li>Good cutting action</li>
            <li>Good form retention</li>
            <li>Sharp edge generation without burrs</li>
            <li>No burning marks on teeth</li>
            <li>Long life</li>
          </ol>
          <div className="card-grid">
            {renderCards(
              1,
              "Saw Gumming C-Face Grinding Wheel",
              "saw gumming cface grinding wheel"
            )}
          </div>
        </div>
      </section>

      {/* ================= Tool Room ================= */}
      <section className="text-section enhanced-text">
      <div className="product-section">
        <h2>Tool Rooms Grinding Wheels – General Item</h2>
        <p className="remark-text">
          Custom specifications can be developed as per customer requirements.
        </p>
        <div className="card-grid">
          {renderCards(
            8,
            "Tool Room Grinding Wheel",
            "tool rooms grinding wheels general item"
          )}
        </div>
      </div>
      </section>
      <IndustrialFooter/>
    </motion.div>
  );
};

export default ConventionalAbrasives;
