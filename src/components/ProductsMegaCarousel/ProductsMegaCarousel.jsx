import React, { useState , useEffect } from "react";
import CategorySlide from "./CategorySlide";
import "./ProductsMegaCarousel.css";

// collage images
import collageDc from "../../assets/images/collages/dc-cuttingwheels-flapdiscs.png";
import collageConventional from "../../assets/images/collages/conventional-abrasives.png";
import collageSuper from "../../assets/images/collages/super-abrasives.png";
import collageDressers from "../../assets/images/collages/dressers.png";
import collageInserts from "../../assets/images/collages/inserts.png";
import collageMetalWorkingFluids from "../../assets/images/collages/metal-working-fluids.png";

// main images
import mainDepressed from "../../assets/images/main-images/main-depressed.PNG";
import mainCutoff from "../../assets/images/main-images/main-cutoff-wheels.png";
import mainFlapMop from "../../assets/images/main-images/main-flap-mop.png";
import mainCylindrical from "../../assets/images/main-images/main-cylindrical-gw.png";
import mainSurface from "../../assets/images/main-images/main-surface-grinding.png";
import mainNutInserted from "../../assets/images/main-images/main-nut-inserted-double-disc.PNG";
import mainSegmentCup from "../../assets/images/main-images/main-segment-straight-cup-ring-wheel.PNG";
import mainInternal from "../../assets/images/main-images/main-internal-grinding.PNG";
import mainGear from "../../assets/images/main-images/main-gear-grinding.PNG";
import mainSnagging from "../../assets/images/main-images/main-snagging-fettling.png";
import mainRoll from "../../assets/images/main-images/main-roll-grinding.png";
import mainTaper from "../../assets/images/main-images/main-taper-rollers.png";
import mainRice from "../../assets/images/main-images/main-rice-whitening.png";
import mainSaw from "../../assets/images/main-images/main-saw-gumming.png";
import mainToolRoom from "../../assets/images/main-images/main-tool-room.png";
import mainMultiset from "../../assets/images/main-images/main-multiset.PNG";
import mainExtrudedCeramic from "../../assets/images/main-images/main-extruded-ceramic-grade.PNG";
import mainCeramicGrade from "../../assets/images/main-images/main-ceramic-grade.PNG";

import mainCbnDiamond from "../../assets/images/main-images/main-cbn-diamond-gw.PNG";
import mainVcn from "../../assets/images/main-images/main-vcn.PNG";
import mainVdd from "../../assets/images/main-images/main-vdd.png";
import mainResinoid from "../../assets/images/main-images/main-resinoid.png";
import mainElectroplated from "../../assets/images/main-images/main-electroplated.PNG";

import mainDiamondTools from "../../assets/images/main-images/main-diamond-tools.PNG";
import mainSinglePoint from "../../assets/images/main-images/main-single-point-diamond.PNG";
import mainChiselType from "../../assets/images/main-images/main-chisel-type-diamond.PNG";
import mainMultipoint from "../../assets/images/main-images/main-multipoint.png";
import mainBladeDiamond from "../../assets/images/main-images/main-blade-diamond.PNG";
import mainMcd from "../../assets/images/main-images/main-mcd.PNG";

import mainPcbnSpecs from "../../assets/images/main-images/main-table-pcbn.PNG";
import mainPcbnComposite from "../../assets/images/main-images/main-pcbn-composite-tool-materials.PNG";
import mainPcbnGrooving from "../../assets/images/main-images/main-pcbn-grooving-inserts.PNG";

import mainFalconEco from "../../assets/images/main-images/main-falcon-eco.PNG";
import mainFalconTrot from "../../assets/images/main-images/main-falcon-trot.PNG";


