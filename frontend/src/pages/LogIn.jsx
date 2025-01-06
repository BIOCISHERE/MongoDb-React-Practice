import React, { useContext } from "react";
import Context from "../store/Context.jsx";

const LogIn = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1>Log In </h1>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
