import React, { useContext, useState } from "react";
import Context from "../store/Context.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const LogIn = () => {
  const { store, actions } = useContext(Context);

  const [isData, setIsData] = useState({
    email: "",
    password: "",
  });

  const [isShow, setIsShow] = useState(false);

  const redirect = useNavigate();

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
    try {
      const response = await axios.post("http://localhost:8080/api/user/login", isData);

      if (!response.data.success) {
        toast.error(response.data.message);
      } else {
        setIsData({ email: "", password: "" });
        toast.success(response.data.message);
        redirectManager();
      }
    } catch (error) {
      toast.error("Unknown error occurred. Please try again later.");
      console.log(error);
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
