import { TownRepository } from "../repository/townRepository";
import { PostalCodeService } from "../service/postalCodeService";
import { ICategoryTowns } from "../types/townTypes";
import * as TownMapper from "../utils/mapper/townMapper";

interface ITownModelDependencies {
  townDao: TownRepository;
  postalCodeService: PostalCodeService;
}

export class TownModel {
  private readonly townDao: TownRepository;
  private readonly postalCodeService: PostalCodeService;

  constructor(deps: ITownModelDependencies) {
    this.townDao = deps.townDao;
    this.postalCodeService = deps.postalCodeService;
  }

  public async initializedData() {
    const postalCode = await this.postalCodeService.fetchPostalCodeData();
    this.townDao.createAllTowns(
      postalCode.map(TownMapper.mapPostalCodeFromServiceToTownDocument)
    );
  }

  public async findTownsCategoriesByName(
    name: string
  ): Promise<ICategoryTowns> {
    const towns = await this.townDao.findTownsByNameOrPostalCode(name);
    const townsByCategories = TownMapper.mapTownsByCategoriesTowns(towns);

    return townsByCategories;
  }

  public async getAllTownsCategoriesByName(): Promise<ICategoryTowns> {
    const towns = await this.townDao.getAllTowns();
    const townsByCategories = TownMapper.mapTownsByCategoriesTowns(towns);

    return townsByCategories;
  }
}
