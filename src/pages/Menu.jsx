import React from "react";
import foods from "../data/foods.json";

const Menu = () => {
  return (
    <div className="page">
      <h1>Our Menu</h1>
      <div className="menu-grid">
        {foods.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
