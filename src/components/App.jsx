import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Properties from "./Properties";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/properties" component={Properties} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
