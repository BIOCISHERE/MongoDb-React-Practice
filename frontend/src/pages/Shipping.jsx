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
                placeholder="Enter adress..."
                value={isData.adress}
                onChange={(e) => setIsData({ ...isData, adress: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dataApartment" className="form-label ms-2">
                Apartment
              </label>
              <input
                id="dataApartment"
                type="text"
                className="form-control border border-dark-subtle"
                placeholder="Enter apartment..."
                value={isData.apartment}
                onChange={(e) => setIsData({ ...isData, apartment: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dataCountry" className="form-label ms-2">
                Country
              </label>
              <input
                id="dataCountry"
                type="text"
                className="form-control border border-dark-subtle"
                placeholder="Enter country..."
                value={isData.country}
                onChange={(e) => setIsData({ ...isData, country: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dataState" className="form-label ms-2">
                State
              </label>
              <input
                id="dataState"
                type="text"
                className="form-control border border-dark-subtle"
                placeholder="Enter state..."
                value={isData.state}
                onChange={(e) => setIsData({ ...isData, state: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dataCity" className="form-label ms-2">
                City
              </label>
              <input
                id="dataCity"
                type="text"
                className="form-control border border-dark-subtle"
                placeholder="Enter city..."
                value={isData.city}
                onChange={(e) => setIsData({ ...isData, city: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dataPostal" className="form-label ms-2">
                Postal
              </label>
              <input
                id="dataPostal"
                type="text"
                className="form-control border border-dark-subtle"
                placeholder="Enter postal..."
                value={isData.postal}
                onChange={(e) => setIsData({ ...isData, postal: e.target.value })}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
