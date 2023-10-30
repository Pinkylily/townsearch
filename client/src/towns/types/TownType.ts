export interface ITown {
  codePostal: string;
  nomCommune: string;
}

export type ICategoryTownsId = "metropole" | "domtom";

export type ICategoryTowns = Record<ICategoryTownsId, ITown[]>;

export interface ITownState {
  categoryTowns: ICategoryTowns;
}

export enum TOWN_ACTION_TYPE {
  ADD_ALL_CATEGORIES = "ADD_ALL_CATEGORIES",
}

export interface IAddAllCategoriesTownAction {
  type: TOWN_ACTION_TYPE.ADD_ALL_CATEGORIES;
  categoryTowns: ICategoryTowns;
}

export type ITownActions = IAddAllCategoriesTownAction;
