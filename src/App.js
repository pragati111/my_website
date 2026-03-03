import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Reasons from './components/NewReasons/NewReasons';

import IndustriesWeServe from './components/IndustriesWeServe/IndustriesWeServe';
import ScrollToTop from './ScrollToTop'
import ProductRangePage from './pages/ProductRangePage'
import WhyUsPage from './pages/WhyUsPage'
import ContactUsPage from './pages/ContactUsPage'
import NewHero from './components/NewHero/NewHero';
import ProcessSteps from './components/ProcessSteps/ProcessSteps';
import Footer from './components/Footer/Footer';
function Home() {
  return (
    <>
      <Header/>
      <NewHero/>
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
          <Route path="/products-range" element={<ProductRangePage/>} />
          <Route path="/why-us" element={<WhyUsPage/>} />
          <Route path="/contact-us" element={<ContactUsPage/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
