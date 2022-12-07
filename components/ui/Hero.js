import React from "react";

export default function Hero({ heading, subheading, buyButton, buyUrl }) {
  return (
    <div className="container">
      <div className="hero__content">
        <p className="subheader">{subheading}</p>
        <h1>{heading}</h1>
      </div>
    </div>
  );
}
