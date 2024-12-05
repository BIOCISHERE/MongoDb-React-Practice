import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFound from "./components/NotFound.jsx";
import InjectContext from "./store/appContext.jsx";
import WomenProducts from "./pages/WomenProducts.jsx";
import MenProducts from "./pages/MenProducts.jsx";
import ProductView from "./pages/ProductView.jsx";
import FootwearProducts from "./pages/FootwearProducts.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/women-products" element={<WomenProducts />} />
        <Route path="/men-products" element={<MenProducts />} />
        <Route path="/footwear-products" element={<FootwearProducts />} />
        <Route path="/products/:id" element={<ProductView />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default InjectContext(App);
