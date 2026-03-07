import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Reasons from './components/NewReasons/NewReasons';

import IndustriesWeServe from './components/IndustriesWeServe/IndustriesWeServe';
import ScrollToTop from './ScrollToTop'
import PricingPage from './pages/PricingPage'
import OurWorkPage from './pages/OurWorkPage'
import ContactUsPage from './pages/ContactUsPage'
import ProcessSteps from './components/ProcessSteps/ProcessSteps';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import LeafSequence from './components/LeafSequence/LeafSequence';
import TechSlider from './components/TechSlider/TechSlider';
import FAQ from './components/FAQ/FAQ';
import ScrollReveal from './components/ScrollReveal/ScrollReveal';

function Home() {
  return (
    <>
      <Header/>
      <ScrollReveal>
        <HeroSection/>
      </ScrollReveal>
      <ScrollReveal>
        <LeafSequence/>
      </ScrollReveal>
      <ScrollReveal>
        <IndustriesWeServe/>
      </ScrollReveal>
      <ScrollReveal>
        <TechSlider/>
      </ScrollReveal>
      <ScrollReveal>
        <ProcessSteps/>
      </ScrollReveal>
      <ScrollReveal>
        <Reasons/>
      </ScrollReveal>
      <ScrollReveal>
        <FAQ/>
      </ScrollReveal>
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
          <Route path="/pricing" element={<PricingPage/>} />
          <Route path="/our-work" element={<OurWorkPage/>} />
          <Route path="/contact-us" element={<ContactUsPage/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
