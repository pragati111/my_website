import React, { useEffect, useState } from "react";
import NewAnimatedCard from "../NewAnimatedCard/NewAnimatedCard";

const CategorySlide = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // 🔥 Responsive looping rule
  const shouldLoop = isMobile
    ? data.cards.length >= 2
    : data.cards.length >= 6;

  const cardsToRender = shouldLoop
    ? [...data.cards]
    : data.cards;

  return (
    <div className="category-slide">
      <h2>{data.title}</h2>

      <div className="category-layout">
        {/* LEFT – CARD VIEWPORT */}
        <div className="category-cards">
          <div className={`cards-track ${shouldLoop ? "auto-scroll" : ""}`}>
            {cardsToRender.map((item, index) => (
              <NewAnimatedCard key={index} label={item.label} image={item.image} path={item.path} />
            ))}
          </div>
        </div>

        {/* RIGHT – FEATURED */}
        <div className="category-featured">
          <NewAnimatedCard
            image={data.image}
            label="View All"
            path={data.path}
          />
        </div>
      </div>
    </div>
  );
};

export default CategorySlide;
