import React from "react";
import "./Cancel.css";

const Cancel = () => {
  return (
    <div className="cancel-container">
      <div className="cancel-content">
        <h1 className="cancel-title">Payment Canceled</h1>
        <p className="cancel-message">
          Your payment has been canceled. If this was a mistake, you can try again.
        </p>
        <button className="retry-button">Retry Payment</button>
      </div>
      {/* Animations */}
      <div className="cancel-animation">
        <div className="cancel-circle"></div>
      </div>
    </div>
  );
};

export default Cancel;
