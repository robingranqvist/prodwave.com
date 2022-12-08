import fs from "fs";
import path from "path";
import matter from "gray-matter";

import {
  PageHead,
  Nav,
  Hero,
  ProductCategories,
  ProductGrid,
  Footer,
} from "@/components/index";

export default function Product({
  frontmatter: {
    title,
    title__page,
    name,
    video,
    price,
    gumroad__url,
    image__thumbnail,
    image__featured,
    serum__version,
    order,
  },
  content,
  slug,
}) {
  return (
    <>
      <header className="section is--hero">
        <PageHead
          title={"Prodwave - " + title}
          description="Quality Xfer Serum preset packs for $5 or less"
        />

        <Nav />

        <Hero heading={title__page} subheading={name} />

        <main className="section is--products">
          <div className="container__large">
            <div className="image__fullpage"></div>
          </div>

          <div className="container">
            <div className="content__center">
              <div className="content__center--inner">
                <p className="subheader">The presets</p>
                <p className="product__paragraph"></p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="product__video"></div>
          </div>

          <div className="container">
            <div className="content__center">
              <div className="content__center--inner">
                <div className="product__table">
                  <div className="product__row"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="content__center">
              <div className="content__center--inner">
                <div className="product__cta--page">
                  <h2>
                    Skip your next coffee and get this soundbank for only $
                    {price}
                  </h2>

                  <a className="product__button">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </header>
    </>
  );
}

export async function getStaticPaths() {
  const markdownFiles = fs.readdirSync(path.join("content/products"));

  const paths = markdownFiles.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const meta = fs.readFileSync(
    path.join("content/products", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(meta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
