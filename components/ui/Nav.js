import Image from "next/image";
import Link from "next/link";

import logo__prodwave from "@/assets/logos/logo__prodwave--black.svg";
import icon__youtube from "@/assets/icons/icon__youtube--black.svg";

export default function Nav() {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav__item">
          <Link href="/">
            <Image src={logo__prodwave} className="nav__logo" />
          </Link>
        </div>
        <Link
          href="https://www.youtube.com/channel/UCuaSf2yeFwkcTAkBFc_wJQA"
          target="_blank"
          rel="noopener"
        >
          <div className="nav__item">
            <Image src={icon__youtube} className="nav__icon" />
          </div>
        </Link>
      </nav>
    </div>
  );
}
