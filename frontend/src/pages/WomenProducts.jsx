import React, { useContext, useState } from "react";
import Context from "../store/Context.jsx";
import ProductCard from "../components/ProductCard.jsx";

const WomenProducts = () => {
  const { store, actions } = useContext(Context);

  const [isTshirt, setIsTshirt] = useState(false);
  const [isSweaters, setIsSweaters] = useState(false);
  const [isPants, setIsPants] = useState(false);
  const [isDresses, setIsDresses] = useState(false);
  const [isJeans, setIsJeans] = useState(false);
  const [isPurses, setIsPurses] = useState(false);
  const [isWallets, setIsWallets] = useState(false);
  const [isBelts, setIsBelts] = useState(false);
  const [isScarfs, setIsScarfs] = useState(false);
  const [isPanties, setIsPanties] = useState(false);
  const [isBras, setIsBras] = useState(false);
  const [isPantys, setIsPantys] = useState(false);
  const [isSocks, setIsSocks] = useState(false);

  const turnClass = (info) => {
    if (info.category == 1) {
      return isTshirt ? "col" : "d-none";
    } else if (info.category == 2) {
      return isSweaters ? "col" : "d-none";
    } else if (info.category == 4) {
      return isPants ? "col" : "d-none";
    } else if (info.category == 5) {
      return isDresses ? "col" : "d-none";
    } else if (info.category == 6) {
      return isJeans ? "col" : "d-none";
    } else if (info.category == 7) {
      return isPurses ? "col" : "d-none";
    } else if (info.category == 8) {
      return isWallets ? "col" : "d-none";
    } else if (info.category == 9) {
      return isBelts ? "col" : "d-none";
    } else if (info.category == 10) {
      return isScarfs ? "col" : "d-none";
    } else if (info.category == 11) {
      return isPanties ? "col" : "d-none";
    } else if (info.category == 12) {
      return isBras ? "col" : "d-none";
    } else if (info.category == 13) {
      return isPantys ? "col" : "d-none";
    } else if (info.category == 14) {
      return isSocks ? "col" : "d-none";
    }
  };

  const returnProducts = () => {
    if (
      !isTshirt &&
      !isSweaters &&
      !isPants &&
      !isDresses &&
      !isJeans &&
      !isPurses &&
      !isWallets &&
      !isBelts &&
      !isScarfs &&
      !isPanties &&
      !isBras &&
      !isPantys &&
      !isSocks
    ) {
      return store.womenProducts.map((item, index) => (
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
      return store.womenProducts.map((item, index) => (
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
          <h4>Womenswear</h4>
          <div className="container-fluid my-1">
            <h6>Type Of Garment</h6>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="TshirtCheck"
                onClick={() => setIsTshirt(!isTshirt)}
              />
              <label className="form-check-label" htmlFor="TshirtCheck">
                T-shirts
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="SweatersCheck"
                onClick={() => setIsSweaters(!isSweaters)}
              />
              <label className="form-check-label" htmlFor="SweatersCheck">
                Sweaters
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="PantsCheck"
                onClick={() => setIsPants(!isPants)}
              />
              <label className="form-check-label" htmlFor="PantsCheck">
                Pants
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="DressesCheck"
                onClick={() => setIsDresses(!isDresses)}
              />
              <label className="form-check-label" htmlFor="DressesCheck">
                Dresses
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="JeansCheck"
                onClick={() => setIsJeans(!isJeans)}
              />
              <label className="form-check-label" htmlFor="JeansCheck">
                Jeans
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="PursesCheck"
                onClick={() => setIsPurses(!isPurses)}
              />
              <label className="form-check-label" htmlFor="PursesCheck">
                Purses
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="WalletsCheck"
                onClick={() => setIsWallets(!isWallets)}
              />
              <label className="form-check-label" htmlFor="WalletsCheck">
                Wallets
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="BeltsCheck"
                onClick={() => setIsBelts(!isBelts)}
              />
              <label className="form-check-label" htmlFor="BeltsCheck">
                Belts
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="ScarfsCheck"
                onClick={() => setIsScarfs(!isScarfs)}
              />
              <label className="form-check-label" htmlFor="ScarfsCheck">
                Scarfs
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="PantiesCheck"
                onClick={() => setIsPanties(!isPanties)}
              />
              <label className="form-check-label" htmlFor="PantiesCheck">
                Panties
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="BrasCheck"
                onClick={() => setIsBras(!isBras)}
              />
              <label className="form-check-label" htmlFor="BrasCheck">
                Bras
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="PantysCheck"
                onClick={() => setIsPantys(!isPantys)}
              />
              <label className="form-check-label" htmlFor="PantysCheck">
                Pantys
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input border border-dark"
                type="checkbox"
                id="SocksCheck"
                onClick={() => setIsSocks(!isSocks)}
              />
              <label className="form-check-label" htmlFor="SocksCheck">
                Socks
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

export default WomenProducts;
