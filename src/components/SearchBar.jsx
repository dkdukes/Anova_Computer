import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim()) {
        navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      } else {
        navigate("/products");
      }
    }, 400); // debounce delay

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, navigate]);

  return (
    <div className="w-full flex justify-center py-4">
      <div className="flex items-center w-full max-w-2xl bg-white shadow-md rounded-xl overflow-hidden border">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 px-4 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default SearchBar;
