import { TownController } from "./controllers/townController";
import { TownDao } from "./dao/townDao";
import { TownModel } from "./models/townModel";
import { TownRouter } from "./routes/townRouter";

const townDao = new TownDao();

const townModel = new TownModel({ townDao });

const townController = new TownController({ townModel });

export const townRouter = new TownRouter({ townController });
