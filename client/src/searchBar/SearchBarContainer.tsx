import React from "react";
import SearchBar from "./SearchBar";
import { useSearchTown } from "../towns/hooks/useSearchTown";

interface ISearchBarContainerProps {}

const SearchBarContainer: React.FC<ISearchBarContainerProps> = () => {
  const [onSearch, hasError] = useSearchTown();

  return <SearchBar onSearch={onSearch} hasError={hasError} />;
};

export default SearchBarContainer;
