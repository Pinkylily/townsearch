import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { debounce } from "lodash-es";

interface ISearchBarProps {
  onSearch(s: string): void;
  hasError?: boolean;
}

const SearchBar: React.FC<ISearchBarProps> = ({ onSearch, hasError }) => {
  const [search, setSearch] = useState<string>("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, 500),
    [onSearch],
  );

  useEffect(() => {
    debouncedSearch(search);
  }, [search, debouncedSearch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="bg-normal m-8 flex flex-col rounded-xl px-7 py-5">
      <label className="flex w-full flex-row items-center">
        <span className="label-normal whitespace-nowrap text-left text-black">
          Je recherche...
        </span>
        <input
          className="bg-input label-normal ml-3 h-10 w-full rounded-xl border-none pl-8 text-left"
          name="searchBar"
          type="search"
          value={search}
          onChange={onChange}
          placeholder="...une ville, un code postal"
        />
      </label>
      {hasError ? (
        <div className="bg-error label-small mt-3 p-4 text-center text-white">
          <span>Une erreur est survenue</span>
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
