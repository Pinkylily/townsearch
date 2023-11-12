import React from "react";
import { ITown } from "../../types/TownType";

import "./townCard.css";

interface ITownCardProps {
  town: ITown;
}

const TownCard: React.FC<ITownCardProps> = ({ town }) => {
  return (
    <div className="townCard mt-6 w-64">
      <div className="flex items-center justify-between p-4">
        <span className="whitespace-nowrap text-white">{town.nomCommune}</span>
        <span className="townCard__label">{town.codePostal}</span>
      </div>
    </div>
  );
};

export default TownCard;
