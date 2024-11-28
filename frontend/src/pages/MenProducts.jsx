import React, { useContext, useState } from "react";
import Context from "../store/Context.jsx";
import ProductCard from "../components/ProductCard.jsx";

const MenProducts = () => {
  const { store, actions } = useContext(Context);

  const [isTShirt, setIsTShirt] = useState(false);
  const [isSweaters, setIsSweaters] = useState(false);
  const [isHoodies, setIsHoodies] = useState(false);
  const [isPants, setIsPants] = useState(false);
  const [isJeans, setIsJeans] = useState(false);
  const [isWallets, setIsWallets] = useState(false);
  const [isBelts, setIsBelts] = useState(false);
  const [isScarfs, setIsScarfs] = useState(false);
  const [isSocks, setIsSocks] = useState(false);
  const [isUnderpants, setIsUnderpants] = useState(false);
  const [isBoxers, setIsBoxers] = useState(false);

  const turnClass = (info) => {
    if (info.category == 1) {
      return isTShirt ? "col" : "d-none";
    } else if (info.category == 2) {
      return isSweaters ? "col" : "d-none";
    } else if (info.category == 3) {
      return isHoodies ? "col" : "d-none";
    } else if (info.category == 4) {
      return isPants ? "col" : "d-none";
    } else if (info.category == 6) {
      return isJeans ? "col" : "d-none";
    } else if (info.category == 8) {
      return isWallets ? "col" : "d-none";
    } else if (info.category == 9) {
      return isBelts ? "col" : "d-none";
    } else if (info.category == 10) {
      return isScarfs ? "col" : "d-none";
    } else if (info.category == 14) {
      return isSocks ? "col" : "d-none";
    } else if (info.category == 15) {
      return isUnderpants ? "col" : "d-none";
    } else if (info.category == 16) {
      return isBoxers ? "col" : "d-none";
    }
  };

  const returnProducts = () => {
    if (
      !isTShirt &&
      !isSweaters &&
      !isHoodies &&
      !isPants &&
      !isJeans &&
      !isWallets &&
      !isBelts &&
      !isScarfs &&
      !isSocks &&
      !isUnderpants &&
      !isBoxers
    ) {
      return store.menProducts.map((item, index) => (
        <ProductCard
          key={index}
          cardClass="col"
          cardId={item.id}
          name={item.name}
          price={item.price}
          rating={item.rating}
          ratingVotes={item.ratingVotes}
        />
      ));
    } else {
      return store.menProducts.map((item, index) => (
        <ProductCard
          key={index}
          cardClass={turnClass(item)}
          cardId={item.id}
          name={item.name}
          price={item.price}
          rating={item.rating}
          ratingVotes={item.ratingVotes}
        />
      ));
    }
  };

  return (
    <div className="container-fluid">
      <h4>Men Products</h4>
    </div>
  );
};

export default MenProducts;
