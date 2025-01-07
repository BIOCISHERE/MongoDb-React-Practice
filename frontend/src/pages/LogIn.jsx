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
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 border border-dark-subtle rounded mx-auto my-4">
          <h1 className="text-center">Log In </h1>
          <form onSubmit={logInRequest}></form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
