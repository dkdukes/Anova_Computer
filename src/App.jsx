import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Products from './pages/Products'
import CreateProduct from './pages/CreateProduct'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/create-product' element={<CreateProduct />}/>
        <Route path='/products/:id' element={<ProductDetails />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route element={<ProtectedRoute />}>
          <Route path='/checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

