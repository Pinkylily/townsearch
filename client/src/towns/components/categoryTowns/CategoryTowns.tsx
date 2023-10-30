import React from "react";

import TownCard from "../townCard/TownCard";
import { ICategoryTownsId, ITown } from "../../types/TownType";
import TownMessageCard from "../townMessageCard/TownMessageCard";

import "./categoryTowns.css";

interface ICategoryTownsProps {
  categoryName: ICategoryTownsId;
  towns: ITown[];
}

const CATEGORY_TITLE: Record<ICategoryTownsId, string> = {
  metropole: "Villes de métropole",
  domtom: "Villes d'outre-mer",
};

const CategoryTowns: React.FC<ICategoryTownsProps> = ({
  categoryName,
  towns,
}) => {
  return (
    <div className="categoryTowns">
      <div className="categoryTowns__title">
        <h1>{CATEGORY_TITLE[categoryName]}</h1>
      </div>
      <TownMessageCard nbTowns={towns.length} />
      <div className="categoryTowns__list">
        {towns.map((town) => (
          <TownCard town={town} />
        ))}
      </div>
    </div>
  );
};

export default CategoryTowns;
