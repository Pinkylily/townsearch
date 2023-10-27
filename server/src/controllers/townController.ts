import { NextFunction, Response, Request } from "express";
import { TownModel } from "../models/townModel";
import { TownValidator } from "../utils/validator/townValidator";

interface ITownControllerDependencies {
  townModel: TownModel;
  townValidator: TownValidator;
}

export class TownController {
  private readonly townModel: TownModel;
  private readonly townValidator: TownValidator;

  constructor(deps: ITownControllerDependencies) {
    this.townModel = deps.townModel;
    this.townValidator = deps.townValidator;
  }

  public findTownsCategoriesByName = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { search } = this.townValidator.validateFindQuery(req.query);

      if (!search || search === "") {
        const townsByCategories =
          await this.townModel.getAllTownsCategoriesByName();
        res.send(townsByCategories);
        return;
      }

      const townsByCategories =
        await this.townModel.findTownsCategoriesByName(search);
      res.send(townsByCategories);
    } catch (e) {
      next(e);
    }
  };
}
