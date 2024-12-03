import React, { useContext, useState } from "react";
import Context from "../store/Context.jsx";
import ProductCard from "../components/ProductCard.jsx";

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

  const returnProducts = () => {
    if (!isUrban && !isSport && !isShoe && !isSandals) {
      return store.footwearProducts.map((item, index) => (
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
      return store.footwearProducts.map((item, index) => (
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
    <div className="container-fluid my-1">
      <div className="row">
        <div className="col-2 border border-dark-subtle rounded-end">
          <h4>Footwear</h4>
          <div className="container-fluid my-1">
            <h6>Type of footwear</h6>
            {/* Under this add the checkboxes */}
          </div>
        </div>
        <div className="col-10"></div>
      </div>
    </div>
  );
};

export default FootwearProducts;
