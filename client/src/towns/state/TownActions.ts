import {
  IAddAllCategoriesTownAction,
  ICategoryTowns,
  TOWN_ACTION_TYPE,
} from "../types/TownType";

export const addAllCategoriesTown = (
  categoryTowns: ICategoryTowns
): IAddAllCategoriesTownAction => ({
  type: TOWN_ACTION_TYPE.ADD_ALL_CATEGORIES,
  categoryTowns,
});
