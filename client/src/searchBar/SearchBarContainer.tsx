import React from "react";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { searchTown } from "../towns/state/TownActions";
import { AppDispatch } from "../state/StoreTypes";

interface ISearchBarContainerProps {}

const SearchBarContainer: React.FC<ISearchBarContainerProps> = () => {
  const dispatch: AppDispatch = useDispatch();
  const onSearch = (query: string) => dispatch(searchTown(query));

  return <SearchBar onSearch={onSearch} />;
};

export default SearchBarContainer;
