import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom"
import { HomePage, AddProductPage, Details, ProductsPage, UpdateProducts } from './pages/index.jsx'

function App() {
  const [products, setProducts] = useState([])
  useEffect(()=> {
    fetch(`http://localhost:3000/products`)
    .then((response)=> response.json())
    .then((data)=> setProducts(data))
  },[])

  const removeProducts = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',

    }).then(() => setProducts(products.filter((item)=>item.id != id)))
  }

  const addProducts = (product) => {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    .then(()=>{
      window.location.href = '/admin/product';
    })
  }
  const onUpdate = (product) => {
    fetch(`http://localhost:3000/products/${product.id}`,{
      method :'PATCH',
     headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product)
    })
    .then(() => {
      window.location.href = '/admin/product';
    })
  }


  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage products={products} />}/>
      <Route path='/details' element={<Details />}/>
      <Route path='/details/:id' element={<Details products={products}/>}/>
      <Route path='/admin/product' element={<ProductsPage products={products} removeProducts={removeProducts}/>}/>
      <Route path='/admin/product/add' element={<AddProductPage addProducts={addProducts}  />}/>
      <Route path='admin/product/update/:id' element={<UpdateProducts onUpdate={onUpdate} products={products}/>}/>
     
     </Routes>
    </>
  )
}

export default App
