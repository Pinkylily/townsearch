import { IPostalCodeFromService } from "../../types/postalCodeTypes";
import { ICategoryTowns, ITown, ITownDao, ITownDocument } from "../../types/townTypes";

export const mapPostalCodeFromServiceToTownDocument = (
  town: IPostalCodeFromService
): ITownDocument => ({
  codePostal: town.codePostal,
  codeCommune: town.codeCommune,
  nomCommune: town.nomCommune,
  libelleAcheminement: town.libelleAcheminement,
});

export const mapTownDaoToTown = (townDao: ITownDao): ITown => ({
  id: townDao.TOWN_ID,
  codePostal: townDao.codePostal,
  nomCommune: townDao.nomCommune,
});

export const mapTownsByCategoriesTowns = (towns: ITown[]): ICategoryTowns => {
  const regexDomTom = new RegExp("^9[78]\\d+");

  return towns.reduce<ICategoryTowns>(
    (acc, town) => {
      if (regexDomTom.test(town.codePostal)) {
        acc.domtom.push(town);
      } else {
        acc.metropole.push(town);
      }

      return acc;
    },
    {
      metropole: [],
      domtom: [],
    }
  );
};
