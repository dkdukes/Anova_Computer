import React from 'react'
import { createContext ,useState,useEffect} from 'react'

export const CartContext = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };

      const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
      };

      const clearCart = () => {
        setCart([]);
      };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext