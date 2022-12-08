import ProductCardCta from "./ProductCardCta";
import ProductCardInfo from "./ProductCardInfo";

export default function ProductCardContent({ frontmatter, slug }) {
  return (
    <div className="product__content">
      <ProductCardCta frontmatter={frontmatter} slug={slug} />
      <ProductCardInfo frontmatter={frontmatter} />
    </div>
  );
}
