import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Properties from "./Properties";
import Details from "./Details";

import "normalize.css";
import "./app.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route component={Navbar} />
          <Switch>
            <Route path="/properties" component={Properties} exact />
            <Route path="/property-details/:id" component={Details} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
