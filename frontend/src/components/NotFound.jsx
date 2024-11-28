import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className="container-fluid text-center"
      style={{ marginTop: "10rem", marginBottom: "10rem" }}
    >
      <h2>404 | Page not found</h2>
      <br />
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Return to menu
      </button>
    </div>
  );
};

export default NotFound;
