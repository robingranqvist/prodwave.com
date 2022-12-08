import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="container">
      <div className="product__grid">
        {products.map(({ frontmatter, slug }) => {
          return (
            <ProductCard
              frontmatter={frontmatter}
              slug={slug}
              key={frontmatter.order}
            />
          );
        })}
      </div>
    </div>
  );
}
