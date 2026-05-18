import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
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
  const { cartItems = [] } = useCart();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <Link
        to="/"
        className="text-xl font-bold tracking-wide hover:text-blue-400 transition"
      >
        Anova Computers
      </Link>

      {/* Search */}
      <div className="flex-1 flex justify-center mx-6">
        <SearchBar />
      </div>

      {/* Cart */}
      <Link
        to="/cart"
        className="relative px-3 py-2 rounded-md hover:bg-gray-800 transition"
      >
        Cart
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow">
            {cartItems.length}
          </span>
        )}
      </Link>

      {/* Auth Menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex gap-3 ml-4">
          {/* Account Accordion */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-gray-900 text-white hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-md transition">
              Account
            </NavigationMenuTrigger>

            <NavigationMenuContent className="bg-white text-gray-900 rounded-md shadow-md p-2 min-w-[150px]">
              <NavigationMenuLink asChild>
                <Link
                  to="/signup"
                  className="block px-3 py-2 rounded hover:bg-gray-100 transition"
                >
                  Sign Up
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded hover:bg-gray-100 transition"
                >
                  Login
                </Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default NavBar;
