import React from "react";

const ProductThumbnail = ({ itemData }) => {
  const { productName, productIntro, productImage } = itemData;
  return (
    <div>
      <h2>{productName}</h2>
      <div>{productIntro}</div>
      <figure>
        <img src={productImage} alt="" />
      </figure>
    </div>
  );
};

export default ProductThumbnail;
