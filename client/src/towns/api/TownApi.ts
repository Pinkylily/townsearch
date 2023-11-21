import { QueryFunction } from "@tanstack/react-query";
import { ICategoryTowns } from "../types/TownType";

export const findCategoriesTowns: QueryFunction<
  ICategoryTowns,
  ["categoryTowns", string]
> = async ({ queryKey }): Promise<ICategoryTowns> => {
  const query = queryKey[1];
  const queryParams = query.trim() !== "" ? `?search=${query}` : "";
  const response = await fetch(`http://localhost:5000/towns${queryParams}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
