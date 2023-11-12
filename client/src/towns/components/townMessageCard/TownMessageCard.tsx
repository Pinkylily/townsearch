import classNames from "classnames";
import React from "react";

interface ITownMessageCardProps {
  nbTowns: number;
}

const TownMessageCard: React.FC<ITownMessageCardProps> = ({ nbTowns }) => {
  const getText = (): string => {
    if (nbTowns === 0) return "Aucune ville correspondant au texte saisi";
    if (nbTowns === 1) return "Une ville correspondant au texte saisi";
    return `${nbTowns} villes correspondant au texte saisi`;
  };

  const empty = nbTowns === 0;

  return (
    <div
      className={classNames(
        "flex w-full items-center",
        { "bg-error": empty },
        { "bg-success": !empty },
      )}
    >
      <span className="label-small py-5 pl-7 text-center text-white">
        {getText()}
      </span>
    </div>
  );
};

export default TownMessageCard;
