import React from 'react'
import { createContext ,useContext,useState,useEffect} from 'react'
import ProductsData from '../data/db.json'
const ProductsContext = createContext()

export function ProductsProvider ({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setProducts(ProductsData.products)
      setLoading(false)
    }, 1000)
    
  }, [])

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProducts = () => useContext(ProductsContext)