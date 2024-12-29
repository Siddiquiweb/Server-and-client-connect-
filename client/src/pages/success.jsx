import React from "react";
import "./Success.css";

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-animation">
        <div className="checkmark-circle">
          <div className="checkmark stem"></div>
          <div className="checkmark kick"></div>
        </div>
      </div>
      <h1 className="success-message">Payment Successful!</h1>
      <p className="success-description">
        Your transaction has been completed successfully. Thank you for your trust and support!
      </p>
      <div className="celebration-animation">
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
      </div>
    </div>
  );
};

export default Success;
