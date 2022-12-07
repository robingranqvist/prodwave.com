import Link from "next/link";

export default function ProductCard({ frontmatter }) {
  return (
    <div className="product">
      <div className="product__image-wrapper">
        <div
          className="product__image"
          style={{
            backgroundImage: `url(${frontmatter.image__thumbnail})`,
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>
      <div className="product__content">
        <div className="product__cta">
          <h2>{frontmatter.title}</h2>
          <div className="product__buttons">
            <button className="product__button is--primary">
              Buy now - {frontmatter.price}
            </button>
            <Link className="product__link" href="#">
              More info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
