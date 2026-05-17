import React from "react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { useProducts } from "@/context/ProductsContext";
import { useState,useMemo } from "react";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const { products } = useProducts();
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };


  const total_sum = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * count, 0);
  }, [cart, count]);

  return (
    <div>
      <h1 className="text-center mb-4 font-bold text-3xl ">Cart</h1>
      <p className="text-center text-gray-500">
        This is the cart page. You can view all products in your cart here.
      </p>
      <div className="max-w-4xl mx-auto px-4 bg-white rounded-lg shadow-md mt-6 flex gap-2 font-bold text-lg">
        <h3 className="basis-1/3">Image</h3>
        <h3 className="basis-2/3">Title</h3>
        <h3 className="basis-1/3">Price</h3>
        <h3 className="basis-2/3">Quantity</h3>
        <h3 className="basis-1/3">Total</h3>
        <h3 className="basis-1/3">Action</h3>
      </div>
      <div className="max-w-4xl mx-auto px-4 bg-white rounded-lg shadow-md mt-6">
        {cart?.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow-md flex gap-2"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-1/3 h-15 object-cover mb-4 rounded basis-1/3"
            />
            <h2 className="text-xl font-semibold mb-2 basis-2/3">
              {item.title}
            </h2>
            <p className="text-lg font-bold text-blue-600 basis-1/3">
              ${item.price}
            </p>
            <div className="flex  items-center basis-2/3">
              <p className="basis-1/3 rounded-lg bg-gray-200 text-center" onClick={handleDecrement}>
                -
              </p>
              <span className="basis-1/3 text-center">{count}</span>
              <p className="basis-1/3 rounded-lg bg-gray-200 text-center" onClick={handleIncrement}>
                +
              </p>
            </div>
            <p className="text-lg font-bold text-green-600">
              ${item.price * count}
            </p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded basis-1/3"
              onClick={() => {
                removeFromCart(item.id);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
