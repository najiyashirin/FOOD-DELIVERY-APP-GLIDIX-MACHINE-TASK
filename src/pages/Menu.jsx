import React from "react";
import foodsData from "../data/foods.json";
import FoodCard from "../components/FoodCard/FoodCard";
import { useCart } from "../context/CartContext";
import "./Menu.css";

const Menu = () => {
  const { addToCart } = useCart();

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <div className="food-list">
        {foodsData.map((food) => (
          <FoodCard key={food.id} food={food} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
