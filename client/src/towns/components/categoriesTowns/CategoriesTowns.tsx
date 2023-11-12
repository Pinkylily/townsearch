import React from "react";
import CategoryTowns from "../categoryTowns/CategoryTowns";
import { ICategoryTowns, ICategoryTownsId } from "../../types/TownType";

interface ICategoryTownsContainerProps {
  categoryTowns: ICategoryTowns;
}

const CategoriesTowns: React.FC<ICategoryTownsContainerProps> = ({
  categoryTowns,
}) => {
  const categoriesIds = Object.keys(categoryTowns) as ICategoryTownsId[];

  return (
    <div className="flex flex-wrap">
      {categoriesIds.map((id) => (
        <CategoryTowns
          key={`category_${id}`}
          categoryName={id}
          towns={categoryTowns[id]}
        />
      ))}
    </div>
  );
};

export default CategoriesTowns;
