import React from "react";
import { Link } from "react-router-dom";

const Cocktail = (props) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={props.thum} alt={props.drink} />
      </div>
      <div className="cocktail-footer">
        <h3>{props.drink}</h3>
        <h4>{props.Glass}</h4>
        <p>{props.alocohol}</p>
        <Link
          className="btn btn-primary btn-details"
          to={`/cacktail/${props.id}`}
        >
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
