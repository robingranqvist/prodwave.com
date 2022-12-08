import React from "react";

export default function ProductCategories({ products }) {
  return (
    <div className="container">
      <div className="categories">
        <div className="category__item-wrapper">
          {products.map(({ frontmatter, slug }) => {
            return (
              <a
                className="category__item"
                key={slug}
                href={`/product/${slug}`}
              >
                {frontmatter.name}
              </a>
            );
          })}
        </div>

        <a className="category__item" href="/product/bundle">
          All preset packs for $12.5 (Limited)
        </a>
      </div>
    </div>
  );
}
