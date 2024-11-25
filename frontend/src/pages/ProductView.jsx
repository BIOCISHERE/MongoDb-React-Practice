import React, { useContext, useEffect, useState } from "react";
import Context from "../store/Context.jsx";
import { useParams } from "react-router-dom";

const ProductView = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [isTest, setTest] = useState([]);

  useEffect(() => {
    store.fullResponse.find((x) => {
      x.id === id ? setTest(x) : console.log("fail");
    });
  }, []);

  return (
    <div className="container-fluid">
      <h1>Product View</h1>
      <h4>{isTest.id}</h4>
    </div>
  );
};

export default ProductView;
