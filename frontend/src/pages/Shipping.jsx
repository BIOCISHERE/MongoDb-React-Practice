import React, { useState } from "react";

const Shipping = () => {
  const [isData, setIsData] = useState({
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
              <label htmlFor="dataAdress" className="form-label ms-2">
                Adress
              </label>
              <input
                id="dataAdress"
                type="text"
                className="form-control border border-dark-subtle"
                placeholder="Enter adress ..."
                value={isData.adress}
                onChange={(e) => setIsData({ ...isData, adress: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <h1>next input</h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
