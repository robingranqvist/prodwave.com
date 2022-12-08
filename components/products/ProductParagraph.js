import React from "react";

export default function ProductParagraph({ description }) {
  return (
    <div className="container">
      <div className="content__center">
        <div className="content__center--inner">
          <p className="subheader">The presets</p>
          <p className="product__paragraph">{description}</p>
        </div>
      </div>
    </div>
  );
}
