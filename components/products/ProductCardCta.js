import Link from "next/link";

export default function ProductCardCta({ frontmatter }) {
  return (
    <div className="product__cta">
      <h2>{frontmatter.title}</h2>

      <div className="product__buttons">
        <Link className="product__button" href={frontmatter.gumroad__url}>
          Buy now
        </Link>
        <Link className="product__link" href="#">
          More info
        </Link>
      </div>
    </div>
  );
}
