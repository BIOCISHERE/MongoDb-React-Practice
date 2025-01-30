import React from "react";
import ProductCard from "../components/ProductCard.jsx";

const Favorites = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div
            className="container-fluid text-center"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <h1>USERNAME's Favorites</h1>
          </div>
          <div className="container-fluid">
            <div className="row border border-dark-subtle rounded row-cols-2 row-cols-md-4 gx-4 my-3">
              {/* 
              These ProductCard components are just examples
              Later the ProductCard components will be mapped 
            */}
              <ProductCard cardClass="col" name="test" price="10" rating="4" ratingVotes="4" />
              <ProductCard cardClass="col" name="test" price="10" rating="4" ratingVotes="4" />
              <ProductCard cardClass="col" name="test" price="10" rating="4" ratingVotes="4" />
              <ProductCard cardClass="col" name="test" price="10" rating="4" ratingVotes="4" />
              <ProductCard cardClass="col" name="test" price="10" rating="4" ratingVotes="4" />
              <ProductCard cardClass="col" name="test" price="10" rating="4" ratingVotes="4" />
              <ProductCard cardClass="col" name="test" price="10" rating="4" ratingVotes="4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
