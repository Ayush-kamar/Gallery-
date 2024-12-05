import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className = "card-container">
    <div className="card">
      <Link to={`/Gallery/${props.id}`} >
      <div className="card-image">
        <img src={props.img} alt="Pokemon" />
      </div>
    </Link>
    </div>
    </div>
    )
};

export default Card;


