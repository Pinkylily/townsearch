import TownReducer from "../towns/state/TownReducer";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { categoryTowns: TownReducer },
});

export default store;
