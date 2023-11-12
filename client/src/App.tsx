import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import store from "./state/Store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CategoriesTownsContainer from "./towns/CategoriesTownsContainer";
import SearchBarContainer from "./searchBar/SearchBarContainer";
import { ErrorBoundary } from "react-error-boundary";
import FallbackOnError from "./fallbackOnError/FallbackOnError";

import "./app.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackOnError}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <SearchBarContainer />
          <CategoriesTownsContainer />
        </Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
