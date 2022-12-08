import Link from "next/link";

export default function ProductCardCta({ frontmatter, slug }) {
  return (
    <div className="product__cta">
      <h2>{frontmatter.title}</h2>

      <div className="product__buttons">
        <Link className="product__button" href={frontmatter.gumroad__url}>
          Buy now
        </Link>
        <Link className="product__link" href={`/product/${slug}`}>
          More info
        </Link>
      </div>
    </div>
  );
}
