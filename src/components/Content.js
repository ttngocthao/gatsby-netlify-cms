import React from 'react'
import Marked from 'react-markdown'


export const HTMLContent =({content,className=''})=>{
  return(
    <div className={className} dangerouslySetInnerHTML={{__html:content}}/>
  )
}

const Content = ({content,className=''})=>{
   return(
     <div className={className}>{content}</div>
   )
}
export default Content