import React from 'react'

import Content from '../Content'




const ProductPageTemplate =({productName,productImage,productId,content,contentComponent})=>{
  const PageContent = contentComponent || Content
  return(
    <>
    <h2>Product page details</h2>
    <h3>{productName}</h3>
    <figure style={{maxWidth: '300px'}}>
      <img alt='' src={productImage}/>
    </figure>
    <PageContent content={content} className='product-page__content'/>
    </>
  )
}

export default ProductPageTemplate