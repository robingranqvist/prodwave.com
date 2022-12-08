import React from "react";

export default function ProductVideo({ video }) {
  return (
    <div className="container">
      <div className="product__video">
        <iframe
          width="100%"
          height="700px"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
