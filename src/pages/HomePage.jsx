import React from 'react'
import {Link} from "react-router-dom"
const HomePage = ({products}) => {

  return (
    <div>
            {products.map((item, index)=> {
              return (
                  <div key={index + 1}>
                    <h3><Link to={`/details/${item.id}`}>{item.name}</Link></h3>
                    <p>{item.price}</p>
                </div>
              )
            })}
    </div>
  )
}

export default HomePage;
