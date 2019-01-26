import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "./Card";

import { fetchProperties } from "../redux/actions/creators";

class Properties extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchProperties();
  }

  render() {
    return (
      <div>
        <Card />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  fetchProperties
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Properties);
