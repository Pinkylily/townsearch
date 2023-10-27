import { TownController } from "./controllers/townController";
import { TownRepository } from "./repository/townRepository";
import { TownModel } from "./models/townModel";
import { TownRouter } from "./routes/townRouter";
import { DataAccess } from "./service/dataAccess";
import { PostalCodeService } from "./service/postalCodeService";
import { TownValidator } from "./utils/validator/townValidator";

const dataAccess = new DataAccess();

const townDao = new TownRepository({ dataAccess });

const postalCodeService = new PostalCodeService();

const townModel = new TownModel({ townDao, postalCodeService });

townModel.initializedData();

const townValidator = new TownValidator();

const townController = new TownController({ townModel, townValidator });

export const townRouter = new TownRouter({ townController });
