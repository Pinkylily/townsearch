import { findCategoriesTownsByQuery } from "../api/TownApi";
import {
  IAddAllCategoriesTownAction,
  ICategoryTowns,
  TOWN_ACTION_TYPE,
} from "../types/TownType";
import { AppThunk } from "../../state/StoreTypes";

const addAllCategoriesTown = (
  categoryTowns: ICategoryTowns
): IAddAllCategoriesTownAction => ({
  type: TOWN_ACTION_TYPE.ADD_ALL_CATEGORIES,
  categoryTowns,
});

export const searchTown =
  (query: string): AppThunk =>
  async (dispatch) => {
    const result = await findCategoriesTownsByQuery(query);
    dispatch(addAllCategoriesTown(result));
  };
