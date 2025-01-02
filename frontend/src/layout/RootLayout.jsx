import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
