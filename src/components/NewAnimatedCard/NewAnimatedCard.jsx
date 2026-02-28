import React from "react";
import { Link } from "react-router-dom";
import "./NewAnimatedCard.css";

const NewAnimatedCard = ({ image, label, path }) => {
  const cardContent = (
    <div className="container">
      <div
        className="card_box"
        style={{
          backgroundImage: image ? `url(${image})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          "--label": `'${label}'`,
          cursor: path ? "pointer" : "default",
        }}
      >
        <span></span>
      </div>
    </div>
  );

  // 👉 If no path, render normal card
  if (!path) return cardContent;

  // 👉 If path exists, wrap in Link (gives right-click menu)
  return (
    <Link to={path} className="card-link">
      {cardContent}
    </Link>
  );
};

export default NewAnimatedCard;