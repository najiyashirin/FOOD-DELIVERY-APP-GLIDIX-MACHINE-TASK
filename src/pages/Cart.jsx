import React from "react";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import pizzaImg from "../assets/pizza.jpg";
import burgerImg from "../assets/burger.jpg";
import pastaImg from "../assets/pasta.jpg";
import shawarmaImg from "../assets/shawarma.jpg";

const images = {
  "pizza.jpg": pizzaImg,
  "burger.jpg": burgerImg,
  "pasta.jpg": pastaImg,
  "shawarma.jpg": shawarmaImg,
};

const Cart = () => {
  const { cart, totalAmount, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  // fallback for legacy items that might not have `quantity`
  const displayQuantity = (item) => item.quantity || 1;

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Cart</h1>
        <p>
          Your cart is empty <Link to="/menu">Go back to menu</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-container">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={images[item.image.split("/").pop()]}
              alt={item.name}
              className="cart-item-img"
            />
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>₹{item.price * displayQuantity(item)}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{displayQuantity(item)}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}

        <div className="cart-summary">
          <h2>Total: ₹{totalAmount}</h2>
          <button className="checkout-btn" onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
