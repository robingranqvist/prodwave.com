import fs from "fs";
import matter from "gray-matter";
import Script from "next/script";

import {
  PageHead,
  Nav,
  Hero,
  ProductCategories,
  ProductGrid,
  Footer,
} from "@/components/index";

export default function Home({ products }) {
  return (
    <>
      <header className="section is--hero">
        <PageHead
          title="Prodwave - High Quality Presets for Xfer Serum"
          description="Quality Xfer Serum preset packs for $5 or less"
        />

        <Nav />

        <Hero
          heading="Quality sounds for your next production"
          subheading="Prodwave"
        />
      </header>

      <main className="section is--products">
        <ProductCategories products={products} />

        <ProductGrid products={products} />
      </main>

      <Footer />

      <Script src="https://gumroad.com/js/gumroad.js" />
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("content/products");

  const products = files.map((file) => {
    const slug = file.replace(".md", "");
    const readFile = fs.readFileSync(`content/products/${file}`, "utf-8");

    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  const orderedProducts = products.sort(
    (a, b) => a.frontmatter.order - b.frontmatter.order
  );

  return {
    props: {
      products: orderedProducts,
    },
  };
}
