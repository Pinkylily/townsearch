import React from "react";

import { shallowEqual, useSelector } from "react-redux";
import CategoriesTowns from "./components/categoriesTowns/CategoriesTowns";
import { ICategoryTowns } from "./types/TownType";
import { IGlobalState } from "../state/StoreTypes";

interface ICategoryTownsContainerProps {}

interface ICategoryTownsContainerPropsFromRedux {
  categoryTowns: ICategoryTowns;
}

const CategoriesTownsContainer: React.FC<ICategoryTownsContainerProps> = () => {
  const { categoryTowns } = useSelector<
    IGlobalState,
    ICategoryTownsContainerPropsFromRedux
  >((state) => ({ categoryTowns: state.categoryTowns }), shallowEqual);

  return <CategoriesTowns categoryTowns={categoryTowns} />;
};

export default CategoriesTownsContainer;
