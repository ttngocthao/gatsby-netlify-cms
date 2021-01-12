import React from 'react'
import CMS from 'netlify-cms-app'
import './cms-utils'


import ProductPagePreview from './previewTemplate/ProductPagePreview'

CMS.registerPreviewTemplate('products',ProductPagePreview)