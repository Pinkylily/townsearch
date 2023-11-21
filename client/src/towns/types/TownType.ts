export interface ITown {
  id: string;
  codePostal: string;
  nomCommune: string;
}

export type ICategoryTownsId = "metropole" | "domtom";

export type ICategoryTowns = Record<ICategoryTownsId, ITown[]>;

export type ITownState = ICategoryTowns;
