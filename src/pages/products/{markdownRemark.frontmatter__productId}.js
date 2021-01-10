import React from "react";
import { graphql } from "gatsby";

const ProductDetailPage = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: {
        productName,
        productId,
        productImage,
        productIntro,
        productPageContent,
      },
    },
  } = data;
  return (
    <div>
      <h1>{productName} detail page</h1>
    </div>
  );
};
export const query = graphql`
  query ProductDetailPage($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        productName
        productId
        productImage
        productIntro
        productPageContent
        templateKey
      }
    }
  }
`;
export default ProductDetailPage;
