import React from 'react'
import {useState} from "react";

const AddProductPage = ({addProducts}) => {
        const [data, setData] = useState({})
        const onHandleChange = (event) => {
            setData({...data,"name":event.target.value})
        }
        const onHandleChangePrice = (event) => {
            setData({...data,"price":event.target.value})
        }
        const onHandleSubmit = (e) =>{
            e.preventDefault();
            addProducts(data)
        }
  return (
    <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='nmae prodcut' onChange={onHandleChange} />
                <input type="number" placeholder='price' onChange={onHandleChangePrice}/>
                <button>add new</button>
            </form>
    </div>
  )
}
export default AddProductPage
