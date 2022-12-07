import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const products = ["WRLDS", "AVC", "MRTN GRX", "SNHL"];

  return (
    <div className="container">
      <div className="product__grid">
        {products.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
    </div>
  );
}
