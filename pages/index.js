import Image from "next/image";

import {
  PageHead,
  Nav,
  Hero,
  ProductCategories,
  ProductGrid,
  Footer,
} from "@/components/index";

export default function Home() {
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
        <ProductCategories />

        <ProductGrid />
      </main>

      <Footer />
    </>
  );
}
