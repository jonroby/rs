import React from "react";
import { Link } from "react-router-dom";
import Address from "./Address";

import "./list-item";

const List = props => {
  return (
    <tr className="list-item">
      <td className="image">
        <img src={props.propertyImage} />
      </td>

      <td>
        <Address address={props.address} />
      </td>

      <td>{props.listPrice}</td>

      <td>{props.monthlyRent}</td>

      <td>{props.grossYield}</td>

      <td>{props.yearBuilt}</td>

      <td>
        <Link to={`/property-details/${props.id}`}> See Details</Link>
      </td>
    </tr>
  );
};

export default List;
