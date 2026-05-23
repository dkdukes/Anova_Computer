import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      // Only allow search on homepage
      if (location.pathname !== "/") return;

      const trimmed = searchTerm.trim();

      if (trimmed) {
        navigate(`/?search=${encodeURIComponent(trimmed)}`);
      } else {
        // important: clear query when input is empty
        navigate("/");
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, navigate, location.pathname]);

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