export default function ProductFullPageImage({ image }) {
  return (
    <div className="container__large">
      <div
        className="image__fullpage"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
    </div>
  );
}
