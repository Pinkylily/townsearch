import { ICategoryTowns } from "../types/TownType";

export const findCategoriesTownsByQuery = async (
  query: string
): Promise<ICategoryTowns> => {
  const queryParams = query.trim() !== "" ? `?search=${query}` : "";
  const response = await fetch(`http://localhost:5000/towns${queryParams}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.json();
};
