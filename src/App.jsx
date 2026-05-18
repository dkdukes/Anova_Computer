import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./layout/MainLayout";


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Shared Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
