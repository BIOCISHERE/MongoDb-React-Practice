import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const [isData, setIsData] = useState({
    adress: "",
    apartment: "",
    country: "",
    state: "",
    city: "",
    postal: "",
  });
  const [isOptional, setIsOptional] = useState({
    showApartment: false,
    showPostal: false,
  });
  const redirect = useNavigate();

  const redirectManager = () => {
    setTimeout(() => {
      redirect("/");
    }, "3000");
  };

  const shippingManager = () => {
    // Im not sure if i should make different endpoints for a call with/without aparment,postal, etc.
    // In case i make different endpoints then this function will manage to which endpoint to use
    // depending if there is apartment or postal.
    if (isOptional.showApartment && isOptional.showPostal) {
    } else if (isOptional.showApartment) {
    } else if (isOptional.showPostal) {
    } else {
    }
  };

  const shippingRequest = async (e) => {
    e.preventDefault();
    try {
      const request = await axios.put("http://localhost:8080/api/user/update-shipping", isData);

      if (!request.data.success) {
        toast.error(request.data.message);
      } else {
        setIsData({ adress: "", apartment: "", country: "", state: "", city: "", postal: "" });
        toast.success(request.data.message);
        redirectManager();
      }
    } catch (error) {}
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
            <div className="container-fluid text-center mx-auto">
              <button type="submit" className="btn btn-dark fauxColor mb-2">
                Update shipping
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
