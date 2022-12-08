import ProductCardImage from "./ProductCardImage";
import ProductCardContent from "./ProductCardContent";

export default function ProductCard({ frontmatter }) {
  return (
    <div className="product">
      <ProductCardImage frontmatter={frontmatter} />
      <ProductCardContent frontmatter={frontmatter} />
    </div>
  );
}
