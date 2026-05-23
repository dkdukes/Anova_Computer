import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useProducts } from "@/context/ProductsContext";
import StarRating from "@/components/StarRating";
function Products() {
  const { products } = useProducts();
  const location = useLocation();
  const navigate = useNavigate();

  const searchQuery = new URLSearchParams(location.search).get("search") || "";

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      {searchQuery && (
        <h1 className="text-2xl font-bold mb-6">
          Search Results for "{searchQuery}"
        </h1>
      )}

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-sm group transition"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md"
              />

              <h2 className="font-bold mt-2">{product.title}</h2>

              <p className="text-gray-700">$ {product.price}</p>
              <p className="">{<StarRating rating={product.rating} />}</p>

              <button
                onClick={() => navigate(`/products/${product.id}`)}
                className="
                            mt-3
                            w-full
                            bg-blue-500
                            text-white
                            py-2
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
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default Products;
