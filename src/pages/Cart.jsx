import React, { useMemo } from "react";
import { useCart } from "@/context/CartContext";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleIncrement = (id, quantity) => {
    updateQuantity(id, quantity + 1);
  };

  const handleDecrement = (id, quantity) => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  const total_sum = useMemo(() => {
    return cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold mb-4">
          Your cart is empty
        </h1>

        <Link
          to="/products"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-center mb-6 font-bold text-3xl">
        Cart
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT: Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg shadow-md flex items-center gap-4"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-1">
                <h2 className="font-semibold">
                  {item.title}
                </h2>

                <p className="text-blue-600 font-bold">
                  ${item.price}
                </p>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    className="px-3 py-1 bg-gray-200 rounded"
                    onClick={() =>
                      handleDecrement(item.id, item.quantity)
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity || 1}</span>

                  <button
                    className="px-3 py-1 bg-gray-200 rounded"
                    onClick={() =>
                      handleIncrement(item.id, item.quantity)
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <p className="font-bold text-green-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Actions */}
          <div className="flex justify-between mt-6">
            <Link
              to="/products"
              className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Shop More Items
            </Link>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* RIGHT: Summary */}
        <div className="bg-white shadow-md rounded-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">
            Your Order
          </h2>

          <p className="text-lg font-bold">
            Subtotal: ${total_sum.toFixed(2)}
          </p>

          <p className="text-sm text-gray-600 mt-2">
            Shipping and taxes calculated at checkout.
          </p>

          <button
            className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded mt-6 w-full disabled:opacity-50"
            disabled={cart.length === 0}
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;