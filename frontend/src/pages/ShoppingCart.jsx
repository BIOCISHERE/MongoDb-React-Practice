import React, { useContext, useState } from "react";
import Context from "../store/Context.jsx";
import { Link } from "react-router-dom";
import TshirtURL from "../assets/t-shirt.png";
import { IoIosWarning } from "react-icons/io";

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
              // THIS WILL DISPLAY WHEN THE SHOPPING CART IS NOT EMPTY
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
                                <span className="fs-6">
                                  Size {store.cartSizes[product.id]}
                                </span>{" "}
                                <a
                                  className="fs-6 fauxLetters"
                                  data-bs-toggle="offcanvas"
                                  href="#offcanvasWarning"
                                  aria-controls="offcanvasWarning"
                                >
                                  {/* Clicking this "a" tag, will show an offcanvas to remove the product from the cart */}
                                  Remove product
                                </a>
                                <div
                                  className="offcanvas offcanvas-start"
                                  tabIndex="-1"
                                  id="offcanvasWarning"
                                  aria-labelledby="offcanvasWarningLabel"
                                >
                                  <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasLabel">
                                      <span className="fs-4" style={{ color: "orange" }}>
                                        <IoIosWarning />
                                      </span>
                                      Warning
                                      <span className="fs-4" style={{ color: "orange" }}>
                                        <IoIosWarning />
                                      </span>
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="offcanvas"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="offcanvas-body">
                                    <div>
                                      Do you want to remove this product from your shopping cart?
                                    </div>
                                    <div className="d-flex mt-2">
                                      <button
                                        type="button"
                                        className="btn btn-danger me-auto"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={() => actions.resetIdOnCart(product.id)}
                                      >
                                        Yes
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-2 border border-dark-subtle text-center">
                            {/* This is the PRICE div */}
                            <h4 className="cartCenterVertically">
                              ${actions.returnFormated(product.id)}
                            </h4>
                          </div>
                          <div className="col-2 border border-dark-subtle">
                            {/* This is the AMOUNT div */}
                            <div className="container-fluid cartCenterVertically">
                              <div className="d-flex mx-auto">
                                <button
                                  type="button"
                                  className="btn btn-dark btn-sm me-1 fauxColor"
                                  onClick={() => actions.minusOneToCart(product.id)}
                                >
                                  -
                                </button>
                                <input
                                  value={store.cart[product.id]}
                                  className="text-center"
                                  style={{ width: "2rem" }}
                                />
                                <button
                                  type="button"
                                  className="btn btn-dark btn-sm me-1 fauxColor"
                                  onClick={() => actions.plusOneToCart(product.id)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-2 border border-dark-subtle text-center">
                            {/* This is the TOTAL div */}
                            <h4 className="cartCenterVertically">
                              ${actions.returnTotal(product.price, product.id)}
                            </h4>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            ) : (
              // THIS WILL DISPLAY WHEN THE SHOPPING CART IS EMPTY
              <div className="container-fluid">
                <div
                  className="row border border-dark-subtle text-center rounded"
                  style={{ marginTop: "1rem", marginBottom: "1rem" }}
                >
                  <h2 style={{ marginTop: "8rem", marginBottom: "8rem" }}>
                    Your shopping cart is empty.
                  </h2>
                </div>
              </div>
            )}
          </div>
          <div className="col-4" style={{ marginTop: "1rem", marginBottom: "5rem" }}>
            {/* This is the SUBTOTAL, SHIPPING and TOTAL div */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
