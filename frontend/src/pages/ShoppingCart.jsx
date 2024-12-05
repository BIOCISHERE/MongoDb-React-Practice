import React, { useContext, useState } from "react";
import Context from "../store/Context.jsx";

const ShoppingCart = () => {
  const { store, actions } = useContext(Context);

  const [isShippingRegion, setIsShippingRegion] = useState(1);
  const [isShowShipping, setIsShowShipping] = useState(false);

  return (
    <div className="container-fluid">
      <h2>Shopping Cart</h2>
    </div>
  );
};

export default ShoppingCart;
