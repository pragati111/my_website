import React from "react";
import NewAnimatedCard from "../NewAnimatedCard/NewAnimatedCard";
import "./CardsGrid.css";

const CardsGrid = () => {
  const cardsData = [
  {
    image: "/images/collages/dc-cuttingwheels-flapdiscs.png",
    label: "DC, Cutting Wheels & Flap Discs",
    path: "/products/dc-cuttingwheels-flapdiscs",
  },
  {
    image: "/images/collages/conventional-abrasives.png",
    label: "Conventional Abrasives",
    path: "/products/conventional-abrasives",
  },
  {
    image: "/images/collages/super-abrasives.png",
    label: "Super Abrasives",
    path: "/products/super-abrasives",
  },
  {
    image: "/images/collages/dressers.png",
    label: "Dressers",
    path: "/products/dressers",
  },
  {
    image: "/images/collages/inserts.png",
    label: "Inserts",
    path: "/products/inserts",
  },
  {
    image: "/images/collages/metal-working-fluids.png",
    label: "Metal Working Fluids",
    path: "/products/metal-working-fluids",
  },
];



  return (
    <div className="cards-section">
      <h2 className="cards-heading">Product Lines</h2>
      <div className="cards-grid">
        {cardsData.map((card, index) => (
          <NewAnimatedCard key={index} image={card.image} label={card.label} path={card.path}/>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
