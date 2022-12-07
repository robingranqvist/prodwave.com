import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";

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

  return {
    props: {
      products,
    },
  };
}
