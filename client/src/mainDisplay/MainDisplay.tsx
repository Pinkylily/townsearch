import React from "react";
import SearchBarContainer from "../searchBar/SearchBarContainer";
import CategoriesTownsContainer from "../towns/CategoriesTownsContainer";

interface IMainDisplayProps {}

const MainDisplay: React.FC<IMainDisplayProps> = () => {
  return (
    <div className="mainDisplay">
      <SearchBarContainer />
      <CategoriesTownsContainer />
    </div>
  );
};

export default MainDisplay;
