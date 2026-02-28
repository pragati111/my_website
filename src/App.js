import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';

// Product pages
import ConventionalAbrasives from './components/ProductPages/ConventionalAbrasives/ConventionalAbrasives';
import DCCuttingWheelsFlapDiscs from './components/ProductPages/DCCuttingWheelsFlapDiscs/DCCuttingWheelsFlapDiscs';
import SuperAbrasives from './components/ProductPages/SuperAbrasives/SuperAbrasives';
import MetalWorkingFluids from './components/ProductPages/MetalWorkingFluids/MetalWorkingFluids';
import Inserts from './components/ProductPages/Inserts/Inserts';
import Dressers from './components/ProductPages/Dressers/Dressers';

import VisionMission from './components/VisionMission/VisionMission';
import ProductsMegaCarousel from './components/ProductsMegaCarousel/ProductsMegaCarousel';

//Seperate pages
import CeramicGrade from './components/SeperatePages/ConventionalAbrasives/CeramicGrade/CeramicGrade'
import ExtrudedCeramicGrade from './components/SeperatePages/ConventionalAbrasives/ExtrudedCeramicGrade/ExtrudedCermaicGrade'
import CylindricalGW from './components/SeperatePages/ConventionalAbrasives/CylindricalGW/CylindricalGW'
import GearGrinding from './components/SeperatePages/ConventionalAbrasives/GearGrinding/GearGrinding'
import InternalGW from './components/SeperatePages/ConventionalAbrasives/InternalGW/InternalGW'
import NutInsertedDoubleDisc from './components/SeperatePages/ConventionalAbrasives/NutInsertedDoubleDisc/NutInsertedDoubleDisc'
import RiceWhiteningRollers from './components/SeperatePages/ConventionalAbrasives/RiceWhiteningRollers/RiceWhiteningRollers'
import RollGW from './components/SeperatePages/ConventionalAbrasives/RollGW/RollGW'
import SawGumming from './components/SeperatePages/ConventionalAbrasives/SawGumming/SawGumming'
import SegmentCupRing from './components/SeperatePages/ConventionalAbrasives/SegmentCupRing/SegmentCupRing'
import SnaggingFettling from './components/SeperatePages/ConventionalAbrasives/SnaggingFettling/SnaggingFettling'
import SurfaceGW from './components/SeperatePages/ConventionalAbrasives/SurfaceGW/SurfaceGW'
import TaperRollers from './components/SeperatePages/ConventionalAbrasives/TaperRollers/TaperRollers'
import ToolRoom from './components/SeperatePages/ConventionalAbrasives/ToolRoom/ToolRoom'

import CutOffWheels from './components/SeperatePages/DCCuttingWheelsFlapDiscs/CutOffWheels/CutOffWheels'
import DepressedCenterWheels from './components/SeperatePages/DCCuttingWheelsFlapDiscs/DepressedCenterWheels/DepressedCenterWheels'
import FlapMopDiscs from './components/SeperatePages/DCCuttingWheelsFlapDiscs/FlapMopDiscs/FlapMopDiscs'

import BladeDiamond from './components/SeperatePages/Dressers/BladeDiamond/BladeDiamond'
import ChiselTypeDiamond from './components/SeperatePages/Dressers/ChiselTypeDiamond/ChiselTypeDiamond'
import DiamondTools from './components/SeperatePages/Dressers/DiamondTools/DiamondTools'
import MCDDressingBlades from './components/SeperatePages/Dressers/MCDDressingBlades/MCDDressingBlades'
import MultipointDiamond from './components/SeperatePages/Dressers/MultipointDiamond/MultipointDiamond'
import MultiSetDiamond from './components/SeperatePages/Dressers/MultiSetDiamond/MultiSetDiamond'
import SinglePointDiamond from './components/SeperatePages/Dressers/SinglePointDiamond/SinglePointDiamond'

import PCBNCompositeToolMaterials from './components/SeperatePages/Inserts/PCBNCompositeToolMaterials/PCBNCompositeToolMaterials'
import PCBNGroovingInserts from './components/SeperatePages/Inserts/PCBNGroovingInserts/PCBNGroovingInserts'
import PCBNInsertsSpecifications from './components/SeperatePages/Inserts/PCBNInsertsSpecifications/PCBNInsertsSpecifications'

import CBNDia from './components/SeperatePages/SuperAbrasives/CBNDia/CBNDia'
import ResinoidCBNDia from './components/SeperatePages/SuperAbrasives/ResinoidCBNDia/ResinoidCBNDia'
import VitrifiedCBNDia from './components/SeperatePages/SuperAbrasives/VitrifiedCBNDia/VitrifiedCBNDia'
import VitrifiedDoubleDisc from './components/SeperatePages/SuperAbrasives/VitrifiedDoubleDisc/VitrifiedDoubleDisc'
import ElectroplatedDiaCBN from './components/SeperatePages/SuperAbrasives/ElectroplatedDiaCBN/ElectroplatedDiaCBN'

