import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Laptop",
      quantity: 1,
      price: 999.99,
    },
    {
      id: 2,
      name: "Wireless Mouse",
      quantity: 2,
      price: 25.5,
    },
    {
      id: 3,
      name: "Keyboard",
      quantity: 1,
      price: 49.99,
    },
    {
      id: 4,
      name: "USB-C Cable",
      quantity: 3,
      price: 15.0,
    },
    {
      id: 5,
      name: "Headphones",
      quantity: 1,
      price: 199.99,
    },
  ];

  const [item, setItem] = useState([...cartItems]);

  const payNow = async () => {
    const stripe = await loadStripe(
      "pk_test_51QbPEpDAfCJQrCZZYufYkFMBOjCneUEWDxoKWNkvnNlIsqqAO9tpKBVwTJzGD6N8u12TZqbuhAAPidlnNFzM6LFF00pzQA3kie"
    );

    const response = await axios.post("http://localhost:3000/api/v1/checkout", {
      products: item,
    });

    console.log(response.data.id);

    stripe.redirectToCheckout({
      sessionId: response.data.id,
    });
  };

  const increaseQuantity = (index) => {
    item[index].quantity += 1;
    setItem([...item]);
  };
  const decreaseQuantity = (index) => {
    if (item[index].quantity > 1) {
      item[index].quantity -= 1;
      setItem([...item]);
    }
  };
  const deleteItem = (index) => {
    item.splice(index, 1);
    setItem([...item]);
  };

  const calculateTotal = () => {
    return item.reduce((total, current) => total + current.price * current.quantity, 0).toFixed(2);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Checkout</h1>
        <p className="home-subtitle">Review your cart and complete your purchase</p>
      </header>

      <main className="home-content">
        {item.length > 0 ? (
          <div className="cart-container">
            {item.map((item, index) => (
              <div className="cart-item" key={item.id}>
                <p className="cart-item-name">{item.name}</p>
                <div className="cart-item-controls">
                  <button className="cart-button" onClick={() => decreaseQuantity(index)}>-</button>
                  <p className="cart-item-quantity">{item.quantity}</p>
                  <button className="cart-button" onClick={() => increaseQuantity(index)}>+</button>
                </div>
                <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                <button className="cart-delete-button" onClick={() => deleteItem(index)}>Delete</button>
              </div>
            ))}
            <div className="cart-total">
              <h2>Total: ${calculateTotal()}</h2>
            </div>
            <button className="pay-now-button" onClick={payNow}>Pay Now</button>
          </div>
        ) : (
          <p className="empty-cart-message">Your cart is empty.</p>
        )}
      </main>

      <footer className="home-footer">
        <p className="footer-text">&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
