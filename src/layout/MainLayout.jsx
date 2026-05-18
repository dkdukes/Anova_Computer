import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

function MainLayout() {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;