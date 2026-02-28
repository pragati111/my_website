import React from "react";
import "./SuperAbrasives.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import IndustrialFooter from "../../IndustrialFooter/IndustrialFooter";

const imageMap = {
  "cbn diamond grinding wheels": {
    1: require("../../../assets/images/cbn/1.PNG"),
    2: require("../../../assets/images/cbn/2.PNG"),
    3: require("../../../assets/images/cbn/3.PNG"),
    4: require("../../../assets/images/cbn/4.PNG"),
    5: require("../../../assets/images/cbn/5.PNG"),
  },
  "vitrified cbn dia wheels": {
    1: require("../../../assets/images/vitrified cbn dia wheels/1.PNG"),
    2: require("../../../assets/images/vitrified cbn dia wheels/2.PNG"),
  },
  "vitrified double disc wheels": {
    1: require("../../../assets/images/vitrified double disc wheels/1.png"),
    2: require("../../../assets/images/vitrified double disc wheels/2.png"),
  },
  "resinoid cbn dia wheels": {
    1: require("../../../assets/images/resinoid cbn dia wheels/1.png"),
    2: require("../../../assets/images/resinoid cbn dia wheels/2.PNG"),
  },
  "electroplated dia cbn wheels": {
    1: require("../../../assets/images/electroplated dia cbn wheels/1.PNG"),
    2: require("../../../assets/images/electroplated dia cbn wheels/2.png"),
    3: require("../../../assets/images/electroplated dia cbn wheels/3.PNG"),
    4: require("../../../assets/images/electroplated dia cbn wheels/4.PNG"),
  },
};

