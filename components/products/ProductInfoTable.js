import React from "react";

export default function ProductInfoTable({
  total__presets,
  leads,
  basses,
  synths,
  plucks,
  arps,
  fx,
  pads,
  serum__version,
  file__size,
}) {
  return (
    <div className="container">
      <div className="content__center">
        <div className="content__center--inner">
          <div className="product__table">
            <div className="product__row">
              <p>Total presets</p>
              <p>{total__presets}</p>
            </div>
            <div className="product__row">
              <p>Leads</p>
              <p>{leads}</p>
            </div>
            <div className="product__row">
              <p>Basses</p>
              <p>{basses}</p>
            </div>
            <div className="product__row">
              <p>Synths</p>
              <p>{synths}</p>
            </div>
            {plucks && (
              <div className="product__row">
                <p>Plucks</p>
                <p>{plucks}</p>
              </div>
            )}
            {pads && (
              <div className="product__row">
                <p>Pads</p>
                <p>{pads}</p>
              </div>
            )}
            {arps && (
              <div className="product__row">
                <p>Arps</p>
                <p>{arps}</p>
              </div>
            )}
            {fx && (
              <div className="product__row">
                <p>FX</p>
                <p>{fx}</p>
              </div>
            )}
            <div className="product__row">
              <p>Serum version</p>
              <p>{serum__version} or higher</p>
            </div>
            <div className="product__row">
              <p>File</p>
              <p>{file__size}Kb (zip)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
