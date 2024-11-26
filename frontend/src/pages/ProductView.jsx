import React, { useContext, useEffect, useState } from "react";
import Context from "../store/Context.jsx";
import { Link, useParams } from "react-router-dom";

const ProductView = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [isProduct, setIsProduct] = useState([]);

  const [isSize, setIsSize] = useState("S");
  const [isFootwearSize, setIsFootwearSize] = useState("30");
  const [isAmount, setIsAmount] = useState("1");
  const [isFav, setIsFav] = useState(false);

  const manageLinks = () => {
    if (isProduct.productFor == "Women") {
      return (
        <span>
          <Link to="/" className="mx-1">
            Home
          </Link>
          {">"}
          <Link to="/women-products" className="mx-1">
            Women
          </Link>
          {">"}
          <Link to="#" className="mx-1">
            {isProduct.name}
          </Link>
        </span>
      );
    } else if (isProduct.productFor == "Men") {
      return (
        <span>
          <Link to="/" className="mx-1">
            Home
          </Link>
          {">"}
          <Link to="/men-products" className="mx-1">
            Men
          </Link>
          {">"}
          <Link to="#" className="mx-1">
            {isProduct.name}
          </Link>
        </span>
      );
    } else if (isProduct.productFor == "Footwear") {
      return (
        <span>
          <Link to="/" className="mx-1">
            Home
          </Link>
          {">"}
          <Link to="/footwear-products" className="mx-1">
            Footwear
          </Link>
          {">"}
          <Link to="#" className="mx-1">
            {isProduct.name}
          </Link>
        </span>
      );
    } else {
      return <span>Fail</span>;
    }
  };

  const manageSelect = () => {
    {
      /*
      This func manages the select input depending of the productFor. 
       */
    }
    if (isProduct.productFor == "Footwear") {
      return (
        <>
          <label htmlFor="selectFootwear">Select size:</label>
          <select
            id="selectFootwear"
            className="form-select border border-dark fauxBorder w-50"
            aria-label="Select ypur size"
            name="selectedSize"
            onChange={(e) => setIsFootwearSize(e.target.value)}
          >
            <option defaultValue>30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
          </select>
        </>
      );
    } else {
      return (
        <>
          <label htmlFor="selectSize">Select size:</label>
          <select
            id="selectSize"
            className="form-select border border-dark fauxBorder w-50"
            aria-label="Select yout size"
            name="selectedSize"
            onChange={(e) => setIsSize(e.target.value)}
          >
            <option defaultValue>S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </>
      );
    }
  };

  useEffect(() => {
    store.fullResponse.find((x) => {
      x.id === id ? setIsProduct(x) : console.log("fail");
    });
  }, []);

  return (
    <div className="container-fluid">
      <h1>Product View</h1>
      <h4>{isProduct.id}</h4>
    </div>
  );
};

export default ProductView;
