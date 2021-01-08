import React from "react";
import { graphql, Link } from "gatsby";

const Index = ({ data }) => {
  const products = data.allMarkdownRemark.nodes[0].frontmatter.products;
  console.log("data", data);
  return (
    <div>
      <h1>Site's name</h1>
      <div>
        <p>Veniam mollit in eu quis culpa.</p>
        <p>
          Aute tempor sint minim sit dolore aliquip ipsum tempor est nulla
          excepteur et eu. Aliquip reprehenderit proident id elit Lorem et
          aliqua exercitation consequat pariatur commodo. Excepteur ut duis id
          laboris enim ad Lorem cillum. Eu ad sit enim labore quis ea labore in
          labore quis cupidatat. Reprehenderit in pariatur dolore irure elit est
          tempor excepteur cillum labore pariatur qui quis tempor.
        </p>
      </div>
      <h2>List of products</h2>
      <ul>
        {products &&
          products.length !== 0 &&
          products.map((item, index) => {
            return (
              <li key={index}>
                <h5>{item.productName}</h5>
                <p>{item.productIntro}</p>
                <figure>
                  <img src={item.productImage.publicURL} alt="" />
                </figure>
                <Link to="/">Read more about {item.productName}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export const query = graphql`
  query GetAllProducts {
    allMarkdownRemark {
      nodes {
        frontmatter {
          products {
            productIntro
            productName
            productImage {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default Index;
