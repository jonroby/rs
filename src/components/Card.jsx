import React from "react";
import { Link } from "react-router-dom";
import Address from "./Address";

import "./card.css";

const Card = props => {
  return (
    <div className="card">
      <div className="image">
        <Link to={`/property-details/${props.id}`}>
          <img src={props.propertyImage} />
          <span className="overlay">
            <div className="list-price">
              {props.listPrice && props.listPrice}
            </div>
            <div className="year-built">Built in {props.yearBuilt}</div>
          </span>
        </Link>
      </div>

      <div className="card-details">
        <div>
          <div className="card-details-title">Monthly Rent</div>
          <div className="card-details-value">{props.monthlyRent}</div>
        </div>
        <div>
          <div className="card-details-title">Gross Yield</div>
          <div className="card-details-value">{props.grossYield}</div>
        </div>
      </div>

      <div className="card-details-address">
        <Address address={props.address} />
      </div>
    </div>
  );
};

export default Card;
