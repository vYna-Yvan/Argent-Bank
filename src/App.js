import React from "react";
import "./App.css";
import Navigation from "./router/Navigation.js";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
