import React from "react";
import "./FoodCard.css";
import pizzaImg from "../../assets/pizza.jpg";
import burgerImg from "../../assets/burger.jpg";
import pastaImg from "../../assets/pasta.jpg";
import shawarmaImg from "../../assets/shawarma.jpg";

const images = {
  "pizza.jpg": pizzaImg,
  "burger.jpg": burgerImg,
  "pasta.jpg": pastaImg,
  "shawarma.jpg": shawarmaImg,
};

const FoodCard = ({ food, addToCart }) => {
  return (
    <div className="food-card">
      <img src={images[food.image.split('/').pop()]} alt={food.name} className="food-img" />
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
