import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../store/Context.jsx";
import toast from "react-hot-toast";
import axios from "axios";

const SignUp = () => {
  const { store, actions } = useContext(Context);

  const [data, setData] = useState({
    name: {
      firstName: "",
      lastName: "",
    },
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

  const signUpRequest = async (e) => {
    e.preventDefault();
    try {
      const request = await axios.post("http://localhost:8080/api/user/register", data);

      if (!request.data.success) {
        toast.error(request.data.message);
      } else {
        setData({ name: { firstName: "", lastName: "" }, email: "", password: "" });
        toast.success(request.data.message);
        redirectManager();
      }
    } catch (error) {
      toast.error("Unknown error occurred. Please try again later.");
      console.log(error);
    }
  };

  const inputManager = () => {
    if (isShow) {
      return "text";
    } else {
      return "password";
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 border border-dark-subtle rounded mx-auto my-4">
          <h1 className="text-center">Sign Up</h1>
          <form onSubmit={signUpRequest}>
            <div className="mb-3">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="dataFirstname" className="form-label ms-2">
                      Firstname
                    </label>
                    <input
                      id="dataFistname"
                      type="text"
                      className="form-control border border-dark-subtle"
                      placeholder="Enter firstname.."
                      value={data.name.firstName}
                      onChange={(e) =>
                        setData({ ...data, name: { ...data.name, firstName: e.target.value } })
                      }
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="dataLastname" className="form-label ms-2">
                      Lastname
                    </label>
                    <input
                      id="dataLastname"
                      type="text"
                      className="form-control border border-dark-subtle"
                      placeholder="Enter lastname..."
                      value={data.name.lastName}
                      onChange={(e) =>
                        setData({ ...data, name: { ...data.name, lastName: e.target.value } })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3"></div>
            <div className="mb-3">
              <label htmlFor="dataEmail" className="form-label ms-2">
                Email
              </label>
              <input
                id="dataEmail"
                type="email"
                className="form-control border border-dark-subtle"
                placeholder="Enter email..."
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
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
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
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
              <button
                type="submit"
                className="btn btn-dark fauxColor mb-2"
                //onClick={() => console.log(data)}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
