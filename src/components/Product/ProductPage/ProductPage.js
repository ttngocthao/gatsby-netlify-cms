import React from 'react'
import RehypeReact from 'rehype-react'
import Content from '../../Content'
import {Paragraph,UnorderedList} from '../../htmlContent/htmlContent'
const styles = {border:'1px solid teal'}
const renderAst = new RehypeReact({
  createElement: React.createElement,
  components:{
    p: Paragraph,
    ul: UnorderedList
  }
}).Compiler
const ProductPage = (props) => {
    const {productName,productId,productImage,htmlAst,body,viewInCMSAdmin} = props 

    return (
        <div>
            <h1 style={{color:'green'}}>{productName} detail page</h1>
            <h2>Code:{productId}</h2>
            <img src={productImage} alt=''/>
            <h3>
                Page content below
            </h3>
          <Content style={styles} source={body} className='product-page__content'/> 
          <div style={styles} className='product-page__content' dangerouslySetInnerHTML={{__html: body}}/>
            {/* {renderAst(htmlAst)} */}
           

  
        </div>
    )
}

export const ProductPagePreview =()=>{
  
}

export default ProductPage