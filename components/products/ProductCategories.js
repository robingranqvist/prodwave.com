import React from "react";

export default function ProductCategories({ products }) {
  return (
    <div className="container">
      <div className="categories">
        <div className="category__item-wrapper">
          {products.map((product, index) => {
            return (
              <div className="category__item" key={index}>
                {product.frontmatter.name}
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
