import React, { useContext } from "react";
import fauxAtelierLogo from "../assets/faux_atelier_logo.png";
import { Link, NavLink } from "react-router-dom";
import Context from "../store/Context.jsx";

const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg fauxColor">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={fauxAtelierLogo}
            alt="Faux Atelier logo"
            width="50"
            height="50"
            className="rounded-circle"
          />
          <span className="fauxText fs-3 ms-1">Faux Atelier</span>
        </Link>
        <form className="d-flex me-1" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-dark" type="submit">
            Search
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link fauxText" aria-current="page" to="/women-products">
                Women
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fauxText" to="/men-products">
                Men
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fauxText" to="/footwear-products">
                Footwear
              </NavLink>
            </li>
            <li className="nav-item dropdown me-1">
              <a
                className="nav-link dropdown-toggle fauxText"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="me-1">(USER)</span>
                User
              </a>
              <ul className="dropdown-menu">
                {!store.token ? (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Log-in
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Sign-up
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Test
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <div className="dropdown-item container-fluid mx-auto">
                        <button type="button" className="btn btn-danger w-100">
                          Log-out
                        </button>
                      </div>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Shipment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Payment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Test
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
            <li className="nav-item me-1">
              <Link className="nav-link fauxText" to="/">
                <span className="me-1">(TRUCK)</span>
                My orders
              </Link>
            </li>
            <li className="nav-item me-1">
              <Link className="nav-link fauxText" to="/">
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fauxText" to="/">
                <span className="me-1">(CART)</span>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
