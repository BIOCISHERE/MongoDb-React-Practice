import React, { useContext } from "react";
import Context from "../store/Context";

const HomePage = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-fluid">
      <h1>Home</h1>
      <h4>{store.test}</h4>
    </div>
  );
};

export default HomePage;
