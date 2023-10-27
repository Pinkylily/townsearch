export interface ITown {
  codePostal: string;
  codeCommune: string;
  nomCommune: string;
  libelleAcheminement: string;
}

type ICategoryTownsId = "metropole" | "domtom";

export type ICategoryTowns = Record<ICategoryTownsId, ITown[]>;

export type IFindQueryParams = { search: string };
