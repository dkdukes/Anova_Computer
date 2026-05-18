import React, { createContext, useState, useContext } from "react";

const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 👇 NEW: notification state
  const [lastAddedItem, setLastAddedItem] = useState(null);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      let updatedCart;

      if (existing) {
        updatedCart = prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        updatedCart = [...prev, product];
      }

      return updatedCart;
    });

    // 👇 trigger notification
    setLastAddedItem(product);

    // auto-clear after 2 seconds
    setTimeout(() => {
      setLastAddedItem(null);
    }, 2000);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        lastAddedItem, // 👈 expose it
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export const useCart = () => useContext(cartContext);