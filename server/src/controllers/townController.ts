import { NextFunction, Response, Request } from "express";
import { TownModel } from "../models/townModel";
import path from "path";
import config from "../config/config";

interface ITownControllerDependencies {
  townModel: TownModel;
}

export class TownController {
  private readonly townModel: TownModel;

  constructor(deps: ITownControllerDependencies) {
    this.townModel = deps.townModel;
  }

  public getHome = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render(path.join(config.get("frontPath"), "public", "index.html"));
    } catch (e) {
      next(e);
    }
  };
}
