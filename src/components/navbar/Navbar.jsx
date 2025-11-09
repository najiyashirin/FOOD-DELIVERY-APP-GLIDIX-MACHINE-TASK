import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav className="navbar">
      <div className="logo">Eato</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/cart">Cart {cart.length > 0 && <span className="cart-count">{cart.length}</span>}</Link>
        </li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
