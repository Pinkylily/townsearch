export interface ITownDocument {
  codePostal: string;
  codeCommune: string;
  nomCommune: string;
  libelleAcheminement: string;
}

export interface ITownDao {
  TOWN_ID : string,
  codePostal: string;
  codeCommune: string;
  nomCommune: string;
  libelleAcheminement: string;
}

export interface ITown {
  id : string,
  codePostal: string;
  nomCommune: string;
}

type ICategoryTownsId = "metropole" | "domtom";

export type ICategoryTowns = Record<ICategoryTownsId, ITown[]>;

export type IFindQueryParams = { search: string };
