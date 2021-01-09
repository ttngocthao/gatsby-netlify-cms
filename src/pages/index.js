import React from "react";
import { graphql, Link } from "gatsby";

const Index = ({ data }) => {
  // const products = data.allMarkdownRemark.nodes[0].frontmatter.products;

  const productsData = data.allMarkdownRemark.nodes.filter(
    (item) => item.fields.sourceName === "productsData"
  );
  const homePageData = data.allMarkdownRemark.nodes.filter(
    (item) => item.fields.sourceName === "homePageData"
  )[0].frontmatter;
  console.log("products", productsData);
  console.log("homePageData", homePageData);
  return (
    <div>
      <h1>{homePageData.pageTitle}</h1>
      <div>
        {homePageData.pageIntroduction.map((p, i) => (
          <p key={i}>{p.paragraph}</p>
        ))}
      </div>
      <h2>List of products</h2>
      <ul>
        {productsData &&
          productsData.length !== 0 &&
          productsData.map((item, index) => {
            return (
              <li key={index}>
                <h3>{item.frontmatter.productName}</h3>
                <p>{item.frontmatter.productIntro}</p>
                <figure style={{ maxWidth: "300px", marginLeft: 0 }}>
                  <img
                    style={{ width: "100%" }}
                    src={item.frontmatter.productImage}
                    alt=""
                  />
                </figure>
                <Link to="/">
                  Read more about {item.frontmatter.productName}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export const query = graphql`
  query MyQuery($in: [String] = ["homePageData", "productsData"]) {
    allMarkdownRemark(filter: { fields: { sourceName: { in: $in } } }) {
      nodes {
        frontmatter {
          pageTitle
          pageIntroduction {
            paragraph
          }
          templateKey
          productName
          productImage
          productId
          productIntro
        }
        fields {
          sourceName
        }
      }
    }
  }
`;

export default Index;
