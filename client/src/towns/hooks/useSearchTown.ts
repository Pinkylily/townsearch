import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { findCategoriesTowns } from "../api/TownApi";
import { useEffect, useState } from "react";
import { addAllCategories } from "../state/TownReducer";

export const useSearchTown = (): [(q: string) => void, hasError: boolean] => {
  const [query, setQuery] = useState<string>();

  const dispatch = useDispatch();

  const result = useQuery({
    queryKey: ["categoryTowns", query],
    queryFn: findCategoriesTowns,
  });

  useEffect(() => {
    result?.data && dispatch(addAllCategories(result.data));
  }, [dispatch, result.data]);

  return [setQuery, result.isError];
};
