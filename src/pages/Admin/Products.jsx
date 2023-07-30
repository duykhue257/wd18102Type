import React from 'react'
import {Link} from "react-router-dom"

const ProductsPage = ({products, removeProducts}) => {
    const onHandleRemove =(id) => {
        removeProducts(id)
    }
    
  return (
    <div>
        <Link to={`/admin/product/add`} > <button>Add prodcut</button></Link>
           <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {products.map((item ,index)=> {
                return (
                    <tr key={index + 1}>
                    <th>{index + 1}</th>
                    <th>{item.name}</th>
                    <th>{item.price}</th>
                    <th>
                        <button onClick={()=> onHandleRemove(item.id)} >remone</button>
                        <Link to={`/admin/product/update/${item.id}`} ><button>edit</button></Link>
                    </th>
                </tr>
                )
               })}
            </tbody>
           </table>
    </div>
  )
}

export default  ProductsPage
