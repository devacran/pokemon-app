import React from "react";
import ReactDOM from "react-dom";
const app = document.getElementById("app");
import "./styles.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
window.sessionStorage.setItem("historyPage", "/");
const initialState = {
  historyPage: "",
  myList: []
};
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  app
);
