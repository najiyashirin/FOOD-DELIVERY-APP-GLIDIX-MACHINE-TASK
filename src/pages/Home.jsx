import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home">
    <div className="hero">
      <h1>Welcome to Eato</h1>
      <p>The Best Delicious meals in Kochi delivered to your doorstep.</p>
      <Link to="/menu" className="order-btn">Order Now</Link>
    </div>
  </div>
);

export default Home;
