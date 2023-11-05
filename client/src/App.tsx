import React from "react";
import { Provider } from "react-redux";
import store from "./state/Store";
import MainDisplay from "./mainDisplay/MainDisplay";
import { createRoot } from "react-dom";

const App = () => {
  return (
    <Provider store={store}>
      <MainDisplay />
    </Provider>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
