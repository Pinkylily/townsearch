import { IGlobalState } from "../../state/StoreTypes";
import { ITownActions, ITownState, TOWN_ACTION_TYPE } from "../types/TownType";

export const defaultTownState: ITownState = {
  categoryTowns: {
    metropole: [],
    domtom: [],
  },
};

const TownReducer = (
  state: IGlobalState = defaultTownState,
  action: ITownActions
) => {
  if (action.type === TOWN_ACTION_TYPE.ADD_ALL_CATEGORIES) {
    return {
      ...state,
      categoryTowns: action.categoryTowns,
    };
  }
  return state;
};

export default TownReducer;
