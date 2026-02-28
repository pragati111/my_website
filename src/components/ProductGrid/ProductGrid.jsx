import { useNavigate } from "react-router-dom";
import "./ProductGrid.css";
import { div } from "framer-motion/client";

const products = [
  { title: "Conventional Abrasives", path: "/products/conventional-abrasives" },
  { title: "Super Abrasives", path: "/products/super-abrasives" },
  { title: "DC, Cutting Wheels & Flap Discs", path: "/products/dc-cuttingwheels-flapdiscs" },
  { title: "Metal Working Fluids", path: "/products/metal-working-fluids" },
  { title: "Inserts", path: "/products/inserts" },
  { title: "Dressers", path: "/products/dressers" },
];

export default function ProductGrid() {
  const navigate = useNavigate();

  return (
    <div>
    <div className="product-grid-headline">EXPLORE OUR PRODUCTS</div>
    <div className="product-grid">
      {products.map((p) => (
        <div
          key={p.path}
          className="product-card"
          onClick={() => navigate(p.path)}
        >
          <h3>{p.title}</h3>
        </div>
      ))}
    </div>
    </div>
  );
}
