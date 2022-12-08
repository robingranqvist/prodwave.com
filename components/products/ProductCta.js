import Image from "next/image";
import Link from "next/link";

import icon__coffee from "@/assets/icons/icon__coffee--black.svg";

export default function ProductCta({ price, gumroad__url }) {
  return (
    <div className="container">
      <div className="product__cta--page">
        <div className="product__cta--content">
          <Image src={icon__coffee} width="32" height="32" />

          <h2>
            Skip your next coffee and get this soundbank for only ${price}
          </h2>

          <Link href={gumroad__url} className="product__button is--dark">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
