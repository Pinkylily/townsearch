import { TownRepository } from "../repository/townRepository";
import { ICategoryTowns } from "../types/townTypes";
import * as TownMapper from "../utils/mapper/townMapper";

interface ITownModelDependencies {
  townRepository: TownRepository;
}

export class TownModel {
  private readonly townRepository: TownRepository;

  constructor(deps: ITownModelDependencies) {
    this.townRepository = deps.townRepository;
  }

  public async findTownsCategoriesByName(
    name: string
  ): Promise<ICategoryTowns> {
    const towns = await this.townRepository.findTownsByNameOrPostalCode(name);
    const townsByCategories = TownMapper.mapTownsByCategoriesTowns(towns);

    return townsByCategories;
  }

  public async getAllTownsCategoriesByName(): Promise<ICategoryTowns> {
    const towns = await this.townRepository.getAllTowns();
    const townsByCategories = TownMapper.mapTownsByCategoriesTowns(towns);

    return townsByCategories;
  }
}
