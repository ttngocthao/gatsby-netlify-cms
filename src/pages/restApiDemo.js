import { graphql } from 'gatsby'
import React from 'react'

const RestApiDemo = ({data}) => {
    console.log(data)
    const {allRestApiUsers:{edges:allUsersArr}}=data
    return (
        <div>
           
           <h1>This page purpose is to call restAPI and to display data from restAPI</h1> 
           <h3>RestAPI used: <a href='https://api.github.com/users'>'https://api.github.com/users'</a></h3>
           <ul style={{display:'flex',flexWrap:'wrap'}}>
               {allUsersArr.map(({node})=>{
                   const {id,login,html_url,avatar_url}= node
                   return <li key={id} style={{listStyle:'none'}}>
                       <a href={html_url}> 
                        <figure style={{maxWidth:'200px'}}>
                           <img src={avatar_url} alt={login} style={{width:'100%'}}/>
                        </figure>
                        <figcaption style={{textAlign:'center'}}>{login}</figcaption>
                       </a>                      
                   </li>
               })}
           </ul>
        </div>
    )
}
export const query = graphql`
    query RestApiDemoData {
        allRestApiUsers {
            edges {
                node {
                    avatar_url
                    id
                    login
                    html_url
                }
            }
        }
    }
`
export default RestApiDemo