const categories = [
  {
    title: "DC, Cutting Wheels & Flap Discs",
    path:"/products/dc-cuttingwheels-flapdiscs",
    image: collageDc,
    cards: [
      { label: "DEPRESSED CENTER WHEELS", image: mainDepressed , path:"/seperate/depressed-center-wheels" },
      { label: "CUT-OFF WHEELS", image: mainCutoff , path:"/seperate/cut-off-wheels" },
      { label: "FLAP / MOP DISCS", image: mainFlapMop , path:"/seperate/flap-mop-discs" },
    ],
  },

  {
    title: "Conventional Abrasives",
    path:"/products/conventional-abrasives",
    image: collageConventional,
    cards: [
      { label: "Extruded Ceramic Grade (GE)", image: mainExtrudedCeramic , path:"/seperate/extruded-ceramic-grade" },
      { label: "Ceramic Grade (GQ)", image:mainCeramicGrade,path:"/seperate/ceramic-grade"},
      { label: "Cylindrical GW", image: mainCylindrical , path:"/seperate/cylindrical-gw" },
      { label: "Surface GW", image: mainSurface , path:"/seperate/surface-gw" },
      { label: "Nut Inserted Double Disc", image: mainNutInserted , path:"/seperate/nut-inserted-double-disc" },
      { label: "Segment / Cup / Ring", image: mainSegmentCup , path:"/seperate/segment-cup-ring" },
      { label: "Internal GW", image: mainInternal , path:"/seperate/internal-gw" },
      { label: "Gear Grinding", image: mainGear , path:"/seperate/gear-grinding" },
      { label: "Snagging / Fettling", image: mainSnagging , path:"/seperate/snagging-fettling" },
      { label: "Roll GW", image: mainRoll , path:"/seperate/roll-gw" },
      { label: "Taper Rollers End Face GW", image: mainTaper , path:"/seperate/taper-rollers" },
      { label: "Rice Whitening Rollers", image: mainRice , path:"/seperate/rice-whitening-rollers" },
      { label: "Saw Gumming C-Face GW", image: mainSaw , path:"/seperate/saw-gumming" },
      { label: "Tool Room", image: mainToolRoom , path:"/seperate/tool-room" },
    ],
  },

  {
    title: "Super Abrasives",
    path:"/products/super-abrasives",
    image: collageSuper,
    cards: [
      { label: "CBN/Diamond Grinding Wheels", image: mainCbnDiamond , path:"/seperate/cbn-dia" },
      { label: "Vitrified CBN/DIA Wheels", image: mainVcn , path:"/seperate/vitrified-cbn-dia" },
      { label: "Vitrified Double Disc Wheels", image: mainVdd , path:"/seperate/vitrified-double-disc" },
      { label: "Resinoid CBN/DIA Wheels", image: mainResinoid , path:"/seperate/resinoid-cbn-dia" },
      { label: "Electroplated DIA/CBN Wheels", image: mainElectroplated , path:"/seperate/electroplated-dia-cbn" },
    ],
  },
  {
    title: "Metal Working Fluids",
    path:"/products/metal-working-fluids",
    image: collageMetalWorkingFluids,
    cards: [
        { label: "FALCON ECO", image: mainFalconEco , path:"/seperate/falcon-eco" },
      { label: "FALCON TROT", image: mainFalconTrot , path:"/seperate/falcon-trot" },
    ],
  },
  {
    title: "Dressers",
    path:"/products/dressers",
    image: collageDressers,
    cards: [
      { label: "DIAMOND TOOLS", image: mainDiamondTools , path:"/seperate/diamond-tools" },
      { label: "Single-Point Diamond Dressers", image: mainSinglePoint , path:"/seperate/single-point-diamond" },
      { label: "Chisel-Type Diamond Dressers", image: mainChiselType , path:"/seperate/chisel-type-diamond" },
      { label: "Multi-Set Diamond Dressers", image: mainMultiset , path:"/seperate/multi-set-diamond" },
      { label: "Multipoint Diamond Dresser", image: mainMultipoint , path:"/seperate/multi-point-diamond" },
      { label: "Blade Diamond Dresser", image: mainBladeDiamond , path:"/seperate/blade-diamond" },
      { label: "MCD Dressing Blades", image: mainMcd , path:"/seperate/mcd-dressing-blades" },
    ],
  },

  {
    title: "Inserts",
    path:"/products/inserts",
    image: collageInserts,
    cards: [
      { label: "PCBN Inserts Specifications", image: mainPcbnSpecs , path:"/seperate/pcbn-inserts-specifications" },
      { label: "PCBN Composite Tool Materials", image: mainPcbnComposite , path:"/seperate/pcbn-composite-tool-materials" },
      { label: "PCBN Grooving Inserts", image: mainPcbnGrooving , path:"/seperate/pcbn-grooving-inserts" },
    ],
  },
];


const ProductsMegaCarousel = () => {

  const [index, setIndex] = useState(() => {
    const savedIndex = localStorage.getItem("productCategoryIndex");
    return savedIndex ? parseInt(savedIndex) : 0;
  });

  useEffect(() => {
    localStorage.setItem("productCategoryIndex", index);
  }, [index]);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));

  return (
    <div className="carousel-wrapper">
      <h2 className="reasons-title">Complete <span> Product Range</span></h2>
      <button className="arrow left" onClick={prev}>‹</button>

      <div className="carousel-track">
        <CategorySlide data={categories[index]} />
      </div>

      <button className="arrow right" onClick={next}>›</button>
    </div>
  );
};


export default ProductsMegaCarousel;
