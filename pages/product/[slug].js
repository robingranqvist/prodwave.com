import fs from "fs";
import path from "path";
import matter from "gray-matter";

import ProductFullPageImage from "@/components/products/ProductFullPageImage";
import ProductParagraph from "@/components/products/ProductParagraph";
import ProductVideo from "@/components/products/ProductVideo";
import ProductInfoTable from "@/components/products/ProductInfoTable";
import ProductCta from "@/components/products/ProductCta";

import { PageHead, Nav, Hero, Footer } from "@/components/index";

export default function Product({
  frontmatter: {
    title,
    title__page,
    name,
    price,
    gumroad__url,
    image__featured,
    serum__version,
    description,
    video__embed,
    total__presets,
    leads,
    basses,
    synths,
    plucks,
    arps,
    fx,
    pads,
    file__size,
  },
}) {
  return (
    <>
      <header className="section is--hero">
        <PageHead
          title={"Prodwave - " + title}
          description="Quality Xfer Serum preset packs for $5 or less"
        />

        <Nav />

        <Hero heading={title__page} subheading={name} page="slug" />
      </header>

      <main className="section is--products is--slug">
        <ProductFullPageImage image={image__featured} />

        <ProductParagraph description={description} />

        {video__embed && <ProductVideo video={video__embed} />}

        <ProductInfoTable
          total__presets={total__presets}
          leads={leads}
          basses={basses}
          synths={synths}
          plucks={plucks}
          arps={arps}
          fx={fx}
          pads={pads}
          serum__version={serum__version}
          file__size={file__size}
        />

        <ProductCta price={price} gumroad__url={gumroad__url} />
      </main>

      <Footer />
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
