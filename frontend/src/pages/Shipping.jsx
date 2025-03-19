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
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <h1>Shipping</h1>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
