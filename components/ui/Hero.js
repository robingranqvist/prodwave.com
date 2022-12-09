import Link from "next/link";

export default function Hero({ heading, subheading, page, gumroad__url }) {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero__content">
          <p className="subheader">
            {page === "slug" && (
              <>
                <Link href="/">Home</Link> /{" "}
              </>
            )}
            {subheading}
          </p>
          <h1>{heading}</h1>
        </div>

        {page === "slug" ? (
          <a className="product__button is--dark" href={gumroad__url}>
            Buy Now
          </a>
        ) : null}
      </div>
    </div>
  );
}
