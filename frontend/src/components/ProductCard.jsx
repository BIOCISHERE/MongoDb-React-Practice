import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../store/Context.jsx";
import TshirtURL from "../assets/t-shirt.png";

const ProductCard = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className={props.cardClass}>
      <Link to={actions.linkManager(props.cardId)} className="text-decoration-none">
        <div className="card-my-1">
          <img className="card-image-top img-fluid" src={TshirtURL} alt="Product image" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <div className="d-flex">
              <span className="card-text me-auto">${actions.returnFormated(props.cost)}</span>
            </div>
            <span className="card-text fauxLetters">{actions.turnRating(props.rating)}</span>
            <span className="card-text ms-1">({props.ratingVotes})</span>
            <br />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
