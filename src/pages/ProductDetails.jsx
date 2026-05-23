import React, { useState } from "react";
import { useProducts } from "@/context/ProductsContext";
import { useParams, Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";
import StarRating from "@/components/StarRating";

function ProductDetails() {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  // Wait until products are loaded
  if (!products || products.length === 0) {
    return <div className="text-center mt-10 text-xl">Loading product...</div>;
  }
  const product = products.find((p) => String(p.id) === String(id));

  // Only after loading is complete
  if (!product) {
    return (
      <div className="text-center mt-10 text-xl text-red-500">
        Product not found
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });

    alert(`${product.title} added to cart`);
  };
  useEffect(() => {
    console.log("Mounted ProductDetails:", id);
    return () => console.log("Unmounted ProductDetails");
  }, []);
  return (
    <div>
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6 flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Info */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="text-3xl font-bold text-blue-600 mb-6">
            ${product.price}
          </p>

          <p className="mb-4">{<StarRating rating={product.rating} />}</p>

          {/* Specs */}
          <div className="bg-gray-100 p-4 rounded-lg space-y-2">
            {Object.entries(product.details || {}).map(([key, value]) => (
              <div key={key}>
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border rounded overflow-hidden">
              <button
                onClick={() => setQuantity((p) => Math.max(1, p - 1))}
                className="px-4 py-2 bg-gray-200"
              >
                -
              </button>

              <span className="px-6">{quantity}</span>

              <button
                onClick={() => setQuantity((p) => p + 1)}
                className="px-4 py-2 bg-gray-200"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-6 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-bold mb-4">Detailed Description</h2>
          <p>{product.detailedescription}</p>
        </div>
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-bold mb-1">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 4) // Show only 4 related products
              .map((related) => (
                <div
                  key={related.id}
                  className="border rounded-lg p-4 shadow-sm group transition"
                >
                  <img
                    src={related.imageUrl}
                    alt={related.title}
                    className="w-full h-48 object-cover rounded-md"
                  />

                  <h2 className="font-bold mt-2">{related.title}</h2>

                  <p className="text-gray-700">$ {related.price}</p>
                  <p className="">{<StarRating rating={related.rating} />}</p>

                  <Link
                    to={`/products/${related.id}`}
                    className="
                      mt-2
                      w-full
                      bg-blue-500
                      text-white
                      py-2
                      px-6
                      rounded-md
                      hover:bg-blue-600
                      transition-all
                      duration-300
                      opacity-0
                      translate-y-3
                      group-hover:opacity-100
                      group-hover:translate-y-0
                    "
                  >
                    View Product
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
