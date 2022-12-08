import Image from "next/image";

import ProductCardListenButton from "./ProductCardListenButton";

import image__gumroad from "@/assets/logos/logo__gumroad.svg";

export default function ProductCardInfo({ frontmatter }) {
  return (
    <div className="product__info">
      <ProductCardListenButton frontmatter={frontmatter} />

      <div className="product__line"></div>
      <p>Xfer Serum v. {frontmatter.serum__version} or newer</p>
      <div className="product__line"></div>
      <Image src={image__gumroad} alt="Gumroad Logo" width="94" height="24" />
    </div>
  );
}
