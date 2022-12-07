import React from "react";

export default function ProductCard({ frontmatter }) {
  console.log(frontmatter);
  return <div className="product">{frontmatter.title}</div>;
}
