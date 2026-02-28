import React, { useEffect, useRef } from "react";
import NewAnimatedCard from "../NewAnimatedCard/NewAnimatedCard";
import "./ProductCategoryCarousel.css";

const ProductCategoryCarousel = ({ title, cards, featured }) => {
  const scrollRef = useRef(null);

  // duplicate cards for infinite scroll
  const infiniteCards = [...cards, ...cards];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 0.6;

    const interval = setInterval(() => {
      container.scrollLeft += speed;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="category-section">
      <h2 className="category-heading">{title}</h2>

      <div className="category-layout">
        {/* BELOW HEADING – INFINITE SCROLL */}
        <div className="category-carousel" ref={scrollRef}>
          {infiniteCards.map((card, index) => (
            <NewAnimatedCard
              key={index}
              image={card.image}
              label={card.label}
              path={card.path}
            />
          ))}
        </div>

        {/* RIGHT – FEATURED CARD */}
        <div className="category-featured">
          <NewAnimatedCard
            image={featured.image}
            label={featured.label}
            path={featured.path}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCategoryCarousel;
