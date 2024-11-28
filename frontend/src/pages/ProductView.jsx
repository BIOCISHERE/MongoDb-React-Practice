import React, { useContext, useEffect, useState } from "react";
import Context from "../store/Context.jsx";
import { Link, useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import TshirtURL from "../assets/t-shirt.png";

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
          <Link to="/" className="mx-1 fauxLetters">
            Home
          </Link>
          {">"}
          <Link to="/women-products" className="mx-1 fauxLetters">
            Women
          </Link>
          {">"}
          <Link to="#" className="mx-1 fauxLetters">
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
    // This func manages the select input depending of the productFor.

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

  const manageFav = () => {
    if (isFav) {
      return <FaHeart type="button" onClick={() => setIsFav(!isFav)} />;
    } else {
      return <FaRegHeart type="button" onClick={() => setIsFav(!isFav)} />;
    }
  };

  const manageButton = (itemId, amnt) => {
    if (isProduct.productFor == "Footwear") {
      return [
        actions.plusCustomToCart(itemId, amnt),
        actions.changeCartSize(itemId, isFootwearSize),
      ];
    } else {
      return [actions.plusCustomToCart(itemId, amnt), actions.changeCartSize(itemId, isSize)];
    }
  };

  useEffect(() => {
    store.fullResponse.find((x) => {
      x.id === id ? setIsProduct(x) : console.log("fail");
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="container-fluid my-2">{manageLinks()}</div>
          <div className="container-fluid my-4">
            <div className="row">
              <div className="col-8 text-center">
                <img className="img-fluid" src={TshirtURL} alt="Product image" />
              </div>
              <div className="col-4 border border-dark-subbtle rounded">
                <div className="d-flex mt-2">
                  <span className="fs-2 me-auto text-break">{isProduct.name}</span>
                  <span className="fauxLetters fs-2">{manageFav()}</span>
                </div>
                <div className="d-flex">
                  <span className="mx-1 fs-5">{isProduct.rating}</span>
                  <span className="fauxLetters mx-1">{actions.turnRating(isProduct.rating)}</span>
                  <span className="mx-1 fs-5">({isProduct.ratingVotes})</span>
                </div>
                <div className="d-flex mt-2">
                  <span className="fs-1">${actions.returnFormated(Number(isProduct.price))}</span>
                </div>
                <div className="container-fluid mt-2">{manageSelect()}</div>
                <div className="container-fluid mt-2 mb-4">
                  <label htmlFor="selectAmount">Select amount:</label>
                  <select
                    id="selectAmount"
                    className="form-select border border-dark fauxBorder w-50"
                    aria-label="Select how many"
                    name="selectedAmount"
                    onChange={(e) => setIsAmount(e.target.value)}
                  >
                    <option defaultValue>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className="container-fluid mt-2">
                  <button
                    type="button"
                    className="btn btn-dark fauxColor w-100"
                    onClick={() => manageButton(isProduct.id, isAmount)}
                  >
                    Add to cart {store.cart[isProduct.id] > 0 && <>({store.cart[isProduct.id]})</>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
