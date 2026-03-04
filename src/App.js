import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Reasons from './components/NewReasons/NewReasons';

import IndustriesWeServe from './components/IndustriesWeServe/IndustriesWeServe';
import ScrollToTop from './ScrollToTop'
import AboutUsPage from './pages/AboutUsPage'
import OurWorkPage from './pages/OurWorkPage'
import ContactUsPage from './pages/ContactUsPage'
import ProcessSteps from './components/ProcessSteps/ProcessSteps';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import LeafSequence from './components/LeafSequence/LeafSequence';
function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <LeafSequence/>
      <IndustriesWeServe/>
      <ProcessSteps/>
      <Reasons/>
      <Footer/>
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

          {/* new top-level pages */}
          <Route path="/about-us" element={<AboutUsPage/>} />
          <Route path="/our-work" element={<OurWorkPage/>} />
          <Route path="/contact-us" element={<ContactUsPage/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
