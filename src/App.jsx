import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Products from './pages/Products'
import CreateProduct from './pages/CreateProduct'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/create-product' element={<CreateProduct />}/>
        <Route path='/products/:id' element={<ProductDetails />}/>
      </Routes>
    </Router>
  )
}

export default App

