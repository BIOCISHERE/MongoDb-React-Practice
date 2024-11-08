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
            <span className="card-text fauxLetters">
              {/* Create the func turnRating in the flux context and use it here with props.rating */}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
