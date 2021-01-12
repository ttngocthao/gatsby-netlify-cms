import React from 'react'
import ProductPageTemplate from '../../components/Product/ProductPage/ProductPage'

const ProductPagePreview = ({entry,widgetFor}) => {
    return (
        <>
            <h2>Product Page preview</h2>
            <ProductPageTemplate 
                productName={entry.getIn(['data','productName'])}
                productImage={entry.getIn(['data','productImage'])}
                content={widgetFor('body')}/>
            
        </>
    )
}

export default ProductPagePreview
