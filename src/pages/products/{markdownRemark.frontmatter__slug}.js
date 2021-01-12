import React from "react";
import { graphql } from "gatsby";
import ProductPage from '../../components/Product/ProductPage/ProductPage'

const ProductDetailPage = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: {
        productName,
        productId,
        productImage,
      },
      html,
      htmlAst
    },
  } = data;
  console.log(data)
  return (
    <div>
      <ProductPage 
        productName={productName}
        productImage={productImage}
        productId={productId}
        htmlAst={htmlAst}
        body={htmlAst}
      />
      
      {/* <h1>{productName} detail page</h1>
      <h2>Code:{productId}</h2>
      <img src={productImage} alt=''/>
      <h3>
        Page content here
      </h3>*/}
      {/* <div dangerouslySetInnerHTML={{ __html: html }}></div> */}
      {/* {renderAst(htmlAst)}  */}
    </div>
  );
};
export const query = graphql`
  query ProductDetailPage($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      htmlAst
      frontmatter {
        productName
        productId
        productImage
        # productIntro
        # productPageContent
        templateKey
      }
    }
  }
`;
export default ProductDetailPage;
