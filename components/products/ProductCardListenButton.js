import Link from "next/link";
import Image from "next/image";

import icon__listen from "@/assets/icons/icon__listen--white.svg";

export default function ProductCardListenButton({ frontmatter }) {
  return (
    <div className="product__listen">
      <Image src={icon__listen} alt="Listen" width="18" height="18" />
      <Link href={frontmatter.video}>Listen</Link>
    </div>
  );
}
