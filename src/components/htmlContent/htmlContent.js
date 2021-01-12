import React from 'react'

export const Paragraph =({children})=>{
    
    return(
        <p className='product-page__p' style={{color:'purple'}}>{children}</p>
    )
}

export const UnorderedList = ({children})=>{
    return(
        <ul className='product-page__ul' style={{border:'2px solid red'}}>{children}</ul>
    )
}