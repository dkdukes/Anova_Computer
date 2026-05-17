import React from 'react'
import { createContext ,useState,useContext} from 'react'

const cartContext = createContext();
export function CartProvider ({ children }){
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
    <cartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </cartContext.Provider>
  )
}

export const useCart=()=>useContext(cartContext)