import React, { useContext, useState } from "react";
import Context from "../store/Context.jsx";

const FootwearProducts = () => {
  const { store, actions } = useContext(Context);

  const [isUrban, setIsUrban] = useState(false);
  const [isSport, setIsSport] = useState(false);
  const [isShoe, setIsShoe] = useState(false);
  const [isSandals, setIsSandals] = useState(false);

  const turnClass = (info) => {
    if (info.category == 17) {
      return isUrban ? "col" : "d-none";
    } else if (info.category == 18) {
      return isSport ? "col" : "d-none";
    } else if (info.category == 19) {
      return isShoe ? "col" : "d-none";
    } else if (info.category == 20) {
      return isSandals ? "col" : "d-none";
    } else {
      return "col";
    }
  };
};

export default FootwearProducts;
