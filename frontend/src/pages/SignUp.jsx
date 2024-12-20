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
  return (
    <div className="container-fluid">
      <h1>Sign up</h1>
    </div>
  );
};

export default SignUp;
