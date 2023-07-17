import React from "react";
import "./feature.scss";

function Feature({ logo, title, text }) {
  return (
    <div className="feature-item">
      <img src={logo} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Feature;
