import React from "react";
import SearchBar from "./SearchBar";
import { useSearchTown } from "../towns/hooks/useSearchTown";

interface ISearchBarContainerProps {}

const SearchBarContainer: React.FC<ISearchBarContainerProps> = () => {
  const [onSearch] = useSearchTown();

  return <SearchBar onSearch={onSearch} />;
};

export default SearchBarContainer;
