import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { findCategoriesTownsByQuery } from "../api/TownApi";
import { addAllCategoriesTown } from "../state/TownActions";
import { useEffect, useState } from "react";

export const useSearchTown = () => {
  const [query, setQuery] = useState<string>();

  const dispatch = useDispatch();

  const result = useQuery({
    queryKey: ["categoryTowns", query],
    queryFn: () => findCategoriesTownsByQuery(query),
  });

  useEffect(() => {
    result.data && dispatch(addAllCategoriesTown(result.data));
  }, [dispatch, result.data]);

  return [setQuery];
};
