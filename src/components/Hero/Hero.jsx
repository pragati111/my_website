import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../../assets/images/collages/bg1.png";
import bg2 from "../../assets/images/collages/bg2.png";
import bg3 from "../../assets/images/collages/bg3.png";
import bg4 from "../../assets/images/collages/bg4.png";
import "./Hero.css";

const slides = [
  {
    image: bg1,
    title: "One Stop Solution to your industrial supplies!",
    description:
      "Complete industrial supply solutions for grinding, cutting, and machining operations.",
  },
  {
    image: bg2,
    title: "Experts in Grinding & Machining Solutions!",
    description:
      "We are stockiest and technical service providers for grinding and machining operations.",
  },
  {
    image: bg3,
    title: "High-Performance Abrasives! Precision Delivered!",
    description:
      "As your trusted partner in high performance abrasives, we offer precision, innovation, and unparalleled grinding solutions. ",
  },
  {
    image: bg4,
    title: "Curated product solutions for automotive, aerospace, cutlery, and medical technology industries!",
    description:
      "Our curated range of products tailored for industries like automotive, aerospace, cutlery and medical technology. Let’s revolutionize your grinding operations together! ",
  }
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="hero-slide"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          style={{ backgroundImage: `url(${slides[index].image})` }}
        >
          {/* OVERLAY */}
          <div className="hero-overlay" />

          {/* TEXT CONTENT */}
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {slides[index].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              {slides[index].description}
            </motion.p>
          </div>

          {/* CONTROLS */}
          <button
            className="arrow left"
            onClick={() =>
              setIndex((index - 1 + slides.length) % slides.length)
            }
          >
            ‹
          </button>
          <button
            className="arrow right"
            onClick={() => setIndex((index + 1) % slides.length)}
          >
            ›
          </button>

          {/* DOTS */}
          <div className="dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={i === index ? "dot active" : "dot"}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
