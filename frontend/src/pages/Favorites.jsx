import React from "react";

const Favorites = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 border border-dark mx-auto">
          <div className="row">
            <div className="col text-center">
              {/* If there is no user saved, the h1 tag should be just favorites with a prompt to login use see favorites */}
              <h1>USERNAME's Favorites</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* User favorites products will be mapped and each will be a card */}
              <h3>Product card</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
