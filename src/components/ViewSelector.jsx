import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import "@fortawesome/fontawesome-free-solid";

import "./view-selector";

class ViewSelector extends Component {
  renderButton(icon, type, selected) {
    return (
      <button
        onClick={() => this.props.toggleView(type)}
        className={selected ? "selected" : "unselected"}
      >
        <FontAwesomeIcon icon={icon} color={selected ? "white" : "#DBDBDB"} />
      </button>
    );
  }

  render() {
    return (
      <div className="view-selector">
        {this.renderButton("th", "CARD", this.props.selected === "CARD")}
        {this.renderButton("list", "LIST", this.props.selected === "LIST")}
      </div>
    );
  }
}

export default ViewSelector;
