import React, { Component } from "react";
import { connect } from "react-redux";
import CardView from "./CardView";
import ListView from "./ListView";
import ViewSelector from "./ViewSelector";

import "./properties-screen.css";

import { fetchProperties } from "../redux/actions/creators";

const CARD = "CARD";
const LIST = "LIST";

class Properties extends Component {
  constructor() {
    super();
    this.state = {
      view: CARD
    };
  }

  componentDidMount() {
    // A condition could be added here that checks a page number
    // loaded in the store vs the url (to avoid reloading already
    // existing data, which is what happens currently)
    this.props.fetchProperties();
  }

  displayProperties() {
    switch (this.state.view) {
      case CARD:
        return <CardView {...this.props} />;
      case LIST:
        return <ListView {...this.props} />;
      default:
        return <CardView {...this.props} />;
    }
  }

  toggleView(type) {
    this.setState({ view: type });
  }

  render() {
    return (
      <div className="properties-screen">
        <div>
          <div className="properties-screen-controls">
            <div className="properties-screen-showing">
              Showing {this.props.properties.length} properties
            </div>
            <div>
              <ViewSelector
                selected={this.state.view}
                toggleView={this.toggleView.bind(this)}
              />
            </div>
          </div>
          <div className="properties-screen-view">
            {this.displayProperties()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  properties: state.properties.properties
});

const mapDispatchToProps = {
  fetchProperties
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Properties);
