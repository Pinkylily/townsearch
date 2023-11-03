import { TownController } from "./controllers/townController";
import { TownRepository } from "./repository/townRepository";
import { TownModel } from "./models/townModel";
import { TownRouter } from "./routes/townRouter";
import { DataAccess } from "./service/dataAccess";
import { TownValidator } from "./utils/validator/townValidator";

const dataAccess = new DataAccess();

const townRepository = new TownRepository({ dataAccess });

const townModel = new TownModel({ townRepository });

const townValidator = new TownValidator();

const townController = new TownController({ townModel, townValidator });

export const townRouter = new TownRouter({ townController });
