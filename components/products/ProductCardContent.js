import ProductCardCta from "./ProductCardCta";
import ProductCardInfo from "./ProductCardInfo";

export default function ProductCardContent({ frontmatter }) {
  return (
    <div className="product__content">
      <ProductCardCta frontmatter={frontmatter} />
      <ProductCardInfo frontmatter={frontmatter} />
    </div>
  );
}
