import React from "react";
import { ITown } from "../../types/TownType";

import "./townCard.css";

interface ITownCardProps {
  town: ITown;
}

const TownCard: React.FC<ITownCardProps> = ({ town }) => {
  return (
    <div className="townCard">
      <div className="townCard__wrapper">
        <span className="townCard__title">{town.nomCommune}</span>
        <span className="townCard__label">{town.codePostal}</span>
      </div>
    </div>
  );
};

export default TownCard;
