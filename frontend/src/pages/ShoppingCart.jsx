import React, { useContext, useState } from "react";
import Context from "../store/Context.jsx";

const ShoppingCart = () => {
  const { store, actions } = useContext(Context);

  const [isShippingRegion, setIsShippingRegion] = useState(1);
  const [isShowShipping, setIsShowShipping] = useState(false);

  const returnShipping = () => {
    if (isShippingRegion == 1) {
      return 10;
    } else if (isShippingRegion == 2) {
      return 15;
    } else if (isShippingRegion == 3) {
      return 20;
    } else if (isShippingRegion == 4) {
      return 25;
    } else if (isShippingRegion == 5) {
      return 15;
    } else if (isShippingRegion == 6) {
      return 20;
    } else {
      return 15;
    }
  };

  const returnShippingRegion = () => {
    if (isShippingRegion == 1) {
      return "North America";
    } else if (isShippingRegion == 2) {
      return "South America";
    } else if (isShippingRegion == 3) {
      return "Antartica";
    } else if (isShippingRegion == 4) {
      return "Africa";
    } else if (isShippingRegion == 5) {
      return "Europe";
    } else if (isShippingRegion == 6) {
      return "Asia";
    } else {
      return "Australia";
    }
  };

  return (
    <div className="container-fluid">
      <h2>Shopping Cart</h2>
      {/* 
        Before continuing, check if the shopping cart in the flux context if working.
       */}
    </div>
  );
};

export default ShoppingCart;
