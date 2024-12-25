import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../store/Context.jsx";

const SignUp = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 border border-dark-subtle rounded mx-auto my-4">
          <h1 className="text-center">Sign Up</h1>
          {/* Here will be the alertManager */}
          <form onSubmit={registerUser}>
            <label htmlFor="dataName" className="form-label">
              Name
            </label>
            <br />
            <input
              id="dataName"
              type="email"
              className="form-control"
              placeholder="Enter name.."
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
