import Link from "next/link";

export default function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer__item">
          Check out Prodwave on{" "}
          <Link href="https://medium.com/prodwave" target="_blank">
            Medium
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.youtube.com/channel/UCuaSf2yeFwkcTAkBFc_wJQA"
            target="_blank"
          >
            YouTube
          </Link>
        </div>
        <div className="footer__item">Prodwave 2022</div>
      </footer>
    </div>
  );
}
