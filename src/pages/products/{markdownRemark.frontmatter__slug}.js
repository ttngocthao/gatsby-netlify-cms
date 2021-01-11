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
       
      },
      html
    },
  } = data;
  console.log(data)
  return (
    <div>
      <h1>{productName} detail page</h1>
      <h2>Code:{productId}</h2>
      <img src={productImage} alt=''/>
      <h3>
        Page content here
      </h3>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};
export const query = graphql`
  query ProductDetailPage($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        productName
        productId
        productImage
        productIntro
        # productPageContent
        templateKey
      }
    }
  }
`;
export default ProductDetailPage;
