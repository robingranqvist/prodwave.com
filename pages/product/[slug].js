import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Product({
  frontmatter: {
    title,
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
  return <></>;
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
