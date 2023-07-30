import React from 'react'
import {useState} from "react"
import{useParams} from "react-router-dom"
import {Link} from "react-router-dom";

 const UpdateProducts = ({products, onUpdate}) => {
    const {id} = useParams()
    const currentProducts = products.find((product) => product.id == id)
    const [inputValues, setInputValues] = useState()
    const onHandleChange = (event)=>{
        const {name, value} = event.target;
        const newData = {...inputValues,[name]: value}
        setInputValues(newData);
    }
    const onHandleChangeSubmit= (e) => {
        e.preventDefault();
        const dataUpdate = {...inputValues, "id" : id}
        onUpdate(dataUpdate)
    }
  return (
    <div>
        <Link to={`/admin/product`} ><button>product</button></Link>
        <form action="" onSubmit={onHandleChangeSubmit}>
            <p>name</p>
            <input type="text"  defaultValue={currentProducts?.name} onChange={onHandleChange} name="name" />
            <p>price</p>
            <input type="number" defaultValue={currentProducts?.price} onChange={onHandleChange} name="price" />
            <button>Update</button>
        </form>
    </div>
  )
}

export default UpdateProducts