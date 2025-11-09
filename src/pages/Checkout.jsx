import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "COD",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    setFormData({ name: "", address: "", phone: "", payment: "COD" });
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>Full Name</label>
        <input name="name" value={formData.name} onChange={handleChange} required />

        <label>Address</label>
        <textarea name="address" value={formData.address} onChange={handleChange} required />

        <label>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Payment Method</label>
        <select name="payment" value={formData.payment} onChange={handleChange}>
          <option value="COD">Cash on Delivery</option>
          <option value="Online">Online Payment</option>
        </select>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
