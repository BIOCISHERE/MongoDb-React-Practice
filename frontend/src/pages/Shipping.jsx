import React, { useState } from "react";

const Shipping = () => {
  const [isShipping, setIsShipping] = useState({
    adress: "",
    apartment: "",
    country: "",
    state: "",
    city: "",
    postal: "",
  });

  const shippingRequest = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <h1 className="text-center">Shipping</h1>
          <form onSubmit={shippingRequest}>
            <div className="mb-3">
              <p>input</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
