import { IPostalCodeFromService } from "../../types/postalCodeTypes";
import { ICategoryTowns, ITown } from "../../types/townTypes";

export const mapPostalCodeFromServiceToTownDocument = (
  town: IPostalCodeFromService
): ITown => ({
  codePostal: town.codePostal,
  codeCommune: town.codeCommune,
  nomCommune: town.nomCommune,
  libelleAcheminement: town.libelleAcheminement,
});

export const mapTownDaoToTown = (townDao: ITown): ITown => ({
  codeCommune: townDao.codeCommune,
  codePostal: townDao.codePostal,
  nomCommune: townDao.nomCommune,
  libelleAcheminement: townDao.libelleAcheminement,
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
