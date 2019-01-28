import React, { Component } from "react";

import ListItem from "./ListItem";

import "./list-view.css";

class ListView extends Component {
  render() {
    return (
      <table className="list-view">
        <thead>
          <tr>
            <th />
            <th>Address</th>
            <th>Price</th>
            <th>Rent</th>
            <th>Gross Yield</th>
            <th>Year Built</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.properties.map(p => (
            <ListItem {...p} key={p.id} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ListView;
