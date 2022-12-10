import Tag from "../ui/tag";

export default function ProductCardImage({ frontmatter }) {
  return (
    <div className="product__image-wrapper">
      <Tag text={frontmatter.price} />
      <div
        className="product__image"
        style={{
          backgroundImage: `url(${frontmatter.image__thumbnail})`,
          width: "100%",
          height: "100%",
        }}
      ></div>
    </div>
  );
}
