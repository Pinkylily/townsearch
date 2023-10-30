import React from "react";

import { shallowEqual, useSelector } from "react-redux";
import CategoriesTowns from "./components/categoriesTowns/CategoriesTowns";
import { ICategoryTowns } from "./types/TownType";

interface ICategoryTownsContainerProps {}

interface ICategoryTownsContainerPropsFromRedux {
  categoryTowns: ICategoryTowns;
}

const CategoriesTownsContainer: React.FC<ICategoryTownsContainerProps> = () => {
  const { categoryTowns } = useSelector<
    any,
    ICategoryTownsContainerPropsFromRedux
  >(
    (state) => ({
      categoryTowns: state.town.categoryTowns,
    }),
    shallowEqual
  );

  return <CategoriesTowns categoryTowns={categoryTowns} />;
};

export default CategoriesTownsContainer;
