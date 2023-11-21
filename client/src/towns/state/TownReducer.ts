import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICategoryTowns, ITownState } from "../types/TownType";

const initialState: ITownState = {
  metropole: [],
  domtom: [],
};

const TownSlice = createSlice({
  name: "categoryTowns",
  initialState: initialState,
  reducers: {
    addAllCategories: (state, action: PayloadAction<ICategoryTowns>) => {
      return action.payload;
    },
  },
});

export const { addAllCategories } = TownSlice.actions;

export default TownSlice.reducer;
