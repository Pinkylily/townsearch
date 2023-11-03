import { TownRepository } from "../repository/townRepository";
import { DataAccess } from "../service/dataAccess";
import { PostalCodeService } from "../service/postalCodeService";
import * as TownMapper from "../utils/mapper/townMapper";

async function townInitilization() {
  try {
    const dataAccess = new DataAccess();

    const townRepository = new TownRepository({ dataAccess });

    const postalCodeService = new PostalCodeService();

    await townRepository.createTable();

    const postalCode = await postalCodeService.fetchPostalCodeData();

    await townRepository.createAllTowns(
      postalCode.map(TownMapper.mapPostalCodeFromServiceToTownDocument)
    );

    console.log("Database initialized correctly");
  } catch (e) {
    console.error("an error occured during initialization");
  }
}

export default townInitilization();
