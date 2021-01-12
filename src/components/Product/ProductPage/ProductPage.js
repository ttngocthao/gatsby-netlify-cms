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
    const {productName,productId,productImage,htmlAst,body} = props 
    return (
        <div>
            <h1 style={{color:'green'}}>{productName} detail page</h1>
            <h2>Code:{productId}</h2>
            <img src={productImage} alt=''/>
            <h3>
                Page content below
            </h3>
            {/* {renderAst(htmlAst)} */}
            <div style={{border:'1px solid teal'}} className='product-page__content' dangerouslySetInnerHTML={{__html: body}}/>

  
        </div>
    )
}
export default ProductPage