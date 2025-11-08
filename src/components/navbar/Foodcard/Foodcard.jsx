import React from "react";
import "./FoodCard.css";

const FoodCard = ({ food, addToCart }) => {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} className="food-img" />
      <div className="food-info">
        <h3>{food.name}</h3>
        <p>{food.desc}</p>
        <div className="food-bottom">
          <span className="food-price">₹{food.price}</span>
          <button onClick={() => addToCart(food)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
