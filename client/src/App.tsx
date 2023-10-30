import React from "react";
import { Provider } from "react-redux";
import store from "./state/Store";
import MainDisplay from "./mainDisplay/MainDisplay";

function App() {
  return (
    <Provider store={store}>
      <MainDisplay />
    </Provider>
  );
}

export default App;
