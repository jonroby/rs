import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/properties">
          <img
            className="navbar-logo"
            src="https://roofstock-cdn3.azureedge.net/rs-apps/assets/images/roofstock-logo-reversed-907b545688e66dadc22e90bd67d0b66a.svg"
          />
        </Link>
      </div>
    );
  }
}

export default Navbar;
