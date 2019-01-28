import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "./Slider";
import Address from "./Address";
import { fetchDetails } from "../redux/actions/creators";

import "./details-screen.css";

class Details extends Component {
  componentDidMount() {
    const id = this.props.location.pathname.split("/")[2];
    if (this.props.id !== id) {
      this.props.fetchDetails(Number(id));
    }
  }

  render() {
    return (
      <div className="details-screen">
        <div className="details-content">
          <div className="details-address">
            <Address address={this.props.address} />
          </div>
          <Slider images={this.props.images} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  id: state.details.id,
  images: state.details.images,
  address: state.details.address
});

const mapDispatchToProps = {
  fetchDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
