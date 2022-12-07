import React from "react";

export default function ProductCategories() {
  const categories = ["WRLDS", "AVC", "MRTN GRX", "SNHL"];

  return (
    <div className="container">
      <div className="categories">
        <div className="category__item-wrapper">
          {categories.map((category, index) => {
            return (
              <div className="category__item" key={index}>
                {category}
              </div>
            );
          })}
        </div>

        <div className="category__item">
          All preset packs for $12.5 (Limited)
        </div>
      </div>
    </div>
  );
}
