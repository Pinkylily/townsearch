import React from "react";

import TownCard from "../townCard/TownCard";
import { ICategoryTownsId, ITown } from "../../types/TownType";
import TownMessageCard from "../townMessageCard/TownMessageCard";

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
    <div className="bg-normal m-8 flex flex-1 flex-col items-center rounded-xl p-9">
      <div className="label-normal mb-3 flex whitespace-nowrap text-center text-black">
        <h1>{CATEGORY_TITLE[categoryName]}</h1>
      </div>
      <TownMessageCard nbTowns={towns.length} />
      <div className="flex w-full flex-wrap justify-between">
        {towns.map((town) => (
          <TownCard key={`${town.id}}`} town={town} />
        ))}
      </div>
    </div>
  );
};

export default CategoryTowns;
