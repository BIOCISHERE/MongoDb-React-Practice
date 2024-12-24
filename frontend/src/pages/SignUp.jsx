import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../store/Context.jsx";

const SignUp = () => {
  const { store, actions } = useContext(Context);

  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isConfirm, setIsConfirm] = useState("");
  const [isShow, setIsShow] = useState(false);

  const [isAlert, setIsAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMessage, setIsMessage] = useState("");

  const redirect = useNavigate();

  const redirectManager = () => {
    setTimeout(() => {
      redirect("/");
    }, "5000");
  };

  const signUpRequest = () => {
    {
      /* Complete the backend of the users before continuing */
    }
  };

  const registerInfo = () => {
    if (isEmail == "") {
      setIsAlert(true);
      setIsMessage("Please type a email");
      return false;
    } else if (isPassword == "") {
      setIsAlert(true);
      setIsMessage("Please type a password");
      return false;
    } else if (isConfirm == "") {
      setIsAlert(true);
      setIsMessage("Please confirm your password");
      return false;
    } else if ((isPassword = !isConfirm)) {
      setIsAlert(true);
      setIsMessage("The passwords don't match");
      return false;
    } else {
      // Here we must execute the fetch and delete the return below
      return true;
    }
  };

  const alertManager = () => {
    if (isAlert) {
      return (
        <div className="container-fluid alert alert-danger text-center" role="alert">
          {isMessage}
        </div>
      );
    } else if (isSuccess) {
      return (
        <div className="container-fluid alert alert-success text-center" role="alert">
          {isMessage}
        </div>
      );
    } else {
      return (
        <div className="container-fluid alert alert-secondary text-center" role="alert">
          Type your info
        </div>
      );
    }
  };
  return (
    <div className="container-fluid">
      <h1>Sign up</h1>
    </div>
  );
};

export default SignUp;
