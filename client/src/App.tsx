import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import MainDisplay from "./mainDisplay/MainDisplay";
import store from "./state/Store";

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
