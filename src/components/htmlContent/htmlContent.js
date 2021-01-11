import React from 'react'

export const Paragraph =(props)=>{
    return(
        <p className='product-page__p' style={{color:'purple'}}>{props.children}</p>
    )
}

export const UnorderedList = (props)=>{
    return(
        <ul className='product-page__ul' style={{border:'2px solid red'}}>{props.children}</ul>
    )
}