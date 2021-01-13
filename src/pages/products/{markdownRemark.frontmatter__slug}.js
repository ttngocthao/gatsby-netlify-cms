import React from "react";
import { graphql } from "gatsby";
import ProductPageTemplate from '../../components/Product/ProductPage/ProductPage'
import { HTMLContent } from "../../components/Content";

const ProductDetailPage = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: {
        productName,
        productId,
        productImage,
      },
      html,
    
    },
  } = data;
 
  
  return (
    <div>
      <h1>Live site</h1>
      <ProductPageTemplate 
        content={html} 
        contentComponent={HTMLContent} 
        productName={productName}
        productImage={productImage}
        productId={productId}/>
      {/* <ProductPage 
        
        htmlAst={htmlAst}
        body={html}
        viewInCMSAdmin={viewInCMSAdmin}
      /> */}
      
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
