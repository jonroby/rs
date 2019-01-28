import React, { Component } from "react";
import Card from "./Card";

import "./card.css";

class CardView extends Component {
  render() {
    return (
      <div className="cards-container">
        {this.props.properties.map(p => (
          <Card {...p} key={p.id} />
        ))}
      </div>
    );
  }
}

export default CardView;
