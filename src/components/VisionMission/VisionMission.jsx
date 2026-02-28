import React from "react";
import "./VisionMission.css";
import FeatureCard from "./FeatureCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const features = [
  {
    number: "01",
    title: "Vision",
    icon: "https://img.icons8.com/color/512/eye-checked.png",
    description:
      "To be an organization that lives by strong values and consistently creates excellence in everything it does.",
  },
  {
    number: "02",
    title: "Mission",
    icon: "https://img.icons8.com/color/512/rocket.png", // colorful target
    description:
      "To ethically grow by setting global benchmarks across all performance parameters, with an unwavering focus on 100% quality.",
  },
  {
    number: "03",
    title: "Values",
    icon: "https://img.icons8.com/color/512/charity.png",
    description:
      "Integrity, Passion, Quality, and Responsibility guide everything we do and define our commitment to excellence.",
  },
];


const HowItWorks = () => {
    useEffect(() => {
  AOS.init({ duration: 900, once: true });
}, []);
  return (
    <>
      {/* HEADING */}
      <h2 className="the-heading"> Our <span>Foundation </span></h2>
      {/* HEADER */}
      <header className="header-design">
        <div className="listar-map-button">
          <div className="listar-map-button-text">
            <span className="icon-map2">How it Works?</span>
          </div>
        </div>
        <div className="footer-wave"></div>
      </header>

      {/* FEATURES */}
      <div className="pset">
        <div className="container">
          <div className="row listar-feature-items">
            {features.map((item, index) => (
              <FeatureCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
