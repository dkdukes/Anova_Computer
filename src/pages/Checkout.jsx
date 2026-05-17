import React from "react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

function Checkout() {
  const { cart } = useCart();

  const total_sum = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold mb-4">
          Your cart is empty
        </h1>

        <Link
          to="/products"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-center mb-8 font-bold text-3xl">
        Checkout
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Cart Items */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">
            Order Items
          </h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className="border-b py-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-500">
                  Quantity: {item.quantity}
                </p>

                <p className="text-blue-600">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <div className="font-bold text-green-600">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white shadow-md rounded-lg p-6 h-fit">
          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4">
            <span>Total Items</span>
            <span>
              {cart.reduce(
                (acc, item) => acc + item.quantity,
                0
              )}
            </span>
          </div>

          <div className="flex justify-between text-xl font-bold mb-6">
            <span>Total</span>
            <span>${total_sum.toFixed(2)}</span>
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;