import FalconEco from './components/SeperatePages/MetalWorkingFluids/FalconEco/FalconEco'
import FalconTrot from './components/SeperatePages/MetalWorkingFluids/FalconTrot/FalconTrot'

import IndustrialFooter from './components/IndustrialFooter/IndustrialFooter';
import Reasons from './components/Reasons/Reasons';
import ScrollToTop from './ScrollToTop'
import ProductRangePage from './pages/ProductRangePage'
import WhyUsPage from './pages/WhyUsPage'
import ContactUsPage from './pages/ContactUsPage'
function Home() {
  return (
    <>
      <Header/>
      <Hero />
      <VisionMission/>
      <ProductsMegaCarousel/>
      <Reasons />     
      <IndustrialFooter/> 
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Product detail pages */}
          <Route path="/products/conventional-abrasives" element={<ConventionalAbrasives />} />
          <Route path="/products/super-abrasives" element={<SuperAbrasives />} />
          <Route path="/products/dc-cuttingwheels-flapdiscs" element={<DCCuttingWheelsFlapDiscs />} />
          <Route path="/products/metal-working-fluids" element={<MetalWorkingFluids />} />
          <Route path="/products/inserts" element={<Inserts />} />
          <Route path="/products/dressers" element={<Dressers />} />

          {/* new top-level pages */}
          <Route path="/products-range" element={<ProductRangePage/>} />
          <Route path="/why-us" element={<WhyUsPage/>} />
          <Route path="/contact-us" element={<ContactUsPage/>} />

          {/*Adding Seperate Pages */}
          <Route path="/seperate/ceramic-grade" element={<CeramicGrade/>}/>
          <Route path="/seperate/extruded-ceramic-grade" element={<ExtrudedCeramicGrade/>}/>
          <Route path="/seperate/cylindrical-gw" element={<CylindricalGW/>}/> 
          <Route path="/seperate/gear-grinding" element={<GearGrinding/>}/> 
          <Route path="/seperate/internal-gw" element={<InternalGW/>}/>
          <Route path="/seperate/nut-inserted-double-disc" element={<NutInsertedDoubleDisc/>}/>
          <Route path="/seperate/rice-whitening-rollers" element={<RiceWhiteningRollers/>}/>
          <Route path="/seperate/roll-gw" element={<RollGW/>}/>
          <Route path="/seperate/saw-gumming" element={<SawGumming/>}/>
          <Route path="/seperate/segment-cup-ring" element={<SegmentCupRing/>}/>
          <Route path="/seperate/snagging-fettling" element={<SnaggingFettling/>}/>
          <Route path="/seperate/surface-gw" element={<SurfaceGW/>}/>
          <Route path="/seperate/taper-rollers" element={<TaperRollers/>}/>
          <Route path="/seperate/tool-room" element={<ToolRoom/>}/>
          <Route path="/seperate/cut-off-wheels" element={<CutOffWheels/>}/>
          <Route path="/seperate/depressed-center-wheels" element={<DepressedCenterWheels/>}/>
          <Route path="/seperate/flap-mop-discs" element={<FlapMopDiscs/>}/>
          <Route path="/seperate/blade-diamond" element={<BladeDiamond/>}/>
          <Route path="/seperate/chisel-type-diamond" element={<ChiselTypeDiamond/>}/>
          <Route path="/seperate/diamond-tools" element={<DiamondTools/>}/>
          <Route path="/seperate/mcd-dressing-blades" element={<MCDDressingBlades/>}/>
          <Route path="/seperate/multi-point-diamond" element={<MultipointDiamond/>}/>
          <Route path="/seperate/multi-set-diamond" element={<MultiSetDiamond/>}/>
          <Route path="/seperate/single-point-diamond" element={<SinglePointDiamond/>}/>
          <Route path="/seperate/pcbn-composite-tool-materials" element={<PCBNCompositeToolMaterials/>}/>
          <Route path="/seperate/pcbn-grooving-inserts" element={<PCBNGroovingInserts/>}/>
          <Route path="/seperate/pcbn-inserts-specifications" element={<PCBNInsertsSpecifications/>}/>
          <Route path="/seperate/cbn-dia" element={<CBNDia/>}/>
          <Route path="/seperate/resinoid-cbn-dia" element={<ResinoidCBNDia/>}/>
          <Route path="/seperate/vitrified-cbn-dia" element={<VitrifiedCBNDia/>}/>
          <Route path="/seperate/vitrified-double-disc" element={<VitrifiedDoubleDisc/>}/>
          <Route path="/seperate/electroplated-dia-cbn" element={<ElectroplatedDiaCBN/>}/>
          <Route path="/seperate/falcon-eco" element={<FalconEco/>}/>
          <Route path="/seperate/falcon-trot" element={<FalconTrot/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
