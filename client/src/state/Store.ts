import { defaultTownState } from "../towns/state/TownReducer";
import RootReducer from "./RootReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: RootReducer,
  preloadedState: {
    town: {
      ...defaultTownState,
    },
  },
});

export default store;
