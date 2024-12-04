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
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 border border-dark-subtle rounded-end">
          <h4>Footwear</h4>
          <div className="container-fluid my-1">
            <h6>Type of footwear</h6>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="urbanCheck"
                onClick={() => setIsUrban(!isUrban)}
              />
              <label className="form-check-label" htmlFor="urbanCheck">
                Urban Sneakers
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="sportsCheck"
                onClick={() => setIsSport(!isSport)}
              />
              <label className="form-check-label" htmlFor="sportsCheck">
                Sport Sneakers
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="shoesCheck"
                onClick={() => setIsShoe(!isShoe)}
              />
              <label className="form-check-label" htmlFor="shoesCheck">
                Shoes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="sandalsCheck"
                onClick={() => setIsSandals(!isSandals)}
              />
              <label className="form-check-label" htmlFor="sandalsCheck">
                Sandals
              </label>
            </div>
          </div>
        </div>
        <div className="col-10">
          <div className="container-fluid my-3">
            <div className="row row-cols-xm-1 row-cols-sm-2 row-cols-md-4 g-4">
              {returnProducts()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootwearProducts;
