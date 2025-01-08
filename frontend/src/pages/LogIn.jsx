import React, { useContext, useState } from "react";
import Context from "../store/Context.jsx";
import { redirect, useNavigate } from "react-router-dom";

const LogIn = () => {
  const { store, actions } = useContext(Context);

  const [isData, setIsData] = useState({
    email: "",
    password: "",
  });

  const [isShow, setIsShow] = useState(false);

  const navigate = useNavigate();

  const redirectManager = () => {
    setTimeout(() => {
      redirect("/");
    }, "3000");
  };

  const inputManager = () => {
    if (isShow) {
      return "text";
    } else {
      return "password";
    }
  };

  const logInRequest = async (e) => {
    e.preventDefault();
    {
      /* Finish the LogIn in the backend before continuing */
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 border border-dark-subtle rounded mx-auto my-4">
          <h1 className="text-center">Log In </h1>
          <form onSubmit={logInRequest}>
            <div className="mb-3">
              <label htmlFor="dataEmail" className="form-label ms-2">
                Email
              </label>
              <input
                id="dataEmail"
                type="text"
                className="form-control border border-dark-subtle"
                placeholder="Enter email..."
                value={isData.email}
                onChange={(e) => setIsData({ ...isData, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dataPassword" className="form-label ms-2">
                Password
              </label>
              <input
                id="dataPassword"
                type={inputManager()}
                className="form-control border border-dark-subtle"
                placeholder="Enter password..."
                value={isData.password}
                onChange={(e) => setIsData({ ...isData, password: e.target.value })}
              />
            </div>
            <div className="form-check ms-1 mb-3">
              <input
                id="checkboxInput"
                type="checkbox"
                className="form-check-input border border-dark"
                onClick={() => setIsShow(!isShow)}
              />
              <label htmlFor="checkboxInput" className="form-check-label">
                Show password
              </label>
            </div>
            <div className="container-fluid text-center mx-auto">
              <button type="submit" className="btn btn-dark fauxColor mb-2">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