const SuperAbrasives = () => {
  const navigate = useNavigate();

  const renderCards = (count, label, folder) =>
    [...Array(count)].map((_, i) => (
      <div className="super-image-card" key={i}>
        <img
          src={imageMap[folder]?.[i + 1]}
          alt={label}
        />
        <p>{label}</p>
      </div>
    ));

  return (
    <motion.div
      className="super-abrasives-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Back Button */}
      <div className="super-back-btn-wrapper" onClick={() => navigate(-1)}>
        <svg
          className="super-back-icon"
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

      <h1>Super Abrasives</h1>

      {/* ================= CBN/Diamond Grinding Wheels ================= */}
      <section className="super-text-section super-enhanced-text">
        <h2>CBN/Diamond Grinding Wheels:</h2>

        <div className="super-text-block">
          <p>
            CBN & DIA Diamond and cubic boron nitride(CBN) are the hardest abrasive
            materials in existence, and are known as the best abrasive. Although a
            diamond and CBN have the same crystal structure, a diamond is made of
            pure carbon while CBN is made of cubic boron and nitride. CBN/DIA
            wheel, is introduced along with the crystallization of abrasive
            technology optimized for high-hardness workpieces.
          </p>
        </div>

        <div className="super-card-grid">
          {renderCards(
            5,
            "CBN/Diamond Grinding Wheel",
            "cbn diamond grinding wheels"
          )}
        </div>
      </section>

      {/* ================= Vitrified CBN/DIA Wheels ================= */}
      <section className="super-text-section super-enhanced-text">
        <h2>Vitrified CBN/DIA Wheels:</h2>

        <div className="super-text-block">
          <p>
            Vitrified bonds are made of inorganic materials as binders, and since
            they can make products with a high porosity, there is little clogging
            and heat generation during grinding, and it is relatively easy to run
            through and dressing. It is mainly used as a bond. In the case of
            ceramic and PCD grinding, it has high grinding efficiency when a
            vitrified diamond wheel is applied.
          </p>

          <p>
            ▶ Automatic dressing using various dryers such as the rotary dresser
            or single-point dresser is easy to operate, so it is mainly used in
            the work of the CNC automation process, and in machining workpieces
            for the production of large-scale quantities of small types such as
            bearings and automobile parts. In addition, since it contains a large
            number of pores versus general resin or metal wheels, it is feasible
            to easily process difficult-to-cut materials with severe clogging
            during processing such as ceramic, PCD, and PCBN.
          </p>
        </div>

        <div className="super-card-grid">
          {renderCards(
            2,
            "Vitrified CBN/DIA Wheel",
            "vitrified cbn dia wheels"
          )}
        </div>
      </section>

      {/* ================= Vitrified Double Disc Wheels ================= */}
      <section className="super-text-section super-enhanced-text">
        <h2>Vitrified Double Disc Wheels:</h2>

        <div className="super-text-block">
          <p>
            Vitrified Diamond, CBN are used depending on the type of workpiece, and
            is a product used for processing a wide range of workpiece materials
            such as automobile, ceramic, hydraulic, air conditioner parts, and
            seals. It is widely used for processing all materials such as ferrous
            and nonferrous metals.
          </p>

          <p>▶ Vitrified table provides many opportunities for users due to its high grinding efficiency and long service life.</p>
          <p>▶ Compared to general grinding, a large number of workpieces are processed in tandem, so the actual individual work time is short.</p>
          <p>▶ Due to the characteristics of double-sided polishing, the product quality and precision are exceptional.</p>
          <p>▶ Despite the higher initial investment cost, the actual individual tool cost is low due to the short working hours and high productivity.</p>
          <p>▶ Compared to general grinding, scattering dust is extremely minimal, so the work environment is kept clean and waste disposal costs are greatly reduced.</p>
          <p>▶ Since the work environment is kept clean, no additional investment in environmental management facilities is warranted.</p>
        </div>

        <div className="super-card-grid">
          {renderCards(
            2,
            "Vitrified Double Disc Wheel",
            "vitrified double disc wheels"
          )}
        </div>
      </section>

      {/* ================= Resinoid CBN/DIA Wheels ================= */}
      <section className="super-text-section super-enhanced-text">
        <h2>Resinoid CBN/ DIA Wheels:</h2>

        <div className="super-text-block">
          <p>
            “Resin” refers to resin and synthetic resin, and the resin bond wheel
            is a resin that combines various fillers (i.e. metal components,
            ceramic components, etc.) with resin as the main component. Resins
            comprise mainly phenolic resins and polyimide resins. Due to the
            bonding properties of abrasive grains, the Resin Bond Wheel has
            well-performing elasticity, soft contact point with the workpiece,
            and good cutting and finishing surfaces, but it has less wear and heat
            resistance.
          </p>

          <p>
            ▶ Among diamond and CBN grinding wheels (i.e. resin, metal, vitrified,
            electrodeposition), it is the most common and easy to apply to all
            grinding operations (i.e. planar, cylindrical, groove, centerless,
            double head, inner grinding, etc.) It is most widely used when grinding
            many types of workpieces such as glass, cermet, ceramic, tool steel
            etc. In particular, the resin hybrid wheel has an excellent effect on
            flute grinding for tools.
          </p>

          <p>
            ▶ If the hardness of the workpiece is HRC 50 or higher, grinding with
            a CBN wheel is economical.
          </p>
        </div>

        <div className="super-card-grid">
          {renderCards(
            2,
            "Resinoid CBN/DIA Wheel",
            "resinoid cbn dia wheels"
          )}
        </div>
      </section>

      {/* ================= Electroplated DIA/CBN Wheels ================= */}
      <section className="super-text-section super-enhanced-text">
        <h2>Electroplated DIA/ CBN Wheels:</h2>

        <div className="super-text-block">
          <p>
            The Electrodeposition Wheel features only one layer of DIA or CBN
            abrasive that is fixed to the surface of the wheel body by
            electroplating. It is possible to freely implement the size and shape
            of the wheel, so it enables a specific shape and even soft materials
            to be easy processed.
          </p>

          <p>
            ▶ In the case of gun-shape grinding, a shot-shape wheel is obtained
            simply by forming a predetermined gun shape on the wheel shank and
            plating DIA or CBN abrasive grain on the surface to be fixed to. Since
            only one layer of DIA or CBN abrasive is plated, the initial cost of
            the wheel is lower. When this single layer of abrasive grain is gone,
            this wheel will reach its expiry of use. By reusing the shank of this
            wheel, the wheel cost (unit cost) can be reduced. The electrodeposition
            wheel outperforms versus other bonds since one-third to onehalf of the
            grain size protrudes from electrodeposition.
          </p>

          <p>▶ The fields where electrodeposition wheels are mainly used are as follows:</p>
          <p>• Form grinding</p>
          <p>• Jig grinding</p>
          <p>• Small quantity production of various kinds</p>
          <p>• Inner grinding of small diameter</p>
        </div>

        <div className="super-card-grid">
          {renderCards(
            4,
            "Electroplated DIA/CBN Wheel",
            "electroplated dia cbn wheels"
          )}
        </div>
      </section>
      <IndustrialFooter/>
    </motion.div>
  );
};

export default SuperAbrasives;
