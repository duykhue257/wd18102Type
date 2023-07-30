import React from 'react'
import {useParams} from "react-router-dom"

 const Details = ({products}) => {

    const{id} = useParams()
   
    const currentProducts = products.find((item)=> item.id === (id)) 
    console.log( currentProducts);
  return (
    <div>
      
            <h1>{currentProducts?.name}</h1>
            <p>{currentProducts?.price}</p>
    </div>
  )
}

export default Details
