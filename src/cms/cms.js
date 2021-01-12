import React from 'react'
import CMS from 'netlify-cms-app'

import ProductPagePreview from '../components/Product/ProductPage/ProductPage'

CMS.registerPreviewTemplate('products',({entry})=><ProductPagePreview {...entry.toJS().data} />)