import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { debounce } from "lodash-es";

import "./searchBar.css";

interface ISearchBarProps {
  onSearch(s: string): void;
}

const SearchBar: React.FC<ISearchBarProps> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, 500),
    [onSearch]
  );

  useEffect(() => {
    debouncedSearch(search);
  }, [search, debouncedSearch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="searchBar">
      <label className="searchBar__content">
        <span className="searchBar__label">Je recherche...</span>
        <input
          className="searchBar__input"
          name="searchBar"
          type="search"
          value={search}
          onChange={onChange}
          placeholder="...une ville, un code postal"
        />
      </label>
    </div>
  );
};

export default SearchBar;
