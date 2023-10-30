import { combineReducers } from "redux";
import TownReducer from "../towns/state/TownReducer";

const RootReducer = combineReducers({
  town: TownReducer,
});

export default RootReducer;
