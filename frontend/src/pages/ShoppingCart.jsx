import React, { useContext, useState } from "react";
import Context from "../store/Context.jsx";
import { Link } from "react-router-dom";
import TshirtURL from "../assets/t-shirt.png";

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
      <div className="container-fluid text-center my-3">
        <h1>Shopping cart</h1>
        <Link to="/" className="fauxLetters">
          Keep shooping
        </Link>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            {actions.getTotalCartPrice() > 0 ? (
              // This will display when the shopping cart is not empty
              <div
                className="container-fluid border border-dark-subtle rounded"
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <div className="container-fluid mt-3">
                  <div className="row">
                    <div className="col-6 text-center">
                      <h4>Product</h4>
                    </div>
                    <div className="col-2 text-center">
                      <h4>Price</h4>
                    </div>
                    <div className="col-2 text-center">
                      <h4>Amount</h4>
                    </div>
                    <div className="col-2 text-center">
                      <h4>Total</h4>
                    </div>
                  </div>
                </div>
                <div className="container-fluid mb-3">
                  {/* Each product in the shopping cart will map a row in which all the info will be displayed horizontally */}
                  {store.fullResponse.map((product, index) => {
                    if (store.cart[product.id] > 0) {
                      return (
                        <div className="row border border-dark-subtle rounded" key={index}>
                          <div className="col-6">
                            {/* This is the WHOLE product div */}
                            <div className="row border border-dark-subtle">
                              <div className="col-3 my-auto">
                                {/* This is the product IMG div */}
                                <img className="img-fluid" src={TshirtURL} alt="..." />
                              </div>
                              <div className="col-9">
                                {/* This is the product NAME div */}
                                <h5 className="mt-3 text-break">{product.name}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            ) : (
              "test"
            )}
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
