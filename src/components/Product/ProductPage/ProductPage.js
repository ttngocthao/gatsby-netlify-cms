import React from 'react'
import RehypeReact from 'rehype-react'
import {Paragraph,UnorderedList} from '../../htmlContent/htmlContent'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components:{
    p: Paragraph,
    ul: UnorderedList
  }
}).Compiler
const ProductPage = (props) => {
    const {productName,productId,productImage,htmlAst} = props 
    return (
        <div>
            <h1 style={{color:'green'}}>{productName} detail page</h1>
            <h2>Code:{productId}</h2>
            <img src={productImage} alt=''/>
            <h3>
                Page content below
            </h3>
            {/* {renderAst(htmlAst)} */}
        </div>
    )
}
export default ProductPage