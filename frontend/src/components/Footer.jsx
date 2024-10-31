import React from "react";
import fauxAtelierLocation from "../assets/faux_atelier_location.png";
import paypalLogo from "../assets/paypal_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 fauxFooter">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <span className="fw-bold">(LOCATION) Locate us</span>
            <div className="container-fluid mt-2">
              <Link to="/">
                <img
                  className="img-fluid border border-black rounded"
                  src={fauxAtelierLocation}
                  alt="Fake business location"
                />
              </Link>
            </div>
          </div>
          <div className="col-3">
            <span className="fw-bold">Faux Atelier</span>
            <ul>
              <li>
                <Link className="text-reset" to="/">
                  Stores
                </Link>
              </li>
              <li>
                <Link className="text-reset" to="/">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-reset" to="/">
                  Contact us
                </Link>
              </li>
              <li>
                <Link className="text-reset" to="/">
                  Privacy policies
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <span className="fw-bold">Information</span>
            <ul>
              <li>
                <Link className="text-reset" to="/">
                  Frequent questions
                </Link>
              </li>
              <li>
                <Link className="text-reset" to="/">
                  Delivery
                </Link>
              </li>
              <li>
                <Link className="text-reset" to="/">
                  Pick up in store
                </Link>
              </li>
              <li>
                <Link className="text-reset" to="/">
                  Payment policies
                </Link>
              </li>
              <li>
                <Link className="text-reset" to="/">
                  Terms and conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <div className="container-fluid my-auto">
              <Link to="/">
                <img className="img-fluid" src={paypalLogo} alt="Paypal logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
