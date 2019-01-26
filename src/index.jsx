import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "babel-polyfill";
import App from "./components/App.jsx";
import store from "./redux/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
