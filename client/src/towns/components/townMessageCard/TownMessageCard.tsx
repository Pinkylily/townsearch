import classNames from "classnames";
import React from "react";

import "./townMessageCard.css";

interface ITownMessageCardProps {
  nbTowns: number;
}

const TownMessageCard: React.FC<ITownMessageCardProps> = ({ nbTowns }) => {
  const getText = (): string => {
    if (nbTowns === 0) return "Aucune ville correspondant au texte saisi";
    if (nbTowns === 1) return "Une ville correspondant au texte saisi";
    return `${nbTowns} villes correspondant au texte saisi`;
  };

  return (
    <div
      className={classNames("townMessageCard", {
        "townMessageCard--empty": nbTowns === 0,
      })}
    >
      <span className="townMessageCard__label">{getText()}</span>
    </div>
  );
};

export default TownMessageCard;
