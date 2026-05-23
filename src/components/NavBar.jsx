import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { useCart } from "@/context/CartContext";

function NavBar() {
  const { cart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">

      {/* Logo */}
      <Link to="/" className="text-xl font-bold hover:bg-gray-800 px-3 py-2 rounded-md">
        Anova Technologies
      </Link>

      {/* Search */}
      <div className="flex-1 flex justify-center mx-6">
        <SearchBar />
      </div>

      {/* Cart */}
      <Link
        to="/cart"
        className="relative px-3 py-2 rounded-md hover:bg-gray-800"
      >
        Cart
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        )}
      </Link>

      {/* AUTH SECTION */}
      <div className="ml-4 flex items-center gap-3">

        {/* If user is logged in */}
        {user ? (
          <>
            <span className="text-sm text-gray-300">
              Hi, {user.displayName || user.email}
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="hover:text-blue-400 px-2"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;