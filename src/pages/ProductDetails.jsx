import React from "react";
import { useProducts } from "@/context/ProductsContext";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const { products } = useProducts();
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md mt-6 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2">
        <img src={product?.imageUrl} alt={product?.title} />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-xl font-semibold">{product?.title}</h1>
        <p className="text-gray-600">{product?.description}</p>
        <p className="text-2xl font-bold text-blue-600">${product?.price}</p>
        <h1 className="text-xl font-semibold mt-4">Specifications:</h1>
        <div className="w-full bg-gray-100 p-4 rounded">
          {Object.entries(product?.details || {}).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value}
            </div>
          ))}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
