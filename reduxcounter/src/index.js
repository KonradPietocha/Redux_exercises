import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"
import reducer from "./reducers/reducer";
import App from "./App";
import "./styles.css";

var destination = document.querySelector("#container");

//Magazyn
var store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  destination  
);